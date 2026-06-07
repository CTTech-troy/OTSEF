import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  School,
  Sparkles,
  Users,
} from 'lucide-react'

const storyPoints = [
  'Limited access to learning resources and school support.',
  'A lack of mentorship, role models, and career guidance.',
  'Few practical pathways into employability, enterprise, and self-reliance.',
]

const values = [
  {
    title: 'Empowerment',
    description:
      'We equip young people with the knowledge, skills, and confidence needed to shape their own future.',
  },
  {
    title: 'Integrity',
    description:
      'We uphold transparency, accountability, and ethical practices in our activities and partnerships.',
  },
  {
    title: 'Inclusion',
    description:
      'We believe every child and young person deserves equal access to opportunities regardless of background.',
  },
  {
    title: 'Excellence',
    description:
      'We hold a high standard for programme delivery, stakeholder engagement, and organizational management.',
  },
  {
    title: 'Collaboration',
    description:
      'We work with schools, families, volunteers, businesses, and community organizations to create lasting impact.',
  },
  {
    title: 'Compassion',
    description:
      'We approach our work with empathy, respect, and a genuine commitment to improving lives.',
  },
]

const pillars = [
  {
    icon: BookOpen,
    title: 'Educational Support',
    description:
      'Learning materials, school-based interventions, academic support, and resources that encourage retention and success.',
  },
  {
    icon: Users,
    title: 'Mentorship and Career Guidance',
    description:
      'Mentors, role models, and career development opportunities that help young people make informed decisions.',
  },
  {
    icon: Sparkles,
    title: 'Vocational Skills Development',
    description:
      'Practical skills training, entrepreneurship education, digital literacy, and vocational learning.',
  },
  {
    icon: Compass,
    title: 'Youth Empowerment',
    description:
      'Leadership, confidence, life skills, and social responsibility programmes for children and youths.',
  },
  {
    icon: HeartHandshake,
    title: 'Strategic Partnerships',
    description:
      'Collaboration with schools, businesses, government agencies, development organizations, and communities.',
  },
]

const futureGoals = [
  {
    icon: School,
    title: 'Reach more schools',
    description:
      'Expand educational support programmes into more underserved communities.',
  },
  {
    icon: GraduationCap,
    title: 'Grow mentorship',
    description:
      'Build structured career guidance initiatives for children and young people.',
  },
  {
    icon: HandHeart,
    title: 'Strengthen delivery',
    description:
      'Develop volunteer networks, partner systems, monitoring, and accountability.',
  },
]

export function About() {
  return (
    <div className="flex flex-col bg-background">
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 bg-background-soft border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              - About OTSEF
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-8">
              Helping young people move from vulnerability to{' '}
              <span className="editorial-italic font-normal text-slate-500">
                opportunity.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Off The Streets Educational Foundation helps children and young
              people access education, mentorship, vocational skills, and the
              support they need to build meaningful futures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <div className="mb-4 font-mono text-xs font-semibold uppercase text-primary-strong">
                Our story
              </div>
              <h2 className="mb-6 text-4xl font-bold leading-[1.08] tracking-normal text-slate-900 md:text-5xl">
                Built to bridge the gaps young people face.
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                OTSEF was established in response to a growing challenge:
                children and young people often lose momentum because education,
                guidance, mentorship, and practical skills are not available in
                one dependable pathway.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.85fr_1fr] md:items-start">
                <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                  <img
                    src="/img/Meiran Public Library.jpg"
                    alt="OTSEF visit to Meiran Public Library"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover object-center"
                  />
                </figure>

                <div>
                  <p className="mb-8 text-lg leading-relaxed text-slate-600">
                    We believe every child deserves the opportunity to learn,
                    grow, and reach their full potential regardless of social or
                    economic circumstance.
                  </p>
                  <div className="space-y-5">
                    {storyPoints.map((point) => (
                      <div key={point} className="flex gap-4">
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                          <CheckCircle2 className="h-4 w-4 text-primary-strong" />
                        </div>
                        <p className="leading-relaxed text-slate-600">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 gap-px lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55 }}
              className="bg-white p-8 md:p-10 lg:p-12"
            >
              <div className="mb-4 font-mono text-xs font-semibold uppercase text-primary-strong">
                Mission
              </div>
              <h2 className="mb-5 text-3xl font-bold leading-tight tracking-normal text-slate-900 md:text-4xl">
                Inspire, educate, and empower young people.
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                To inspire, educate, and empower children and young people,
                especially those at risk of social and economic vulnerability,
                through educational support, career guidance, mentorship, and
                vocational skills development programmes.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="bg-white p-8 md:p-10 lg:p-12"
            >
              <div className="mb-4 font-mono text-xs font-semibold uppercase text-primary-strong">
                Vision
              </div>
              <h2 className="mb-5 text-3xl font-bold leading-tight tracking-normal text-slate-900 md:text-4xl">
                A future where every young person can thrive.
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                A society where every child and young person has access to the
                education, guidance, skills, and opportunities needed to achieve
                their full potential and contribute meaningfully to their
                communities.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="bg-background-soft py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 font-mono text-xs font-semibold uppercase text-primary-strong">
              Core values
            </div>
            <h2 className="text-4xl font-bold leading-[1.08] tracking-normal text-slate-900 md:text-5xl">
              The standards that shape every programme.
            </h2>
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 gap-px sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="bg-white p-7 transition-colors hover:bg-background-soft"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary-strong">
                  <span className="font-mono text-sm font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-normal text-slate-900">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="mb-4 font-mono text-xs font-semibold uppercase text-primary-strong">
                Strategic pillars
              </div>
              <h2 className="mb-6 text-4xl font-bold leading-[1.08] tracking-normal text-slate-900 md:text-5xl">
                Five ways we turn care into structure.
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Our programmes are designed to support the whole journey:
                education, guidance, practical skills, confidence, and the
                partnerships that make impact sustainable.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-y border-slate-200">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon

                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="grid grid-cols-1 gap-5 border-b border-slate-200 py-7 last:border-b-0 md:grid-cols-[auto_1fr] md:gap-6"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                        <Icon className="h-6 w-6 text-primary-strong" />
                      </div>
                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <span className="font-mono text-xs font-semibold text-slate-400">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-2xl font-semibold tracking-normal text-slate-900">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="max-w-3xl leading-relaxed text-slate-600">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-soft py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft-lg lg:col-span-5"
            >
              <img
                src="/img/founder.png"
                alt="OTSEF school outreach with school leadership"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </motion.figure>

            <div className="lg:col-span-7">
              <div className="mb-4 font-mono text-xs font-semibold uppercase text-primary-strong">
                Founder's Message
              </div>
              <blockquote className="mb-8 max-w-3xl text-3xl font-bold leading-tight tracking-normal text-slate-900 md:text-4xl">
                Every child deserves the opportunity to dream, learn, and
                succeed.
              </blockquote>
              <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600">
                <p>
                  OTSEF was founded from a simple belief: when young people
                  receive the right support, guidance, and opportunities, they
                  are better positioned to overcome challenges and build
                  meaningful futures.
                </p>
                <p>
                  Across many communities, children and youths face obstacles
                  that limit their educational and personal development. OTSEF
                  exists to address these challenges through practical,
                  community-focused initiatives that support educational
                  achievement, personal development, and skills acquisition.
                </p>
              </div>
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-xl font-bold tracking-normal text-slate-900">
                  Akinola Sheadrack (Pesinpapa)
                </p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-primary-strong">
                  Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="mb-4 font-mono text-xs font-semibold uppercase text-primary-strong">
                Future goals
              </div>
              <h2 className="mb-6 text-4xl font-bold leading-[1.08] tracking-normal text-slate-900 md:text-5xl">
                Building the systems to reach more young people.
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Our next phase is focused on deeper school partnerships,
                structured mentorship, vocational pathways, volunteer networks,
                and measurable social impact across communities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:col-span-7 md:grid-cols-3">
              {futureGoals.map((goal, index) => {
                const Icon = goal.icon

                return (
                  <motion.article
                    key={goal.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="rounded-2xl border border-slate-200 bg-background-soft p-6"
                  >
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                      <Icon className="h-5 w-5 text-primary-strong" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold tracking-normal text-slate-900">
                      {goal.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {goal.description}
                    </p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-background-soft py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <div className="mb-4 font-mono text-xs font-semibold uppercase text-primary-strong">
                Make a donation
              </div>
              <h2 className="mb-6 text-4xl font-bold leading-[1.08] tracking-normal text-slate-900 md:text-5xl">
                Fund the support that keeps young people moving forward.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                Donations help provide educational materials, mentorship,
                programme logistics, and practical support for children and
                youths who need a stronger path into opportunity.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft md:p-8">
                <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div>
                    <dt className="mb-1 text-xs font-semibold uppercase text-slate-500">
                      Account name
                    </dt>
                    <dd className="text-sm font-semibold text-slate-900">
                      Off The Streets Educational Foundation
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-semibold uppercase text-slate-500">
                      Bank
                    </dt>
                    <dd className="text-sm font-semibold text-slate-900">
                      Zenith Bank
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-semibold uppercase text-slate-500">
                      Account number
                    </dt>
                    <dd className="text-lg font-bold text-slate-900">
                      1312027932
                    </dd>
                  </div>
                </dl>

                <div className="mt-7 flex flex-col items-stretch gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-relaxed text-slate-600">
                    Prefer to talk first? Send a message and we will follow up
                    with next steps.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-primary-strong"
                  >
                    Donate now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-normal text-white md:text-5xl">
            Help us create more pathways from the streets into the future.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70">
            Partner with us, sponsor a student, volunteer your expertise, or
            start a conversation about how your organization can support OTSEF.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-ink transition-all hover:scale-[1.02] hover:bg-primary-soft"
            >
              Get in touch
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              View our impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
