import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
const stories = [
{
  quote:
  "OTSEF gave me the mentorship I needed when I was about to drop out. Today, I'm in my second year of university.",
  name: 'Emmanuel D.',
  role: 'Varsity Guard Scholar',
  image:
  'https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?w=400&q=80'
},
{
  quote:
  "The vocational training program didn't just teach me a skill; it gave me the confidence to start my own small business.",
  name: 'Sarah T.',
  role: 'Vocational Graduate',
  image:
  'https://images.unsplash.com/photo-1506869640319-ce1a24fd96f3?w=400&q=80'
},
{
  quote:
  'Seeing the transformation in these young minds is incredible. OTSEF provides a structured, reliable path forward.',
  name: 'Dr. Adebayo',
  role: 'Program Mentor',
  image:
  'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80'
}];

export function SuccessStories() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="font-mono text-xs text-primary-strong mb-4 uppercase tracking-wider">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Transformed lives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) =>
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
            className="glass-card rounded-3xl p-8 flex flex-col h-full">
            
              <Quote className="w-8 h-8 text-primary/40 mb-6" />
              <p className="text-lg text-slate-700 mb-8 flex-grow font-medium leading-relaxed">
                "{story.quote}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                src={story.image}
                alt={story.name}
                className="w-12 h-12 rounded-full object-cover" />
              
                <div>
                  <div className="font-semibold text-slate-900">
                    {story.name}
                  </div>
                  <div className="text-sm text-slate-500">{story.role}</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
