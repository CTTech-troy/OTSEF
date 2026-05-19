import { motion } from 'framer-motion';
import { Target, TrendingUp, Award } from 'lucide-react';
const blocks = [
{
  title: 'Mission Impact',
  description:
  "We've reached 500+ youth across Lagos, providing them with the tools, mentorship, and resources needed to stay in school and succeed.",
  icon: <Target className="w-6 h-6 text-primary-strong" />,
  stat: '500+',
  statLabel: 'Youth Reached',
  image: '/img/img10.jpg',
  fallbackImage: '/img/img7.jpg',
  imageAlt: 'OTSEF youth learning together'
},
{
  title: 'Long-term Vision',
  description:
  'We are building a scalable model for African youth empowerment. Our goal is to create sustainable pathways that can be replicated across the continent.',
  icon: <TrendingUp className="w-6 h-6 text-secondary" />,
  stat: '10 YR',
  statLabel: 'Scalable Vision',
  image: '/img/img4.jpg',
  fallbackImage: '/img/img2.jpg',
  imageAlt: 'Students building confidence through education'
},
{
  title: 'Measurable Outcomes',
  description:
  'Our programs deliver results. We track progress rigorously, boasting a 95% program completion rate and an 80% successful transition into higher education or vocational roles.',
  icon: <Award className="w-6 h-6 text-tertiary" />,
  stat: '95%',
  statLabel: 'Completion Rate',
  image: '/img/img3.jpg',
  fallbackImage: '/img/img14.jpg',
  imageAlt: 'Young people supported by OTSEF programs'
}];

export function WhyOTSEF() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
            Why OTSEF
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Building sustainable pathways
          </h2>
        </div>

        <div className="space-y-24">
          {blocks.map((block, index) =>
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
            
              <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}
              className="flex-1">
              
                <div className="w-12 h-12 rounded-xl bg-background-soft border border-slate-200 flex items-center justify-center mb-6">
                  {block.icon}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {block.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {block.description}
                </p>

                <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-background-soft border border-slate-200">
                  <span className="text-2xl font-bold text-slate-900">
                    {block.stat}
                  </span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                    {block.statLabel}
                  </span>
                </div>
              </motion.div>

              <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}
              className="flex-1 w-full aspect-[4/3] bg-background-soft rounded-3xl border border-slate-200 flex items-center justify-center relative overflow-hidden">
              
                <img
                  src={block.image}
                  alt={block.imageAlt}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = block.fallbackImage;
                  }}
                  className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/25 via-transparent to-primary/10" />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
