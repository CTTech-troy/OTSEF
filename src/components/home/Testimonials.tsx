import { motion } from 'framer-motion'
const testimonials = [
  {
    quote:
      "OTSEF gave me the mentorship I needed when I was about to drop out. Today, I'm in my second year of university.",
    name: 'Emmanuel D.',
    role: 'Varsity Guard beneficiary',
  },
  {
    quote:
      "The vocational program didn't just teach me a skill it gave me the confidence to start my own business.",
    name: 'Sarah T.',
    role: 'Vocational Graduate',
  },
  {
    quote:
      'Seeing the transformation in these young people is incredible. OTSEF provides a structured, reliable path forward.',
    name: 'Dr. Adebayo',
    role: 'Program Mentor',
  },
]
export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
            - What they say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05]">
            Lives, changed in their{' '}
            <span className="editorial-italic font-normal text-slate-500">
              own
            </span>{' '}
            words.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.figure
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-50px',
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex flex-col bg-background-soft border border-slate-200 rounded-3xl p-8 hover:border-slate-300 transition-colors"
            >
              <div className="text-4xl font-serif text-primary leading-none mb-4">
                "
              </div>
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-8 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="pt-6 border-t border-slate-200">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
