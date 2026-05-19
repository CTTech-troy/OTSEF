import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const programs = [
{
  title: 'Varsity Guard',
  purpose: 'University transition support for secondary students.',
  image:
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80'
},
{
  title: 'Youth Mentorship',
  purpose: 'One-on-one guidance from industry professionals.',
  image:
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80'
},
{
  title: 'Vocational Training',
  purpose: 'Market-ready skills for immediate economic empowerment.',
  image:
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
},
{
  title: 'School Outreach',
  purpose: 'Identifying and reintegrating out-of-school children.',
  image:
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80'
}];

export function ProgramsOverview() {
  return (
    <section className="py-24 lg:py-32 bg-background-soft">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              Our Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Structured Pathways
            </h2>
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-primary-strong transition-colors group shrink-0">
            
            View All Programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) =>
          <motion.div
            key={index}
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
              duration: 0.6,
              delay: index * 0.1
            }}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
            
              <div className="h-48 overflow-hidden relative">
                <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-slate-600 mb-6">{program.purpose}</p>
                <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-strong group-hover:text-ink transition-colors">
                
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
