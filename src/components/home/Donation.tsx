import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
const tiers = [
{
  name: 'Supporter',
  price: '$25',
  period: '/mo',
  impact: "Sponsors one student's educational resources.",
  features: [
  'Monthly updates',
  'Annual impact report',
  'Digital certificate'],

  highlighted: false
},
{
  name: 'Builder',
  price: '$100',
  period: '/mo',
  impact: 'Funds mentorship for 5 youth.',
  features: [
  'All Supporter benefits',
  'Quarterly webinar access',
  'Name on donor wall'],

  highlighted: true
},
{
  name: 'Champion',
  price: '$500',
  period: '/mo',
  impact: 'Sponsors a full program cohort.',
  features: [
  'All Builder benefits',
  'VIP event invitations',
  'Direct program matching'],

  highlighted: false
}];

export function Donation() {
  return (
    <section className="py-24 lg:py-32 bg-background-soft">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
            Support Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Invest in the future
          </h2>
          <p className="text-lg text-slate-600">
            Choose a support tier and directly impact the lives of young people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) =>
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
            className={`relative bg-white rounded-3xl p-8 border ${tier.highlighted ? 'border-primary-strong shadow-glow' : 'border-slate-200 shadow-soft'} flex flex-col`}>
            
              {tier.highlighted &&
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-strong text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Most Impact
                </div>
            }

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {tier.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-slate-900">
                  {tier.price}
                </span>
                <span className="text-slate-500 font-medium">
                  {tier.period}
                </span>
              </div>
              <p className="text-sm text-primary-strong font-medium mb-8 pb-8 border-b border-slate-100">
                {tier.impact}
              </p>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) =>
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-slate-600">
                
                    <Check className="w-5 h-5 text-primary-strong shrink-0" />
                    {feature}
                  </li>
              )}
              </ul>

              <button
              className={`w-full py-3 rounded-full font-medium transition-all ${tier.highlighted ? 'bg-ink text-white hover:scale-105' : 'bg-white border border-slate-200 text-slate-900 hover:border-slate-300'}`}>
              
                Donate Now
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
