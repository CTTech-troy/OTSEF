import { type FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import {
  Heart,
  Users,
  Briefcase,
  GraduationCap,
  HandHeart,
  Globe,
  CheckCircle2 } from
'lucide-react';
export function GetInvolved() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const handleVolunteerSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        label="Get Involved"
        title="Your support changes lives."
        subtitle="There are many ways to be part of our mission." />
      

      {/* Ways to Help */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
              icon: Briefcase,
              title: 'Partner With OTSEF',
              desc: 'Corporate and institutional collaborations.'
            },
            {
              icon: HandHeart,
              title: 'Volunteer',
              desc: 'Give your time to support our events and admin.'
            },
            {
              icon: Globe,
              title: 'Sponsor a Project',
              desc: 'Fund specific community outreach initiatives.'
            },
            {
              icon: Heart,
              title: 'Donate',
              desc: 'Financial contributions to sustain our programs.'
            },
            {
              icon: GraduationCap,
              title: 'Become a Mentor',
              desc: 'Guide a student through their academic journey.'
            },
            {
              icon: Users,
              title: 'Community Support',
              desc: 'Advocate for our cause in your local network.'
            }].
            map((way, idx) =>
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
              className="glass-card p-8 rounded-3xl hover:-translate-y-1 transition-transform">
              
                <way.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {way.title}
                </h3>
                <p className="text-slate-600 mb-6">{way.desc}</p>
                <button className="text-sm font-semibold text-primary-strong hover:text-ink transition-colors">
                  Learn More &rarr;
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-24 bg-background-soft">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Make a Donation
            </h2>

            <div className="inline-flex items-center bg-white border border-slate-200 rounded-full p-1 mb-8">
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${isMonthly ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>
                
                Monthly
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${!isMonthly ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>
                
                One-time
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
            {
              name: 'Supporter',
              price: isMonthly ? '$25' : '$300',
              impact: "Sponsors one student's educational resources."
            },
            {
              name: 'Builder',
              price: isMonthly ? '$100' : '$1,200',
              impact: 'Funds mentorship for 5 youth.',
              highlight: true
            },
            {
              name: 'Champion',
              price: isMonthly ? '$500' : '$6,000',
              impact: 'Sponsors a full program cohort.'
            }].
            map((tier, idx) =>
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 border ${tier.highlight ? 'border-primary-strong shadow-glow relative' : 'border-slate-200 shadow-soft'}`}>
              
                {tier.highlight &&
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-strong text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Impact
                  </div>
              }
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-slate-900 mb-4">
                  {tier.price}
                  <span className="text-lg text-slate-500 font-medium">
                    {isMonthly ? '/mo' : ''}
                  </span>
                </div>
                <p className="text-sm text-primary-strong font-medium mb-8">
                  {tier.impact}
                </p>
                <button
                className={`w-full py-3 rounded-full font-medium transition-all ${tier.highlight ? 'bg-primary hover:bg-primary-strong text-white' : 'bg-white border border-slate-200 text-slate-900 hover:border-slate-300'}`}>
                
                  Donate Now
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Volunteer Application
            </h2>
            <p className="text-slate-600">
              Join our network of dedicated volunteers making a difference.
            </p>
          </div>

          {submitted ?
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Application Received!
              </h3>
              <p className="text-slate-600">
                Our volunteer coordinator will reach out soon.
              </p>
            </motion.div> :

          <form
            onSubmit={handleVolunteerSubmit}
            className="space-y-6 bg-background-soft p-8 rounded-3xl border border-slate-200">
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                  required
                  type="text"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-strong outline-none" />
                
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                  required
                  type="email"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-strong outline-none" />
                
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Areas of Interest
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                'Mentorship',
                'Teaching',
                'Event Support',
                'Fundraising',
                'Admin'].
                map((interest) =>
                <label
                  key={interest}
                  className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  
                      <input
                    type="checkbox"
                    className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" />
                  
                      {interest}
                    </label>
                )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                rows={3}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-strong outline-none">
              </textarea>
              </div>

              <button
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary-strong text-white rounded-xl font-semibold shadow-glow transition-all">
              
                Submit Application
              </button>
            </form>
          }
        </div>
      </section>
    </div>);

}
