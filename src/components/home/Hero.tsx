import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-background">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern radial-fade-mask opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tertiary/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Dotted pattern accent */}
      <div className="absolute top-32 right-16 w-32 h-32 dotted-pattern opacity-60 hidden lg:block pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left: copy */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Status badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6
              }}
              className="inline-flex items-center gap-3 self-start mb-10">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary-soft">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  <span className="relative rounded-full w-2 h-2 bg-primary" />
                </span>
                <span className="font-mono text-xs text-primary-strong tracking-wider uppercase font-semibold">
                  Now active in Lagos
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                Est. 2024
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.1
              }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tightest text-slate-900 mb-6 leading-[0.95]">
              
              Off the streets.
              <br />
              <span className="editorial-italic text-primary-strong font-normal text-[1.1em]">
                Into the future.
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="text-lg sm:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
              
              We help young people stay in school, find{' '}
              <span className="underline-marker text-slate-900 font-medium">
                mentorship
              </span>
              , and build lives of{' '}
              <span className="underline-marker text-slate-900 font-medium">
                purpose
              </span>
              .
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.3
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-12">
              
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-primary hover:bg-primary-strong rounded-full transition-all hover:scale-[1.02] shadow-glow">
                
                Partner With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-900 bg-white border border-slate-200 hover:border-slate-300 rounded-full transition-all shadow-sm">
                
                Support a Student
              </Link>
            </motion.div>

            {/* Stats inline */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.5
              }}
              className="flex items-center gap-8 sm:gap-12 pt-8 border-t border-slate-200">
              
              <div>
                <div className="text-3xl font-bold text-slate-900 tracking-tight">
                  500<span className="text-primary">+</span>
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">
                  Students
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <div className="text-3xl font-bold text-slate-900 tracking-tight">
                  25<span className="text-primary">+</span>
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">
                  Partners
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <div className="text-3xl font-bold text-slate-900 tracking-tight">
                  95<span className="text-primary">%</span>
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">
                  Completion
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: image collage */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.3
            }}
            className="lg:col-span-5 relative h-[500px] lg:h-[640px]">
            
            {/* Main image */}
            <div className="absolute top-0 right-0 w-[78%] h-[75%] rounded-3xl overflow-hidden shadow-soft-lg">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=900&q=80"
                alt="Student studying"
                className="w-full h-full object-cover" />
              
            </div>

            {/* Secondary image — bottom left */}
            <motion.div
              animate={{
                y: [-8, 8, -8]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute bottom-0 left-0 w-[58%] h-[45%] rounded-3xl overflow-hidden shadow-soft-lg border-4 border-white">
              
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80"
                alt="Students collaborating"
                className="w-full h-full object-cover" />
              
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute top-8 -left-2 lg:left-4 bg-white rounded-2xl shadow-soft-lg border border-slate-100 p-4 w-52 z-10">
              
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-primary-soft flex items-center justify-center">
                  <Star className="w-4 h-4 text-primary-strong fill-primary-strong" />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Live Impact
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-900 leading-tight">
                12 students
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                enrolled this month
              </div>
            </motion.div>

            {/* Floating tag */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [6, 4, 6]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute bottom-12 -right-2 lg:right-4 bg-ink text-white rounded-2xl shadow-soft-lg px-5 py-3 z-10"
              style={{
                transform: 'rotate(6deg)'
              }}>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Lagos, Nigeria</span>
              </div>
            </motion.div>

            {/* Decorative dotted accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 dotted-pattern opacity-50 hidden lg:block" />
          </motion.div>
        </div>

        {/* Bottom marquee — featured by */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 0.8
          }}
          className="mt-16 lg:mt-24 pt-8 border-t border-slate-200">
          
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-slate-400">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
              As recognized by
            </span>
            <span className="font-bold text-base hover:text-slate-700 transition-colors">
              UNICEF Nigeria
            </span>
            <span className="font-bold text-base hover:text-slate-700 transition-colors">
              Lagos Ministry of Education
            </span>
            <span className="font-bold text-base hover:text-slate-700 transition-colors">
              Tech4Dev
            </span>
            <span className="font-bold text-base hover:text-slate-700 transition-colors">
              Co-Creation Hub
            </span>
            <span className="font-bold text-base hover:text-slate-700 transition-colors">
              African Leadership Academy
            </span>
          </div>
        </motion.div>
      </div>
    </section>);

}
