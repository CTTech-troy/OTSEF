import { motion } from 'framer-motion';
import {
  BookOpen,
  Compass,
  Wrench,
  HeartHandshake,
  ArrowUpRight } from
'lucide-react';
import { Link } from 'react-router-dom';
const focusAreas = [
{
  number: '01',
  title: 'Educational Empowerment',
  description:
  'Providing resources, scholarships, and academic support to keep students in school and thriving.',
  icon: BookOpen,
  accent: 'bg-primary-soft text-primary-strong'
},
{
  number: '02',
  title: 'Student Transition Support',
  description:
  'Guiding secondary school students through the critical transition into university and higher education.',
  icon: Compass,
  accent: 'bg-indigo-100 text-indigo-700'
},
{
  number: '03',
  title: 'Vocational Development',
  description:
  'Equipping youth with practical, market-ready skills for immediate economic empowerment.',
  icon: Wrench,
  accent: 'bg-amber-100 text-amber-700'
},
{
  number: '04',
  title: 'Street-to-School Reintegration',
  description:
  'Identifying out-of-school children and creating structured pathways back into formal education.',
  icon: HeartHandshake,
  accent: 'bg-rose-100 text-rose-700'
}];

export function CoreFocus() {
  return (
    <section className="py-24 lg:py-32 bg-background-soft relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 max-w-6xl">
          <div className="max-w-2xl">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              — Core Pillars
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05]">
              Four pillars.{' '}
              <span className="editorial-italic font-normal text-slate-500">
                One mission.
              </span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-md">
            Each program is designed to meet young people exactly where they are
            — and walk with them toward where they want to be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 rounded-3xl overflow-hidden border border-slate-200">
          {focusAreas.map((area, index) =>
          <motion.div
            key={index}
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
              duration: 0.6,
              delay: index * 0.1
            }}
            className="bg-white p-8 md:p-10 lg:p-12 group hover:bg-background-soft transition-colors duration-500 cursor-pointer">
            
              <div className="flex items-start justify-between mb-8">
                <div
                className={`w-14 h-14 rounded-2xl ${area.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                
                  <area.icon className="w-7 h-7" />
                </div>
                <span className="font-mono text-sm text-slate-300 group-hover:text-slate-500 transition-colors font-semibold">
                  {area.number}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                {area.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-md">
                {area.description}
              </p>

              <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-primary-strong transition-colors">
              
                Explore
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
