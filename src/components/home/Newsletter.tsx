export function Newsletter() {
  return (
    <section className="py-24 bg-background-soft relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Stay updated on our mission
        </h2>
        <p className="text-slate-600 mb-8">
          Join our newsletter to hear about our latest programs, success
          stories, and ways to get involved.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}>
          
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white border border-slate-200 rounded-full px-6 py-3.5 focus:outline-none focus:border-primary-strong focus:ring-1 focus:ring-primary-strong transition-all shadow-sm" />
          
          <button
            type="submit"
            className="bg-ink text-white px-8 py-3.5 rounded-full font-medium hover:scale-105 transition-all shadow-glow whitespace-nowrap">
            
            Subscribe
          </button>
        </form>
      </div>
    </section>);

}
