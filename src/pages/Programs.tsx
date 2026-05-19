import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
const categories = ['All', 'Education', 'Mentorship', 'Vocational', 'Outreach'];
const programs = [
{
  id: 1,
  title: 'Varsity Guard Initiative',
  category: 'Education',
  image:
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
  purpose:
  'Providing comprehensive support for secondary school students to ensure successful transition into university.',
  target: 'Secondary school students preparing for university',
  impacts: [
  'University admission guidance',
  'Scholarship application support',
  'Academic resource provision'],

  status: 'Active',
  statusColor: 'bg-green-500'
},
{
  id: 2,
  title: 'Youth Guidance & Mentorship',
  category: 'Mentorship',
  image:
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
  purpose:
  'Pairing at-risk youth with experienced professionals to provide life guidance, career advice, and emotional support.',
  target: 'Youth aged 13-19 in underserved communities',
  impacts: [
  '1-on-1 professional mentorship',
  'Monthly leadership workshops',
  'Career path mapping'],

  status: 'Scaling',
  statusColor: 'bg-blue-500'
},
{
  id: 3,
  title: 'Vocational Training',
  category: 'Vocational',
  image:
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  purpose:
  'Equipping young people with practical, market-ready skills for immediate economic empowerment and self-reliance.',
  target: 'Out-of-school youth seeking technical skills',
  impacts: [
  'Hands-on technical training',
  'Entrepreneurship basics',
  'Starter toolkit provision'],

  status: 'Active',
  statusColor: 'bg-green-500'
},
{
  id: 4,
  title: 'School Outreach Programs',
  category: 'Outreach',
  image:
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
  purpose:
  'Identifying out-of-school children and creating structured pathways to reintegrate them into formal education.',
  target: 'Children currently out of the formal school system',
  impacts: [
  'Community sensitization',
  'School enrollment assistance',
  'Back-to-school kits'],

  status: 'Pilot',
  statusColor: 'bg-amber-500'
}];

export function Programs() {
  const [activeTab, setActiveTab] = useState('All');
  const filteredPrograms = programs.filter(
    (p) => activeTab === 'All' || p.category === activeTab
  );
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        label="Programs"
        title="Structured pathways to purpose."
        subtitle="Four flagship initiatives designed to take young people from vulnerability to opportunity." />
      

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === cat ? 'bg-primary-soft text-primary-strong border border-primary-soft' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'}`}>
              
                {cat}
              </button>
            )}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredPrograms.map((program) =>
              <motion.div
                key={program.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95
                }}
                transition={{
                  duration: 0.3
                }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col">
                
                  <div className="h-64 relative overflow-hidden">
                    <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover" />
                  
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-strong uppercase tracking-wider">
                      {program.category}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {program.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                        <span
                        className={`w-2 h-2 rounded-full ${program.statusColor}`} />
                      
                        {program.status}
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {program.purpose}
                    </p>

                    <div className="mb-6">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Target Audience
                      </div>
                      <div className="text-sm text-slate-800 font-medium">
                        {program.target}
                      </div>
                    </div>

                    <div className="mb-8 flex-1">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        Expected Impact
                      </div>
                      <ul className="space-y-2">
                        {program.impacts.map((impact, idx) =>
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-600">
                        
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {impact}
                          </li>
                      )}
                      </ul>
                    </div>

                    <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-background-soft border border-slate-200 hover:border-primary hover:bg-primary-soft text-slate-900 hover:text-primary-strong font-semibold rounded-xl transition-colors">
                    
                      Apply / Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background-soft border-t border-slate-200 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Want to support a program?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-involved"
              className="px-8 py-4 bg-primary hover:bg-primary-strong text-white rounded-full font-semibold shadow-glow transition-all hover:-translate-y-1">
              
              Sponsor a Project
            </Link>
          </div>
        </div>
      </section>
    </div>);

}
