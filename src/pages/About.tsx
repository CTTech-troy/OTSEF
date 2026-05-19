import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import {
  Target,
  Compass,
  Shield,
  Heart,
  Star,
  Users,
  CheckCircle,
  Lightbulb } from
'lucide-react';
import { Link } from 'react-router-dom';
export function About() {
  return (
    <div className="flex flex-col bg-background">
      <PageHero
        label="Who We Are"
        title="Building futures, one student at a time."
        subtitle="Discover the mission, vision, and people driving OTSEF forward." />
      

      {/* Founder's Message */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="relative rounded-3xl overflow-hidden shadow-soft-lg aspect-[4/5]">
              
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Shadrack Akinola"
                className="w-full h-full object-cover" />
              
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
                Founder's Message
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                A commitment to the next generation.
              </h2>
              <div className="soft-card p-8 border-l-4 border-l-primary-strong bg-background-soft">
                <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                  "When we look at young people on the streets, we don't see a
                  lost cause; we see untapped potential. OTSEF was born out of
                  the conviction that with the right guidance, resources, and
                  mentorship, every child can rewrite their story. We are not
                  just keeping them in school—we are preparing them for life."
                </p>
                <div className="font-bold text-slate-900">Shadrack Akinola</div>
                <div className="text-sm text-slate-500">Founder, OTSEF</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background-soft">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
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
              className="glass-card p-10 rounded-3xl">
              
              <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-strong" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To empower young people through education, mentorship, and skill
                development while reducing school dropouts and taking children
                off the streets.
              </p>
            </motion.div>
            <motion.div
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
                delay: 0.2
              }}
              className="glass-card p-10 rounded-3xl">
              
              <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-primary-strong" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                A society where every young person has access to guidance,
                opportunity, and a clear path to a productive future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              Core Values
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              The principles that guide us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
              icon: Shield,
              title: 'Integrity',
              desc: 'We operate with transparency and honesty in all our engagements.'
            },
            {
              icon: Heart,
              title: 'Empathy',
              desc: "We approach every student's unique situation with deep understanding."
            },
            {
              icon: Star,
              title: 'Excellence',
              desc: 'We strive for the highest quality in our programs and mentorship.'
            },
            {
              icon: Users,
              title: 'Inclusion',
              desc: 'We believe every child deserves a chance, regardless of background.'
            },
            {
              icon: CheckCircle,
              title: 'Accountability',
              desc: 'We take responsibility for our outcomes and commitments.'
            },
            {
              icon: Lightbulb,
              title: 'Innovation',
              desc: 'We continuously adapt our methods to meet modern educational needs.'
            }].
            map((value, idx) =>
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
              className="soft-card p-8 hover:-translate-y-1 transition-transform">
              
                <value.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-background-soft">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              Our Journey
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Milestones of impact
            </h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
            {[
            {
              year: '2024',
              title: 'OTSEF Founded',
              desc: 'Established with a clear mission to tackle school dropout rates in Lagos.'
            },
            {
              year: '2024',
              title: 'First Cohort',
              desc: 'Successfully enrolled our first group of 50 students into the mentorship program.'
            },
            {
              year: '2025',
              title: 'Varsity Guard Launch',
              desc: 'Initiated our flagship program for secondary school transition.'
            },
            {
              year: '2025',
              title: 'Scale to 500+',
              desc: 'Expanded our reach to over 500 students across multiple districts.'
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
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
                <div className="hidden md:block flex-1" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background-soft -translate-x-1/2 z-10" />
                <div className="flex-1 pl-12 md:pl-0 w-full">
                  <div
                  className={`glass-card p-6 rounded-2xl ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  
                    <div className="text-primary-strong font-bold text-xl mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              Leadership
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Meet the team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              name: 'Shadrack Akinola',
              role: 'Founder & Executive Director',
              img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
            },
            {
              name: 'Amina Bello',
              role: 'Head of Programs',
              img: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?w=400&q=80'
            },
            {
              name: 'David Ojo',
              role: 'Community Outreach Lead',
              img: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&q=80'
            },
            {
              name: 'Grace Nnamdi',
              role: 'Mentorship Coordinator',
              img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80'
            }].
            map((member, idx) =>
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
              className="text-center group">
              
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-soft group-hover:shadow-soft-lg transition-all">
                  <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background-soft border-t border-slate-200 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Be part of our story
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/get-involved"
              className="px-8 py-4 bg-primary hover:bg-primary-strong text-white rounded-full font-semibold shadow-glow transition-all hover:-translate-y-1">
              
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-900 rounded-full font-semibold shadow-sm transition-all hover:-translate-y-1">
              
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>);

}
