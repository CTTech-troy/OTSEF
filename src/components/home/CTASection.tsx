import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
export function CTASection() {
  return (
    <section
      id="cta"
      className="py-24 lg:py-32 bg-ink text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
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
            duration: 0.7,
          }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 text-white">
            Their future begins with{' '}
            <span className="editorial-italic font-normal text-primary">
              your support
            </span>
            .
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-12">
            Partner with us, sponsor a student, or simply start a conversation.
            Every action moves a young person closer to purpose.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-ink bg-white hover:bg-primary-soft rounded-full transition-all hover:scale-[1.02]"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all backdrop-blur-sm"
            >
              View our impact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
