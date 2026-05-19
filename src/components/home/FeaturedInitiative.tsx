import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function FeaturedInitiative() {
  return (
    <section className="py-24 lg:py-32 bg-background-soft relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-soft border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
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
                className="font-mono text-xs text-primary-strong mb-6 uppercase tracking-wider">
                
                Featured Initiative
              </motion.div>

              <motion.h2
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
                  delay: 0.1
                }}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                
                Varsity Guard Project
              </motion.h2>

              <motion.p
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
                  delay: 0.2
                }}
                className="text-lg text-slate-600 mb-10 leading-relaxed">
                
                Preparing secondary school students for successful university
                transition. We provide the necessary academic resources,
                mentorship, and psychological support to ensure students not
                only enter higher education but thrive within it.
              </motion.p>

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
                }}>
                
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-ink rounded-full transition-all hover:scale-105 shadow-glow">
                  
                  Explore Program
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <div className="relative min-h-[400px] lg:min-h-full bg-slate-100 overflow-hidden">
              <img
                src="/img/img9.jpg"
                alt="Students graduating"
                className="absolute inset-0 w-full h-full object-cover" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}
