const partners = [
'Lagos State Ministry of Education',
'UNICEF Nigeria',
'Tech4Dev',
'African Leadership Academy',
'Educate A Child',
'YouthHub Africa',
'Pan-Atlantic University',
'Co-Creation Hub'];

export function TrustedBy() {
  return (
    <section className="py-12 bg-white border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">
          Trusted by leading institutions and organizations
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
          {partners.map((partner, idx) =>
          <div
            key={idx}
            className="text-lg font-bold text-slate-400 hover:text-slate-700 transition-colors duration-300 cursor-default">
            
              {partner}
            </div>
          )}
        </div>
      </div>
    </section>);

}
