import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 h-full grid-pattern opacity-60 pointer-events-none" />
      {/* Soft ambient backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-primary/20 bg-primary-soft px-2.5 py-1.5 sm:gap-2 sm:px-3 mb-8"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              <span className="relative rounded-full w-2 h-2 bg-primary" />
            </span>
            <span className="font-mono text-[10px] text-primary-strong uppercase font-semibold tracking-[0.08em] sm:text-xs sm:tracking-wider">
              Off The Streets Educational Foundation
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tightest text-slate-900 mb-8 leading-[1.02]"
          >
            Off the streets.
            <br />
            <span className="editorial-italic font-normal text-primary-strong">
              Into the future.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Empowering children and young people through education, mentorship, vocational development, and community support. 
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-20"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary-strong rounded-full transition-all hover:scale-[1.02] shadow-glow"
            >
              Partner with us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white border border-slate-200 hover:border-slate-300 rounded-full transition-all"
            >
              Donate Now
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto pt-10 border-t border-slate-200"
          >
            <Stat value="100+" label="Students" />
            <Stat value="Growing" label="Partners" />
            <Stat value="13" label="Libraries supported" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-1">
        {value}
      </div>
      <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}
