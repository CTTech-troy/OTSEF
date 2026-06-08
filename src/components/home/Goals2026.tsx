import { motion } from 'framer-motion'
import {
  Users,
  School,
  HandHeart,
  BookOpen,
  MapPin,
  Calendar,
} from 'lucide-react'

const milestones = [
  {
    icon: BookOpen,
    value: '10+',
    label: 'Book Distribution Drives',
  },
  {
    icon: School,
    value: '5+',
    label: 'School Communities Reached',
  },
  {
    icon: Users,
    value: 'Growing',
    label: 'Volunteer Network',
  },
  {
    icon: HandHeart,
    value: 'Expanding',
    label: 'Partnership Opportunities',
  },
]

const impactPhotos = [
  {
    image: '/img/Meiran Public Library.jpg',
    alt: 'OTSEF book distribution visit at Meiran Public Library',
    title: 'Book Distribution Initiative',
    location: 'Meiran Public Library',
    date: '2026',
    description:
      'OTSEF connected with library leaders to place Varsity Guard resources within a public reading space for young learners.',
  },
  {
    image: '/img/img2.jpg',
    alt: 'Book presentation at Bolade Senior Grammar School, Oshodi',
    title: 'Book Distribution Initiative',
    location: 'Bolade Senior Grammar School, Oshodi',
    date: '2026',
    description:
      'Books were presented to school leadership to support students preparing for life after secondary school.',
  },
  {
    image: '/img/img9.jpg',
    alt: 'Book handoff at Ikeja Senior Grammar School, Oshodi, Lagos',
    title: 'Book Distribution Initiative',
    location: 'Ikeja Senior Grammar School, Oshodi, Lagos',
    date: '2026',
    description:
      'The team shared copies with administrators as part of outreach focused on student guidance and academic readiness.',
  },
  {
    image: '/img/img14.jpg',
    alt: "Book presentation at King's Jewels College",
    title: 'Book Distribution Initiative',
    location: "King's Jewels College",
    date: '2026',
    description:
      'OTSEF delivered books to school representatives to expand access to practical university-transition guidance.',
  },
  {
    image: '/img/img10.jpg',
    alt: 'Library book handoff during an OTSEF distribution visit',
    title: 'Book Distribution Initiative',
    location: 'Ipaja Public Library, Lagos',
    date: '2026',
    description:
      'A library handoff helped make the resource available to young readers who rely on shared learning spaces.',
  },
  {
    image: '/img/img4.jpg',
    alt: 'OTSEF presenting a book to a school leader',
    title: 'Book Distribution Initiative',
    location: 'Bolade Senior Grammar School, Oshodi',
    date: '2026',
    description:
      'School leaders received copies for students, strengthening the foundation for future mentorship and outreach.',
  },
]

export function Goals2026() {
  return (
    <section id="impact" className="py-24 lg:py-32 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-14">
          <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider flex flex-wrap items-center gap-3">
            <span>- Our Impact So Far</span>
            <span className="px-2 py-0.5 rounded-md bg-primary text-white text-[10px] font-bold">
              Founded 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05]">
            Our impact, built through{' '}
            <span className="editorial-italic font-normal text-slate-500">
              milestones
            </span>
            .
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
            From book distribution drives to school and library outreach, each
            visit helps put learning tools closer to the young people who need
            them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {milestones.map((milestone, i) => (
            <motion.div
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
              className="bg-background-soft border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-soft transition-all flex flex-col min-h-44"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center">
                  <milestone.icon className="w-5 h-5 text-primary-strong" />
                </div>
                <span className="font-mono text-xs text-slate-400 font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
                {milestone.value}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mt-auto pt-4 border-t border-slate-200">
                {milestone.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <div className="font-mono text-xs text-primary-strong mb-3 uppercase tracking-wider">
                - Field moments
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Book distribution initiative photos
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-xl">
              A closer look at the schools, libraries, and leaders helping make
              these materials available in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {impactPhotos.map((photo, i) => (
              <motion.article
                key={`${photo.location}-${i}`}
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
                  delay: i * 0.06,
                }}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:border-slate-300 hover:shadow-soft transition-all"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
                    {photo.title}
                  </h4>
                  <div className="space-y-3 mb-5 text-sm text-slate-600">
                    <div className="flex gap-3">
                      <MapPin className="w-4 h-4 text-primary-strong shrink-0 mt-0.5" />
                      <span>{photo.location}</span>
                    </div>
                    <div className="flex gap-3">
                      <Calendar className="w-4 h-4 text-primary-strong shrink-0 mt-0.5" />
                      <span>{photo.date}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pt-5 border-t border-slate-100">
                    {photo.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
