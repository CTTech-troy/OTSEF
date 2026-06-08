import type { IncomingMessage, ServerResponse } from 'node:http'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

type ApiRequest = IncomingMessage & {
  body?: unknown
}

type ApiResponse = ServerResponse & {
  status: (code: number) => ApiResponse
  json: (payload: unknown) => void
}

type ApiHandler = (
  req: ApiRequest,
  res: ApiResponse,
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
  'CHATBOT_API_URL',
  'CHATBOT_API_KEY',
  'CHATBOT_SYSTEM_PROMPT',
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

function createApiResponse(res: ServerResponse) {
  const apiResponse = res as ApiResponse

  apiResponse.status = (code: number) => {
    res.statusCode = code
    return apiResponse
  }

  apiResponse.json = (payload: unknown) => {
    if (!res.headersSent) {
      res.setHeader('Content-Type', 'application/json')
    }

    res.end(JSON.stringify(payload))
  }

  return apiResponse
}

function localApiDevPlugin(): Plugin {
  const routes = new Map([
    ['/api/contact', './api/contact.js'],
    ['/api/chat', './api/chat.js'],
  ])

  return {
    name: 'otsef-local-api-dev',
    apply: 'serve',
    configureServer(server) {
      routes.forEach((modulePath, routePath) => {
        server.middlewares.use(routePath, async (req, res, next) => {
          try {
            const apiUrl = new URL(modulePath, import.meta.url)
            const handlerModule = await import(`${apiUrl.href}?t=${Date.now()}`)
            const handler = handlerModule.default as ApiHandler
            const apiReq = req as ApiRequest

            apiReq.body =
              req.method === 'POST' || req.method === 'PUT'
                ? await readJsonBody(req)
                : {}

            await handler(apiReq, createApiResponse(res))
          } catch (error) {
            next(error)
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  applyServerEnv(loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), tailwindcss(), localApiDevPlugin()],
  }
})
