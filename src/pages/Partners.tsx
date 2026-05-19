import { type FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Globe2,
  CheckCircle2 } from
'lucide-react';
export function Partners() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        label="Partners"
        title="Stronger together."
        subtitle="We are currently open to strategic partnerships with organizations who share our vision." />
      

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
            {
              icon: Building2,
              name: 'Government',
              count: '3+'
            },
            {
              icon: GraduationCap,
              name: 'Schools',
              count: '15+'
            },
            {
              icon: HeartHandshake,
              name: 'NGOs',
              count: '8+'
            },
            {
              icon: Briefcase,
              name: 'Corporate',
              count: '12+'
            },
            {
              icon: Globe2,
              name: 'International',
              count: '2+'
            }].
            map((cat, idx) =>
            <motion.div
              key={idx}
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
                delay: idx * 0.1
              }}
              className="soft-card p-6 text-center hover:shadow-soft-lg transition-shadow">
              
                <cat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-slate-900">{cat.name}</h3>
                <div className="text-sm text-slate-500 mt-1">
                  {cat.count} Partners
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Logo Wall */}
      <section className="py-24 bg-background-soft">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Our Network
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
            'Lagos State Ministry',
            'UNICEF Nigeria',
            'Tech4Dev',
            'African Leadership',
            'Educate A Child',
            'YouthHub Africa',
            'Pan-Atlantic Univ',
            'Co-Creation Hub',
            'Save the Children',
            'British Council',
            'MTN Foundation',
            'Dangote Foundation',
            'Ford Foundation',
            'Mastercard Found.',
            'Global Youth Fund',
            'EduCare'].
            map((partner, idx) =>
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 flex items-center justify-center text-center h-24 hover:border-slate-300 transition-colors group">
              
                <span className="font-bold text-sm text-slate-400 group-hover:text-slate-900 transition-colors">
                  {partner}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Partnership Tiers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              title: 'Strategic Partner',
              desc: 'Long-term collaboration on core initiatives and policy advocacy.'
            },
            {
              title: 'Impact Sponsor',
              desc: 'Financial backing for specific cohorts or infrastructure needs.'
            },
            {
              title: 'Program Collaborator',
              desc: 'Joint execution of events, workshops, or vocational training.'
            }].
            map((tier, idx) =>
            <div key={idx} className="glass-card p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {tier.title}
                </h3>
                <p className="text-slate-600 mb-6">{tier.desc}</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary" />{' '}
                    Co-branding opportunities
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> Impact
                    reporting
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-background-soft">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Become a Partner
              </h2>
              <p className="text-slate-600">
                Fill out the form below and our team will get back to you.
              </p>
            </div>

            {submitted ?
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Inquiry Sent!
                </h3>
                <p className="text-slate-600">
                  Thank you for your interest. We will contact you shortly.
                </p>
              </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Organization Name
                    </label>
                    <input
                    required
                    type="text"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow" />
                  
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Contact Person
                    </label>
                    <input
                    required
                    type="text"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow" />
                  
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                    required
                    type="email"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow" />
                  
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Partnership Type
                    </label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow">
                      <option>Strategic Partner</option>
                      <option>Impact Sponsor</option>
                      <option>Program Collaborator</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                  required
                  rows={4}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-strong transition-shadow">
                </textarea>
                </div>
                <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary-strong text-white rounded-xl font-semibold shadow-glow transition-all">
                
                  Submit Inquiry
                </button>
              </form>
            }
          </div>
        </div>
      </section>
    </div>);

}
