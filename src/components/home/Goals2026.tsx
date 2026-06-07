import { motion } from 'framer-motion'
import {
  Users,
  School,
  HandHeart,
  Sparkles,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
const goals = [
  {
    icon: Users,
    value: '1,000',
    unit: 'Students',
    label: 'Reach 1,000 students',
  },
  {
    icon: School,
    value: '20',
    unit: 'Schools',
    label: 'Partner with 20 schools',
  },
  {
    icon: HandHeart,
    value: '50',
    unit: 'Volunteers',
    label: 'Recruit 50 volunteers',
  },
  {
    icon: Sparkles,
    value: 'New',
    unit: 'Program',
    label: 'Launch Skill Empowerment Program',
  },
  {
    icon: GraduationCap,
    value: 'New',
    unit: 'Initiative',
    label: 'Launch Varsity Guard Initiative',
  },
]
export function Goals2026() {
  return (
    <section className="py-24 lg:py-32 bg-background-soft border-y border-slate-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider flex items-center gap-3">
            <span>â€” Roadmap</span>
            <span className="px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold">
              2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05]">
            What we're building{' '}
            <span className="editorial-italic font-normal text-slate-500">
              next
            </span>
            .
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {goals.map((goal, i) => (
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
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-soft transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center">
                  <goal.icon className="w-5 h-5 text-primary-strong" />
                </div>
                <span className="font-mono text-xs text-slate-400 font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-1 leading-none">
                {goal.value}
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
                {goal.unit}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mt-auto pt-4 border-t border-slate-100">
                {goal.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
        >
          <p className="text-slate-600">
            Want to help us hit these milestones?
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-strong rounded-full transition-all hover:scale-[1.02]"
          >
            Be part of 2026
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
