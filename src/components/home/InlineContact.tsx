import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'
import { sendContactPayload } from '../../lib/contact'
export function InlineContact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [confirmationSent, setConfirmationSent] = useState(true)
  const [confirmationError, setConfirmationError] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setConfirmationError('')
    setConfirmationSent(true)
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const result = await sendContactPayload({
        source: 'Home page inline contact form',
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        interest: String(formData.get('interest') || ''),
        message: String(formData.get('message') || ''),
      })
      setConfirmationSent(result.confirmationSent !== false)
      setConfirmationError(result.confirmationError || '')
      form.reset()
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    } catch (sendError) {
      setError(
        sendError instanceof Error
          ? sendError.message
          : 'Unable to send message right now.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background-soft">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              Contact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-8">
              Let's start a conversation.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-md">
              Whether you want to partner, sponsor, or simply learn more - we'd
              love to hear from you.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-strong" />
                </div>
                <a
                  href="mailto:contact@otsef.org"
                  className="text-slate-700 hover:text-primary-strong font-medium transition-colors"
                >
                  contact@otsef.org
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-strong" />
                </div>
                <span className="text-slate-700 font-medium">
                  +234 802 844 9414
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-strong" />
                </div>
                <span className="text-slate-700 font-medium">
                  No 21, Kosebinu Road, Meiran, Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="bg-white border border-green-200 rounded-3xl p-10 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message received
                </h3>
                <p className="text-slate-600">
                  {confirmationSent
                    ? "Thank you for reaching out. We've sent a confirmation email and will be in touch within 48 hours."
                    : 'Your message reached OTSEF, but the confirmation email was not delivered. Please check the email address or mail server settings.'}
                </p>
                {!confirmationSent && confirmationError && (
                  <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
                    {confirmationError}
                  </p>
                )}
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-soft space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      className="w-full bg-background-soft border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      className="w-full bg-background-soft border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    I'm interested in
                  </label>
                  <select
                    id="subject"
                    name="interest"
                    className="w-full bg-background-soft border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow"
                  >
                    <option>Partnership</option>
                    <option>Sponsoring a student</option>
                    <option>Volunteering</option>
                    <option>Media inquiry</option>
                    <option>Just saying hello</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-background-soft border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow resize-none"
                  />
                </div>
                {error && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-primary-strong disabled:cursor-not-allowed disabled:opacity-70 text-white rounded-xl font-semibold shadow-glow transition-all"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
