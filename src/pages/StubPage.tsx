import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
interface StubPageProps {
  title: string;
  subtitle: string;
  label: string;
}
export function StubPage({ title, subtitle, label }: StubPageProps) {
  return (
    <div className="min-h-screen bg-white pb-32">
      <PageHero title={title} subtitle={subtitle} label={label} />

      <div className="container mx-auto px-6 lg:px-12 mt-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="max-w-3xl mx-auto">
          
          <div className="bg-white border border-slate-200 shadow-soft rounded-3xl p-8 md:p-16 text-center relative overflow-hidden group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-background-soft border border-slate-200 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary-strong border-t-transparent rounded-full animate-spin" />
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">
              Full Experience Coming Soon
            </h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              We are currently crafting a premium digital experience for this
              section. Please check back later.
            </p>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-full transition-all hover:border-slate-300 hover:shadow-sm">
              
              Return Home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>);

}
