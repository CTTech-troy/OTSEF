import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export function FooterCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 40
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
          className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
            Their future begins with{' '}
            <span className="text-brand-gradient">your support.</span>
          </h2>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us in building a society where every young person has access to
            guidance, opportunity, and a clear path to a productive future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-involved"
              className="w-full sm:w-auto px-10 py-4 text-lg font-medium text-white bg-ink rounded-full transition-all hover:scale-105 shadow-glow">
              
              Support the Mission
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-4 text-lg font-medium text-slate-900 bg-white border border-slate-200 rounded-full transition-all hover:border-slate-300 shadow-sm">
              
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>);

}
