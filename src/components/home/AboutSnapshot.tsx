import { motion } from 'framer-motion'
export function AboutSnapshot() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background-soft">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image — the single about image, lazy loaded */}
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
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft-lg">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&q=80"
                alt="OTSEF students engaged in learning"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Copy */}
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
              delay: 0.1,
            }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              — About OTSEF
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.05]">
              Building futures, one{' '}
              <span className="editorial-italic font-normal text-slate-500">
                student
              </span>{' '}
              at a time.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              OTSEF is a Lagos-based non-profit dedicated to reducing school
              dropouts. We give young people the structure, mentorship, and
              resources they need to stay in school and build a future of their
              own.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  2024
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  Founded
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">15</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  Programs
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  80%
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  Transition
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
