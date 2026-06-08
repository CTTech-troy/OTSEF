import type { IncomingMessage, ServerResponse } from 'node:http'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

type ContactRequest = IncomingMessage & {
  body?: unknown
}

type ContactResponse = ServerResponse & {
  status: (code: number) => ContactResponse
  json: (payload: unknown) => void
}

type ContactHandler = (
  req: ContactRequest,
  res: ContactResponse,
) => Promise<void> | void

const serverEnvKeys = [
  'RESEND_API_KEY',
  'MAIL_PROVIDER',
  'MAIL_TO',
  'SITE_URL',
  'DONATE_URL',
  'DONATION_ACCOUNT_NAME',
  'DONATION_BANK',
  'DONATION_ACCOUNT_NUMBER',
]

function applyServerEnv(env: Record<string, string>) {
  serverEnvKeys.forEach((key) => {
    process.env[key] ||= env[key]
  })
}

function readJsonBody(req: IncomingMessage) {
  return new Promise<unknown>((resolve, reject) => {
    let rawBody = ''

    req.setEncoding('utf8')
    req.on('data', (chunk) => {
      rawBody += chunk
    })
    req.on('end', () => {
      if (!rawBody) {
        resolve({})
        return
      }

      try {
        resolve(JSON.parse(rawBody))
      } catch {
        reject(new Error('Invalid JSON request body.'))
      }
    })
    req.on('error', reject)
  })
}

function createContactResponse(res: ServerResponse) {
  const contactResponse = res as ContactResponse

  contactResponse.status = (code: number) => {
    res.statusCode = code
    return contactResponse
  }

  contactResponse.json = (payload: unknown) => {
    if (!res.headersSent) {
      res.setHeader('Content-Type', 'application/json')
    }

    res.end(JSON.stringify(payload))
  }

  return contactResponse
}

function contactApiDevPlugin(): Plugin {
  return {
    name: 'otsef-contact-api-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        try {
          const contactApiUrl = new URL('./api/contact.js', import.meta.url)
          const handlerModule = await import(
            `${contactApiUrl.href}?t=${Date.now()}`
          )
          const handler = handlerModule.default as ContactHandler
          const contactReq = req as ContactRequest

          contactReq.body =
            req.method === 'POST' || req.method === 'PUT'
              ? await readJsonBody(req)
              : {}

          await handler(contactReq, createContactResponse(res))
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  applyServerEnv(loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), tailwindcss(), contactApiDevPlugin()],
  }
})
