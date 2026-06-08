import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Mail,
  Phone,
  type LucideIcon,
  Receipt,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'

const donationAmounts = [5000, 10000, 25000, 50000]

const donationFocus = [
  {
    icon: GraduationCap,
    title: 'Scholarships',
    description:
      'Support school retention, tuition assistance, and learning opportunities for children at risk of dropping out.',
  },
  {
    icon: BookOpen,
    title: 'Educational materials',
    description:
      'Provide books, writing materials, library resources, and classroom support that help children learn with dignity.',
  },
  {
    icon: Wrench,
    title: 'Vocational training',
    description:
      'Help young people develop practical skills that can lead to employability, enterprise, and independence.',
  },
  {
    icon: Sparkles,
    title: 'Youth empowerment',
    description:
      'Fund mentorship, career guidance, confidence building, and leadership programs for young people.',
  },
  {
    icon: Users,
    title: 'Community development',
    description:
      'Strengthen school, family, volunteer, and community partnerships that create lasting educational impact.',
  },
]

const impactStats = [
  {
    value: '13+',
    label: 'Libraries supported',
    detail: '10 school libraries and 3 public libraries supplied so far.',
  },
  {
    value: '1',
    label: 'Ongoing initiative',
    detail: 'Book distribution continues as OTSEF reaches more communities.',
  },
  {
    value: '2026',
    label: 'Founded',
    detail: 'A growing foundation with a clear education-first mission.',
  },
  {
    value: 'More',
    label: 'Communities planned',
    detail: 'Future outreach will expand as donor and partner support grows.',
  },
]

const donationMethods = [
  {
    icon: CreditCard,
    title: 'Card payments',
    status: 'Ready for gateway setup',
    description:
      'The page is structured for future card checkout integration with secure payment providers.',
  },
  {
    icon: Landmark,
    title: 'Bank transfer',
    status: 'Available now',
    description:
      'Donors can support OTSEF through direct bank transfer using the foundation account details.',
  },
  {
    icon: Receipt,
    title: 'Paystack',
    status: 'Integration placeholder',
    description:
      'A Paystack checkout button can be connected here when the merchant account is ready.',
  },
  {
    icon: HeartHandshake,
    title: 'Flutterwave',
    status: 'Integration placeholder',
    description:
      'Flutterwave support can be enabled here for local and international donations.',
  },
]

const stories = [
  {
    image: '/img/img10.jpg',
    quote:
      'Books placed in a library can keep serving children long after the first donation is made.',
    name: 'School library partner',
    role: 'Book Distribution Initiative',
  },
  {
    image: '/img/img13.jpg',
    quote:
      'When young people receive learning support and guidance, they begin to see a future they can work toward.',
    name: 'Community volunteer',
    role: 'Youth empowerment support',
  },
  {
    image: '/img/img14.jpg',
    quote:
      'A single opportunity can help a child stay in school, build confidence, and keep moving forward.',
    name: 'OTSEF program team',
    role: 'Education and mentorship',
  },
]

const faqs = [
  {
    question: 'Is my donation secure?',
    answer:
      'Future card payments will be processed through trusted payment gateways. For now, bank transfer donations should be made only to official OTSEF account details shown on this page.',
  },
  {
    question: 'Will I receive a receipt?',
    answer:
      'Yes. Donors can contact OTSEF after payment confirmation, and the team can issue acknowledgment or receipt details for records.',
  },
  {
    question: 'How is my donation used?',
    answer:
      'Donations support education-focused programs including scholarships, books, school resources, mentorship, vocational learning, and community initiatives.',
  },
  {
    question: 'Can I donate monthly?',
    answer:
      'Yes. The donation page supports monthly giving selection and is ready for future recurring payment gateway integration.',
  },
]

const bankDetails = [
  ['Account Name', 'Off The Streets Educational Foundation'],
  ['Bank', 'Zenith Bank'],
  ['Account Number', '1312027932'],
]

function formatAmount(amount: number) {
  return `NGN ${amount.toLocaleString()}`
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-3xl">
      <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
        {eyebrow}
      </div>
      <h2 className="break-words text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

function IconCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-soft">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary-strong">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  )
}

function ImpactCard({
  value,
  label,
  detail,
}: {
  value: string
  label: string
  detail: string
}) {
  return (
    <div className="bg-background-soft border border-slate-200 rounded-2xl p-6 min-h-44">
      <div className="text-4xl font-black text-primary-strong">{value}</div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{label}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p>
    </div>
  )
}

function DonateButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="#donation-options"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-primary-strong focus:outline-none focus:ring-2 focus:ring-primary-strong focus:ring-offset-2 ${className}`}
    >
      Donate Now
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  )
}

export function Donate() {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>(
    'one-time',
  )
  const [selectedAmount, setSelectedAmount] = useState(donationAmounts[1])
  const [customAmount, setCustomAmount] = useState('')

  const activeAmount = customAmount
    ? `NGN ${Number(customAmount).toLocaleString()}`
    : formatAmount(selectedAmount)

  return (
    <div className="flex flex-col bg-background">
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-24 bg-background-soft border-b border-slate-200">
        <div className="site-container">
          <div className="max-w-4xl">
            <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
              Donate Now
            </div>
            <h1 className="break-words text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-7">
              Support a Child's{' '}
              <span className="block sm:inline editorial-italic font-normal text-primary-strong">
                Future Today
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Your donation helps vulnerable children and young people access
              education, learning resources, mentorship, vocational skills, and
              the confidence to pursue better opportunities.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <DonateButton className="w-full sm:w-auto" />
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition-colors hover:border-primary-strong hover:text-primary-strong focus:outline-none focus:ring-2 focus:ring-primary-strong focus:ring-offset-2"
              >
                Speak with the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="site-container">
          <SectionHeader
            eyebrow="Why your donation matters"
            title="Every gift helps close the gap between potential and opportunity."
            description="Donations strengthen practical programs that help children stay in school, access resources, and prepare for meaningful futures."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            {donationFocus.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background-soft border-y border-slate-200">
        <div className="site-container">
          <SectionHeader
            eyebrow="Impact"
            title="A growing foundation with measurable education impact."
            description="These figures can be updated as new program data, donor reports, and community milestones are verified."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <ImpactCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section id="donation-options" className="py-20 lg:py-28 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Donation options"
                title="Choose how you want to give."
                description="Select a suggested amount, enter a custom amount, and choose one-time or monthly support. The controls are ready for future payment gateway integration."
              />
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-background-soft p-6 md:p-8 shadow-soft">
                <div
                  className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-2 border border-slate-200"
                  role="group"
                  aria-label="Donation frequency"
                >
                  {(['one-time', 'monthly'] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFrequency(option)}
                      className={`rounded-xl px-4 py-3 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-strong ${
                        frequency === option
                          ? 'bg-primary text-white'
                          : 'text-slate-600 hover:bg-background-soft'
                      }`}
                    >
                      {option === 'one-time' ? 'One-time' : 'Monthly'}
                    </button>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount('')
                      }}
                      className={`rounded-2xl border px-4 py-4 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-strong ${
                        !customAmount && selectedAmount === amount
                          ? 'border-primary bg-primary-soft text-primary-strong'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-primary-strong'
                      }`}
                    >
                      {formatAmount(amount)}
                    </button>
                  ))}
                </div>

                <label
                  htmlFor="custom-amount"
                  className="mt-6 block text-sm font-bold text-slate-700"
                >
                  Custom amount
                </label>
                <div className="mt-2 flex items-center rounded-2xl border border-slate-200 bg-white px-4 focus-within:ring-2 focus-within:ring-primary-strong">
                  <span className="text-sm font-bold text-slate-500">NGN</span>
                  <input
                    id="custom-amount"
                    type="number"
                    min="1000"
                    inputMode="numeric"
                    value={customAmount}
                    onChange={(event) => setCustomAmount(event.target.value)}
                    placeholder="Enter amount"
                    className="w-full border-0 bg-transparent px-3 py-4 text-base font-semibold text-slate-900 outline-none"
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-bold text-slate-500">
                    Selected donation
                  </div>
                  <div className="mt-2 text-2xl font-black text-slate-900">
                    {activeAmount}
                  </div>
                  <div className="mt-1 text-sm text-slate-600 capitalize">
                    {frequency.replace('-', ' ')} support
                  </div>
                </div>

                <a
                  href="mailto:contact@otsef.org?subject=OTSEF%20Donation%20Support"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-glow transition-colors hover:bg-primary-strong focus:outline-none focus:ring-2 focus:ring-primary-strong focus:ring-offset-2"
                >
                  Continue with donation support
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background-soft border-y border-slate-200">
        <div className="site-container">
          <SectionHeader
            eyebrow="Donation methods"
            title="Flexible giving methods, ready for secure payment integration."
            description="Bank transfer is available now, while payment gateway placeholders are prepared for future Paystack and Flutterwave checkout setup."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {donationMethods.map(({ icon: Icon, ...method }) => (
              <div
                key={method.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary-strong">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-background-soft px-3 py-1 text-xs font-bold text-slate-600">
                    {method.status}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {method.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {bankDetails.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {label}
                </div>
                <div className="mt-3 text-lg font-black text-slate-900">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="site-container">
          <SectionHeader
            eyebrow="Success stories"
            title="Donations create moments that change what young people believe is possible."
            description="These stories can be replaced with named beneficiary testimonials as OTSEF publishes verified program updates."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <motion.article
                key={story.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-background-soft"
              >
                <img
                  src={story.image}
                  alt=""
                  loading="lazy"
                  width="640"
                  height="420"
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-base leading-7 text-slate-700">
                    "{story.quote}"
                  </p>
                  <div className="mt-5 text-sm font-bold text-slate-900">
                    {story.name}
                  </div>
                  <div className="text-sm text-slate-500">{story.role}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background-soft border-y border-slate-200">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Transparency"
                title="Your support is handled with care, accountability, and purpose."
                description="OTSEF is building a donor experience rooted in clear communication, responsible fund use, and regular program updates."
              />
            </div>
            <div className="lg:col-span-7 grid gap-4">
              {[
                'Donations are directed toward education and empowerment programs.',
                'Program updates and impact summaries will be shared as reporting systems mature.',
                'Donors can contact OTSEF for acknowledgment, receipts, and donation inquiries.',
                'Annual reports will be linked here when available.',
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-primary-strong"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="site-container">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions donors often ask."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-background-soft p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-900">
                  {faq.question}
                  <CalendarClock
                    className="h-5 w-5 shrink-0 text-primary-strong transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-ink text-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="font-mono text-xs text-blue-200 mb-4 uppercase tracking-wider">
                Final call to action
              </div>
              <h2 className="break-words text-2xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
                Help turn a child's challenge into a pathway forward.
              </h2>
              <p className="mt-5 max-w-2xl text-base md:text-lg leading-8 text-blue-100">
                Your gift can place books in a library, keep a child learning,
                support mentorship, and open doors to skills that last beyond a
                single school term.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-blue-100">
                <a
                  href="mailto:contact@otsef.org"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  contact@otsef.org
                </a>
                <a
                  href="tel:+2348028449414"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +234 802 844 9414
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <DonateButton className="bg-white text-ink hover:bg-primary hover:text-white" />
              <div className="mt-4 flex items-center gap-2 text-sm text-blue-100 lg:justify-end">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Future gateway-ready donation flow
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
