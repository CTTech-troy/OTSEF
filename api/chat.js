const MAX_MESSAGE_LENGTH = 2000
const MAX_HISTORY_ITEMS = 8

function clean(value, maxLength = MAX_MESSAGE_LENGTH) {
  return String(value || '').trim().slice(0, maxLength)
}

function cleanConfig(value, maxLength = 1000) {
  const cleaned = clean(value, maxLength)
  const normalized = cleaned.toLowerCase()

  if (
    !cleaned ||
    normalized === 'undefined' ||
    normalized === 'null' ||
    normalized.startsWith('your_') ||
    normalized.includes('example.com')
  ) {
    return ''
  }

  return cleaned
}

function fallbackReply(message) {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('donat')) {
    return 'Thank you for wanting to support OTSEF. You can visit the Donate Now page to see donation options, bank transfer details, and future payment gateway options.'
  }

  if (lowerMessage.includes('volunteer') || lowerMessage.includes('partner')) {
    return 'We would love to hear from you. Please use the contact page to share how you would like to volunteer or partner with OTSEF, and our team will follow up.'
  }

  if (lowerMessage.includes('book') || lowerMessage.includes('library')) {
    return 'OTSEF supports school and public libraries through the Book Distribution Initiative. Donations and partnerships help us provide more educational resources to children and young people.'
  }

  return 'Thank you for reaching out to OTSEF. I can help with questions about donations, partnerships, volunteering, and our education initiatives. For direct support, please contact the OTSEF team through the contact page.'
}

function normalizeHistory(history) {
  if (!Array.isArray(history)) {
    return []
  }

  return history
    .slice(-MAX_HISTORY_ITEMS)
    .map((item) => ({
      role: clean(item?.role, 20),
      content: clean(item?.content),
    }))
    .filter((item) => item.role && item.content)
}

function extractReply(data) {
  if (typeof data?.reply === 'string') {
    return data.reply
  }

  if (typeof data?.message === 'string') {
    return data.message
  }

  if (typeof data?.text === 'string') {
    return data.text
  }

  if (typeof data?.output === 'string') {
    return data.output
  }

  return ''
}

async function getAiReply({ message, history }) {
  const endpoint = cleanConfig(process.env.CHATBOT_API_URL)

  if (!endpoint) {
    return {
      reply: fallbackReply(message),
      configured: false,
    }
  }

  const apiKey = cleanConfig(process.env.CHATBOT_API_KEY)
  const systemPrompt =
    cleanConfig(process.env.CHATBOT_SYSTEM_PROMPT, 4000) ||
    'You are the OTSEF website assistant. Reply warmly and briefly. Help visitors with donations, partnerships, volunteering, education programs, and contact next steps. Do not invent facts.'

  console.info('[OTSEF chat] AI request', {
    endpoint,
    hasApiKey: Boolean(apiKey),
    apiKeyPrefix: apiKey ? apiKey.slice(0, 5) : null,
    environment:
      process.env.VERCEL_ENV || process.env.NODE_ENV || 'development',
  })

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
    },
    body: JSON.stringify({
      message,
      history,
      systemPrompt,
      source: 'otsef-website-chat',
    }),
  })

  const responseText = await response.text()
  let data

  try {
    data = responseText ? JSON.parse(responseText) : {}
  } catch {
    data = { text: responseText }
  }

  if (!response.ok) {
    throw new Error(
      `Chatbot API failed with ${response.status}: ${responseText}`,
    )
  }

  const reply = clean(extractReply(data), 4000)

  if (!reply) {
    throw new Error('Chatbot API response did not include a reply.')
  }

  return {
    reply,
    configured: true,
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const payload =
      typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
    const message = clean(payload.message)
    const history = normalizeHistory(payload.history)

    if (!message) {
      return res.status(400).json({ error: 'Please enter a message.' })
    }

    const result = await getAiReply({ message, history })

    return res.status(200).json({
      ok: true,
      ...result,
    })
  } catch (error) {
    console.error('[OTSEF chat] Request failed:', error)
    return res.status(500).json({
      error: 'Unable to reply right now. Please contact OTSEF directly.',
    })
  }
}
