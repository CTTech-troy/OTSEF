import { useMemo, useRef, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import {
  Bot,
  Loader2,
  MessageCircle,
  Send,
  Sparkles,
  User,
  X,
} from 'lucide-react'

type ChatRole = 'assistant' | 'user'

type ChatMessage = {
  id: string
  role: ChatRole
  content: string
}

const suggestedMessages = [
  'How can I donate?',
  'How do I volunteer?',
  'Tell me about OTSEF programs',
]

function createMessage(role: ChatRole, content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    content,
  }
}

async function requestChatReply(message: string, history: ChatMessage[]) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      history: history.map(({ role, content }) => ({ role, content })),
    }),
  })

  const responseText = await response.text()
  const data = parseChatResponse(responseText)

  if (!response.ok) {
    throw new Error(data.error || 'Unable to reply right now.')
  }

  return data.reply || 'Thank you for reaching out to OTSEF.'
}

function parseChatResponse(responseText: string) {
  try {
    return responseText
      ? (JSON.parse(responseText) as { reply?: string; error?: string })
      : {}
  } catch {
    return {}
  }
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage(
      'assistant',
      'Hello, I am the OTSEF assistant. Ask me about donations, volunteering, partnerships, or our education programs.',
    ),
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  const latestMessages = useMemo(() => messages.slice(-8), [messages])

  const sendMessage = async (messageText: string) => {
    const cleanMessage = messageText.trim()

    if (!cleanMessage || isSending) {
      return
    }

    const userMessage = createMessage('user', cleanMessage)
    const nextMessages = [...messages, userMessage]

    setInput('')
    setMessages(nextMessages)
    setIsSending(true)

    try {
      const reply = await requestChatReply(cleanMessage, latestMessages)
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage('assistant', reply),
      ])
    } catch (error) {
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage(
          'assistant',
          error instanceof Error
            ? error.message
            : 'Unable to reply right now. Please contact OTSEF directly.',
        ),
      ])
    } finally {
      setIsSending(false)
      window.setTimeout(() => inputRef.current?.focus(), 50)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void sendMessage(input)
  }

  return createPortal(
    <>
      {isOpen && (
        <section
          aria-label="OTSEF chat assistant"
          className="fixed bottom-24 right-3 z-[70] flex max-h-[calc(100dvh-7rem)] min-h-0 w-[calc(100vw-1.5rem)] max-w-[24rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft-lg sm:bottom-24 sm:right-6 sm:w-[24rem] sm:rounded-3xl"
        >
          <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-ink px-5 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 className="truncate text-sm font-bold text-white">
                  OTSEF Assistant
                </h2>
                <p className="truncate text-xs text-blue-100">
                  Donations, programs, and partnerships
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-blue-100 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-background-soft px-4 py-5">
            {messages.map((message) => {
              const isUser = message.role === 'user'

              return (
                <div
                  key={message.id}
                  className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-strong">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      isUser
                        ? 'bg-primary text-white'
                        : 'border border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    {message.content}
                  </div>
                  {isUser && (
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                      <User className="h-4 w-4" aria-hidden="true" />
                    </div>
                  )}
                </div>
              )
            })}

            {isSending && (
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Replying...
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 bg-white p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestedMessages.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => void sendMessage(suggestion)}
                  disabled={isSending}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-primary-strong hover:text-primary-strong disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <label htmlFor="otsef-chat-message" className="sr-only">
                Message
              </label>
              <input
                ref={inputRef}
                id="otsef-chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your message..."
                className="min-w-0 flex-1 rounded-full border border-slate-200 bg-background-soft px-4 py-3 text-sm text-slate-900 outline-none transition-shadow focus:ring-2 focus:ring-primary-strong"
              />
              <button
                type="submit"
                disabled={!input.trim() || isSending}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-strong disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary-strong focus:ring-offset-2"
                aria-label="Send message"
              >
                {isSending ? (
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => {
          setIsOpen((current) => !current)
          window.setTimeout(() => inputRef.current?.focus(), 50)
        }}
        className="fixed bottom-5 right-4 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-glow transition-all hover:-translate-y-1 hover:bg-primary-strong focus:outline-none focus:ring-2 focus:ring-primary-strong focus:ring-offset-2 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-4"
        aria-label={isOpen ? 'Close OTSEF chat' : 'Open OTSEF chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        )}
        <span className="hidden text-sm font-bold sm:inline">Chat with us</span>
      </button>
    </>,
    document.body,
  )
}
