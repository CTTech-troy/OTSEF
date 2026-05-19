import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';
export function Impact() {
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        label="Impact"
        title="Pilot & Early Engagements"
        subtitle="Real progress, measurable outcomes, transformed lives." />
      

      {/* Impact Stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              value: '500+',
              label: 'Students Reached'
            },
            {
              value: '25+',
              label: 'Active Partners'
            },
            {
              value: '15',
              label: 'Programs Launched'
            },
            {
              value: '95%',
              label: 'Completion Rate'
            }].
            map((stat, idx) =>
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
              className="soft-card p-8 text-center border-t-4 border-t-primary">
              
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Pilot Highlights */}
      <section className="py-24 bg-background-soft">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              Highlights
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Early Engagements
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
            {
              title: 'Pilot School Outreach',
              desc: 'Successfully reached 10 secondary schools in Lagos, identifying at-risk students for our foundational mentorship.'
            },
            {
              title: 'Varsity Guard Distribution',
              desc: 'Distributed over 200 resource kits containing past questions, study guides, and university application materials.'
            },
            {
              title: 'Community Engagement',
              desc: 'Hosted 5 community town halls to educate parents on the importance of sustained secondary education.'
            },
            {
              title: 'Partnerships In Progress',
              desc: 'Secured commitments from 12 local businesses to provide vocational training apprenticeships.'
            }].
            map((item, idx) =>
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
              className="glass-card p-8 rounded-2xl">
              
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              Gallery
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Impact in action
            </h2>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
            'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
            'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
            'https://images.unsplash.com/photo-1506869640319-ce1a24fd96f3?w=800&q=80'].
            map((src, idx) =>
            <motion.div
              key={idx}
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              className="relative rounded-2xl overflow-hidden group break-inside-avoid">
              
                <img
                src={src}
                alt="Impact"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-4 text-center">
                    Community Engagement
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Stories of Impact */}
      <section className="py-24 bg-background-soft">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Stories of Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              name: 'Samuel O.',
              outcome: 'Now studying Computer Science at UNILAG',
              img: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?w=400&q=80',
              quote:
              "The Varsity Guard program gave me the exact resources I needed to pass my entrance exams. I wouldn't be here without them."
            },
            {
              name: 'Blessing A.',
              outcome: 'Started her own tailoring business',
              img: 'https://images.unsplash.com/photo-1506869640319-ce1a24fd96f3?w=400&q=80',
              quote:
              'Vocational training changed my life. I now have a skill that feeds my family and gives me independence.'
            },
            {
              name: 'Daniel K.',
              outcome: 'Returned to secondary school',
              img: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&q=80',
              quote:
              "I had given up on school, but my mentor showed me why education matters. I'm back in class and doing well."
            }].
            map((story, idx) =>
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
              className="glass-card p-8 rounded-3xl flex flex-col">
              
                <Quote className="w-8 h-8 text-primary-soft mb-6" />
                <p className="text-slate-700 italic mb-8 flex-1">
                  "{story.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                  src={story.img}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover" />
                
                  <div>
                    <div className="font-bold text-slate-900">{story.name}</div>
                    <div className="text-xs font-semibold text-primary-strong">
                      {story.outcome}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-slate-200 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Help us scale our impact
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-involved"
              className="px-8 py-4 bg-primary hover:bg-primary-strong text-white rounded-full font-semibold shadow-glow transition-all hover:-translate-y-1">
              
              Donate Now
            </Link>
            <Link
              to="/partners"
              className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-900 rounded-full font-semibold shadow-sm transition-all hover:-translate-y-1">
              
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>);

}
