import { type FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        label="Contact"
        title="Let's start a conversation."
        subtitle="We're ready to connect, collaborate, and create impact together." />
      

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
            {
              icon: Mail,
              title: 'Email Us',
              detail: 'contact@otsef.org'
            },
            {
              icon: Phone,
              title: 'Call Us',
              detail: '+234 800 000 0000'
            },
            {
              icon: MapPin,
              title: 'Visit Us',
              detail: 'Victoria Island, Lagos, Nigeria'
            }].
            map((info, idx) =>
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: idx * 0.1
              }}
              className="glass-card p-8 rounded-3xl text-center">
              
                <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-strong" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-slate-600">{info.detail}</p>
              </motion.div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Send a Message
              </h2>
              {submitted ?
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center h-full flex flex-col justify-center">
                
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600">
                    We will get back to you as soon as possible.
                  </p>
                </motion.div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                      required
                      type="text"
                      className="w-full bg-background-soft border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-strong outline-none" />
                    
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email
                      </label>
                      <input
                      required
                      type="email"
                      className="w-full bg-background-soft border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-strong outline-none" />
                    
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full bg-background-soft border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-strong outline-none">
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                      <option>Volunteering</option>
                      <option>Donation</option>
                      <option>Media</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                    required
                    rows={5}
                    className="w-full bg-background-soft border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-strong outline-none">
                  </textarea>
                  </div>
                  <button
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary-strong text-white rounded-xl font-semibold shadow-glow transition-all">
                  
                    Send Message
                  </button>
                </form>
              }
            </div>

            {/* Map & Extras */}
            <div className="space-y-8">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-soft aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31731.296234729!2d3.3791!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMjcuOCJOIDPCsDIyJzQ0LjgiRQ!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0">
                </iframe>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="soft-card p-6">
                  <h4 className="font-bold text-slate-900 mb-2">
                    Office Hours
                  </h4>
                  <p className="text-sm text-slate-600">
                    Monday - Friday
                    <br />
                    9:00 AM - 5:00 PM WAT
                  </p>
                </div>
                <div className="soft-card p-6 flex flex-col justify-center">
                  <h4 className="font-bold text-slate-900 mb-2">
                    Have questions?
                  </h4>
                  <Link
                    to="/#faq"
                    className="text-sm font-semibold text-primary-strong hover:text-ink transition-colors">
                    
                    Check our FAQ &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}
