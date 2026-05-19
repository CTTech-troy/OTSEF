import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function AboutSnapshot() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image cluster — left */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="lg:col-span-5 relative aspect-[4/5]">
            
            {/* Decorative dotted backdrop */}
            <div className="absolute -inset-6 dotted-pattern opacity-40 rounded-3xl" />

            {/* Main image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-soft-lg">
              <img
                src="/img/img14.jpg"
                alt="Students engaged in learning"
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{
                y: [-8, 8, -8]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -right-4 lg:-right-8 top-12 bg-white rounded-2xl shadow-soft-lg p-5 max-w-[200px]">
              
              <div className="text-3xl font-bold text-slate-900 mb-1">2024</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                Founded with purpose
              </div>
            </motion.div>

            {/* Floating quote */}
            <motion.div
              animate={{
                y: [8, -8, 8]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -left-4 lg:-left-10 bottom-12 bg-ink text-white rounded-2xl shadow-soft-lg p-5 max-w-[220px]">
              
              <div className="text-xs text-primary uppercase tracking-wider font-bold mb-2">
                Our north star
              </div>
              <p className="text-sm leading-relaxed font-medium">
                No child left behind because of where they were born.
              </p>
            </motion.div>
          </motion.div>

          {/* Copy — right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="lg:col-span-7 max-w-2xl">
            
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              — About OTSEF
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.05]">
              A structured path from the{' '}
              <span className="editorial-italic font-normal text-slate-500">
                streets
              </span>{' '}
              to <span className="underline-marker">purpose</span>.
            </h2>

            <div className="space-y-5 text-lg text-slate-600 leading-relaxed mb-10">
              <p>
                OTSEF is a youth-focused non-profit organization dedicated to
                reducing school dropouts. We believe every child deserves a
                chance at a productive future, regardless of their background.
              </p>
              <p>
                Through targeted educational empowerment, vocational
                development, and steadfast mentorship, we are building a
                scalable model for youth reintegration — one that meets young
                people where they are and walks with them all the way home.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-10 pb-10 border-b border-slate-200">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  95%
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  Program completion
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  80%
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  Transition success
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">15</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  Active programs
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-semibold rounded-full transition-all hover:shadow-sm group">
              
              Read our full story
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>);

}
