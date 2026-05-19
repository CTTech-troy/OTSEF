import { motion } from 'framer-motion';
export function Manifesto() {
  return (
    <section className="py-32 lg:py-48 bg-ink text-white relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* Quote mark */}
      <div className="absolute top-16 left-8 lg:left-24 text-[14rem] lg:text-[20rem] font-serif text-white/5 leading-none select-none pointer-events-none">
        "
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="inline-flex items-center gap-2 mb-12">
            
            <span className="font-mono text-xs text-primary tracking-wider uppercase font-semibold">
              — What We Believe
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-12 text-white/90">
            
            Every child is a{' '}
            <span className="editorial-italic text-primary font-normal">
              universe
            </span>{' '}
            of unrealized potential.{' '}
            <span className="text-white/90">
              Our work is to make sure no one gets left behind because of where
              they were born.
            </span>
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.3
            }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 pt-10 border-t border-white/10">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-primary">
                SA
              </div>
              <div>
                <div className="font-semibold text-white">Shadrack Akinola</div>
                <div className="text-sm text-white/50">Founder, OTSEF</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/10" />

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">
                Founded
              </div>
              <div className="font-semibold text-white">
                2024 · Lagos, Nigeria
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
