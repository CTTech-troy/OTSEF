import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
const reasons = [
  {
    title: 'Measurable outcomes',
    description:
      '95% program completion. 80% successful transitions. We track every student.',
  },
  {
    title: 'Built for scale',
    description:
      'Our model is designed to replicate across Lagos and the broader African continent.',
  },
  {
    title: 'Trusted by institutions',
    description:
      'Partnerships with UNICEF, government ministries, and leading universities.',
  },
  {
    title: '100% youth-focused',
    description:
      'Every program and every dollar is directed toward the young people we serve.',
  },
]
export function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-background-soft">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              — Why OTSEF
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-6">
              Trust, built on{' '}
              <span className="editorial-italic font-normal text-slate-500">
                results
              </span>
              .
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We're not another charity. We're a measurable, scalable system for
              changing young lives.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-50px',
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="flex gap-5 py-6 border-b border-slate-200 last:border-b-0"
              >
                <div className="shrink-0 mt-1">
                  <div className="w-9 h-9 rounded-full bg-primary-soft flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary-strong" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
