import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }
  return (
    <div className="flex flex-col bg-background">
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20 bg-background-soft border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              — Contact
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-6">
              Let's{' '}
              <span className="editorial-italic font-normal text-primary-strong">
                talk
              </span>
              .
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
              Partner, sponsor, volunteer, or simply learn more. We respond
              within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-8">
                Reach us directly
              </h2>
              <div className="space-y-6 mb-12">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value=" contactotsef@gmail.com"
                  href="mailto: contactotsef@gmail.com"
                />
                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value="+234 802 844 9414 "
                  href="tel:+234 802 844 9414 "
                />
                <ContactItem
                  icon={MapPin}
                  label="Contact address"
                  value="No 21, Kosebinu Road, Meiran, Lagos, Nigeria"
                />
              </div>

              <div className="bg-background-soft border border-slate-200 rounded-2xl p-6">
                <div className="font-mono text-xs text-primary-strong mb-2 uppercase tracking-wider">
                  Hours
                </div>
                <div className="text-slate-900 font-medium mb-1">
                  Monday — Friday
                </div>
                <div className="text-slate-600 text-sm">
                  9:00 AM — 5:00 PM WAT
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
                  className="bg-white border border-green-200 rounded-3xl p-12 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message received
                  </h3>
                  <p className="text-slate-600">
                    Thank you. We'll be in touch within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-background-soft border border-slate-200 rounded-3xl p-8 lg:p-10 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="c-name"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Full name
                      </label>
                      <input
                        id="c-name"
                        required
                        type="text"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="c-email"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="c-email"
                        required
                        type="email"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="c-subject"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      I'm interested in
                    </label>
                    <select
                      id="c-subject"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow"
                    >
                      <option>Partnership</option>
                      <option>Sponsoring a student</option>
                      <option>Volunteering</option>
                      <option>Media inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="c-message"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      required
                      rows={6}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-primary-strong text-white rounded-xl font-semibold shadow-glow transition-all"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary-soft flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-strong" />
      </div>
      <div>
        <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
          {label}
        </div>
        <div className="text-slate-900 font-medium">{value}</div>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  )
}
