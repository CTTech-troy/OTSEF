import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
const projects = [
  {
    number: '01',
    title: 'Varsity Guard Project',
    category: 'Featured',
    description:
      'Preparing secondary school students for successful university transition through structured academic and emotional support.',
    metrics: [
      {
        label: 'Students supported',
        value: '200+',
      },
      {
        label: 'University placements',
        value: '85%',
      },
      {
        label: 'Active since',
        value: '2025',
      },
    ],
    status: 'Active',
  },
  {
    number: '02',
    title: 'Pilot School Outreach',
    category: 'Education',
    description:
      'Engaged 10 secondary schools across Lagos to identify at-risk students and integrate them into our foundational mentorship.',
    metrics: [
      {
        label: 'Schools reached',
        value: '10',
      },
      {
        label: 'Students enrolled',
        value: '320',
      },
      {
        label: 'Districts covered',
        value: '4',
      },
    ],
    status: 'Active',
  },
  {
    number: '03',
    title: 'Vocational Training Program',
    category: 'Skills',
    description:
      'Equipping out-of-school youth with market-ready skills — from tailoring to digital literacy — for immediate economic independence.',
    metrics: [
      {
        label: 'Graduates',
        value: '120',
      },
      {
        label: 'Employed / self-employed',
        value: '78%',
      },
      {
        label: 'Skill tracks',
        value: '6',
      },
    ],
    status: 'Scaling',
  },
  {
    number: '04',
    title: 'Community Engagement Series',
    category: 'Outreach',
    description:
      'Town halls and parent forums educating Lagos communities on the importance of sustained secondary education.',
    metrics: [
      {
        label: 'Town halls',
        value: '5',
      },
      {
        label: 'Parents reached',
        value: '600+',
      },
      {
        label: 'Local partners',
        value: '12',
      },
    ],
    status: 'Active',
  },
]
const reviews = [
  {
    quote:
      "The Varsity Guard program gave me exactly what I needed. I wouldn't be at UNILAG without them.",
    name: 'Samuel O.',
    outcome: 'Now studying Computer Science at UNILAG',
  },
  {
    quote:
      'Vocational training changed my life. I have a skill that feeds my family and gives me independence.',
    name: 'Blessing A.',
    outcome: 'Founder, Blessing Tailoring',
  },
  {
    quote:
      "I'd given up on school, but my mentor showed me why education matters. I'm back in class.",
    name: 'Daniel K.',
    outcome: 'Returned to secondary school',
  },
]
export function Projects() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero header */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 bg-background-soft border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              — Our work
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-8">
              Real progress.{' '}
              <span className="editorial-italic font-normal text-slate-500">
                Measurable outcomes.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              A look at the projects we've launched, the students we've
              supported, and the communities we've engaged.
            </p>
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: '500+',
                label: 'Students reached',
              },
              {
                value: '25+',
                label: 'Active partners',
              },
              {
                value: '15',
                label: 'Programs launched',
              },
              {
                value: '95%',
                label: 'Completion rate',
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
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
              >
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects list */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.05]">
              Featured projects &{' '}
              <span className="editorial-italic font-normal text-slate-500">
                case studies
              </span>
              .
            </h2>
          </div>

          <div className="space-y-px bg-slate-200 rounded-3xl overflow-hidden border border-slate-200">
            {projects.map((project, i) => (
              <motion.article
                key={i}
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
                  delay: i * 0.05,
                }}
                className="bg-white p-8 md:p-12 lg:p-16 group hover:bg-background-soft transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono text-sm text-slate-400 font-semibold">
                        {project.number}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono uppercase tracking-wider bg-primary-soft text-primary-strong">
                        {project.category}
                      </span>
                      <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {project.status}
                      </div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-6 lg:mb-0">
                      {project.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-3 gap-4 lg:gap-6 pb-6 mb-6 border-b border-slate-200">
                      {project.metrics.map((m, j) => (
                        <div key={j}>
                          <div className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mb-1">
                            {m.value}
                          </div>
                          <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary-strong transition-colors group/link"
                    >
                      Discuss this project
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Client reviews */}
      <section className="py-24 lg:py-32 bg-background-soft">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              — Voices
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.05]">
              Lives, changed in their{' '}
              <span className="editorial-italic font-normal text-slate-500">
                own
              </span>{' '}
              words.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((r, i) => (
              <motion.figure
                key={i}
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
                  delay: i * 0.08,
                }}
                className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col"
              >
                <div className="text-4xl font-serif text-primary leading-none mb-4">
                  "
                </div>
                <blockquote className="text-lg text-slate-700 leading-relaxed mb-6 flex-1">
                  {r.quote}
                </blockquote>
                <figcaption className="pt-6 border-t border-slate-200">
                  <div className="font-semibold text-slate-900">{r.name}</div>
                  <div className="text-sm text-primary-strong font-medium">
                    {r.outcome}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-ink text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-8 max-w-3xl mx-auto">
            Want to support a project like these?
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
