import { motion } from 'framer-motion';
const stats = [
{
  label: 'Students Reached Annually',
  value: '500',
  suffix: '+'
},
{
  label: 'Educational Resources',
  value: '1,200',
  suffix: '+'
},
{
  label: 'Mentorship Programs',
  value: '15',
  suffix: ''
},
{
  label: 'Community Partnerships',
  value: '25',
  suffix: '+'
}];

export function ImpactVision() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
            Measurable Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Numbers that matter
          </h2>
          <p className="text-lg text-slate-600">
            Our commitment translates into real numbers, driving systemic change
            in communities and individual lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) =>
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
            className="glass-card rounded-2xl p-8 text-center">
            
              <div className="font-mono text-4xl md:text-5xl font-bold text-primary-strong mb-4">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
