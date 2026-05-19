import { Link } from 'react-router-dom';
export function Partnerships() {
  const partners = [
  'Ministry of Education',
  'Global Youth Fund',
  'Tech for Good',
  'EduCare Foundation',
  'Future Leaders Org',
  'Pan-African Bank',
  'Ministry of Education',
  'Global Youth Fund'];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          Strategic Partnerships
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We collaborate with governments, corporations, and institutions to
          scale our impact.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden py-8">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex whitespace-nowrap gap-6 px-4 animate-marquee">
          {[...partners, ...partners, ...partners].map((partner, index) =>
          <div
            key={index}
            className="bg-white px-8 py-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center min-w-[250px] hover:border-slate-300 transition-colors">
            
              <span className="font-bold text-slate-400 hover:text-slate-900 transition-colors text-lg">
                {partner}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        <div className="bg-background-soft rounded-3xl p-8 md:p-12 text-center border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to make an impact?
          </h3>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            We are currently open to strategic partnerships with organizations
            that share our vision for youth empowerment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-ink rounded-full transition-all hover:scale-105 shadow-glow">
            
            Become a Partner
          </Link>
        </div>
      </div>
    </section>);

}
