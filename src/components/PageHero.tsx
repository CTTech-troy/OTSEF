import { motion } from 'framer-motion';
interface PageHeroProps {
  title: string;
  subtitle: string;
  label?: string;
}
export function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-background-soft overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {label &&
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8">
            
              <span className="w-1.5 h-1.5 rounded-full bg-primary-strong animate-pulse" />
              <span className="font-mono text-xs text-primary-strong tracking-wider uppercase">
                {label}
              </span>
            </motion.div>
          }

          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.1
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            
            {title}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>);

}
