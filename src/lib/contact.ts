export type ContactPayload = {
  source: string
  name: string
  email: string
  interest: string
  message: string
}

export type ContactResponse = {
  ok?: boolean
  confirmationSent?: boolean
  confirmationError?: string
  error?: string
}

function parseContactResponse(responseText: string) {
  try {
    return responseText ? (JSON.parse(responseText) as ContactResponse) : null
  } catch {
    return null
  }
}

export async function sendContactPayload(payload: ContactPayload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const responseText = await response.text()
  const data = parseContactResponse(responseText)

  if (!response.ok) {
    const errorMessage =
      typeof data?.error === 'string'
        ? data.error
        : 'Unable to send message right now.'

    throw new Error(errorMessage)
  }

  return data || { ok: true }
}
