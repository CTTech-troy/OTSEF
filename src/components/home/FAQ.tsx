import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: 'How are donations utilized?',
  a: '100% of public donations go directly to our programs, funding scholarships, educational materials, and mentorship logistics.'
},
{
  q: "Can I volunteer if I don't live in Nigeria?",
  a: 'Yes! We offer virtual mentorship opportunities for global professionals to guide our students.'
},
{
  q: 'How do you select students for the Varsity Guard project?',
  a: 'We partner with local secondary schools to identify high-potential students who are at risk of dropping out due to financial or social constraints.'
},
{
  q: 'Are you open to corporate partnerships?',
  a: 'Absolutely. We work with corporations on CSR initiatives, employee volunteering, and direct program sponsorships.'
},
{
  q: 'How do you measure success?',
  a: 'We track school retention rates, successful transitions to higher education, and post-program employment statistics.'
}];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <div
            key={index}
            className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
            
              <button
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              
                <span className="font-semibold text-slate-900">{faq.q}</span>
                {openIndex === index ?
              <Minus className="w-5 h-5 text-primary-strong shrink-0" /> :

              <Plus className="w-5 h-5 text-slate-400 shrink-0" />
              }
              </button>
              <AnimatePresence>
                {openIndex === index &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                className="px-6 pb-5 text-slate-600">
                
                    {faq.a}
                  </motion.div>
              }
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>);

}
