import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const impactStats = [
  {
    value: '13+',
    label: 'Libraries Supported',
    description:
      '10 school libraries and 3 public libraries supplied with educational resources.',
  },
  {
    value: '1',
    label: 'Ongoing Book Distribution Initiative',
    description:
      'A continuing effort to improve access to learning materials.',
  },
  {
    value: 'Growing',
    label: 'Partnership Network',
    description:
      'Working with schools, volunteers, and community stakeholders.',
  },
  {
    value: 'Expanding',
    label: 'Community Reach',
    description:
      'Building relationships that increase educational opportunities for young people.',
  },
]

const initiativeImpact = [
  '10 School Libraries Supported',
  '3 Public Libraries Supported',
  'Book Distribution Initiative Ongoing',
  'More Communities Planned',
]

export function Projects() {
  return (
    <div className="flex flex-col bg-background">
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 bg-background-soft border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              OUR IMPACT
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-8">
              Real impact.{' '}
              <span className="editorial-italic font-normal text-slate-500">
                Growing reach.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Every book donated, every library supported, and every
              partnership built is a step toward creating better opportunities
              for children and young people.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                }}
                className="bg-background-soft border border-slate-200 rounded-2xl p-6"
              >
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2 leading-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-900 mb-4">
                  {stat.label}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.article
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
            }}
            className="bg-background-soft border border-slate-200 rounded-3xl p-8 md:p-12 lg:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="font-mono text-xs text-primary-strong uppercase tracking-wider">
                    Book Distribution Initiative
                  </div>
                  <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-primary-strong">
                    Ongoing
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-6">
                  Book Distribution Initiative
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  OTSEF's flagship initiative focuses on providing books and
                  educational resources to school and public libraries. Through
                  this programme, we help improve access to learning materials
                  for children and young people while encouraging a stronger
                  reading culture within communities.
                </p>
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
                  Impact So Far
                </h3>
                <ul className="space-y-4">
                  {initiativeImpact.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-primary-strong shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ink text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-8 max-w-3xl mx-auto text-white">
            Want to support the Book Distribution Initiative?
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-ink bg-white hover:bg-primary-soft rounded-full transition-all hover:scale-[1.02]"
          >
            Get in touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
