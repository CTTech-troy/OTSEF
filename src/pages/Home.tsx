import { Hero } from '../components/home/Hero'
import { AboutSnapshot } from '../components/home/AboutSnapshot'
import { Services } from '../components/home/Services'
import { WhyChoose } from '../components/home/WhyChoose'
import { Goals2026 } from '../components/home/Goals2026'
import { Testimonials } from '../components/home/Testimonials'
import { CTASection } from '../components/home/CTASection'
import { InlineContact } from '../components/home/InlineContact'
export function Home() {
  return (
    <div className="flex flex-col bg-background">
      <Hero />
      <AboutSnapshot />
      <Services />
      <WhyChoose />
      <Goals2026 />
      <Testimonials />
      <CTASection />
      <InlineContact />
    </div>
  )
}
