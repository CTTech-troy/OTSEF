import { motion } from 'framer-motion'
import { BookOpen, Compass, Wrench, HeartHandshake } from 'lucide-react'
const services = [
  {
    number: '01',
    title: 'Education Support',
    description:
      'Providing books, learning materials, and educational assistance to help children remain in school. ',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'Mentorship & Guidance',
    description:
      'Connecting young people with positive role models, guidance, and life skills.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Vocational Development ',
    description:
      'Creating pathways to practical skills, entrepreneurship, and career opportunities. ',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'Community Partnerships ',
    description:
      'Working with schools, businesses, volunteers, and organizations to expand our impact.',
    icon: HeartHandshake,
  },
]
export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
            - What we do
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05]">
            Four programs.{' '}
            <span className="editorial-italic font-normal text-slate-500">
              One mission.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 rounded-3xl overflow-hidden border border-slate-200">
          {services.map((service, index) => (
            <motion.div
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
                delay: index * 0.05,
              }}
              className="bg-white p-10 lg:p-12 group hover:bg-background-soft transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center group-hover:scale-105 transition-transform">
                  <service.icon className="w-6 h-6 text-primary-strong" />
                </div>
                <span className="font-mono text-sm text-slate-300 group-hover:text-slate-400 transition-colors font-semibold">
                  {service.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-md">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
