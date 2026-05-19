import { Hero } from '../components/home/Hero';
import { AboutSnapshot } from '../components/home/AboutSnapshot';
import { Manifesto } from '../components/home/Manifesto';
import { ImpactVision } from '../components/home/ImpactVision';
import { CoreFocus } from '../components/home/CoreFocus';
import { WhyOTSEF } from '../components/home/WhyOTSEF';
import { FeaturedInitiative } from '../components/home/FeaturedInitiative';
import { SuccessStories } from '../components/home/SuccessStories';
import { ProgramsOverview } from '../components/home/ProgramsOverview';
import { Partnerships } from '../components/home/Partnerships';
// import { Donation } from '../components/home/Donation';
import { FAQ } from '../components/home/FAQ';
import { Newsletter } from '../components/home/Newsletter';
import { FooterCTA } from '../components/home/FooterCTA';
export function Home() {
  return (
    <div className="flex flex-col bg-background">
      <Hero />
      <AboutSnapshot />
      <Manifesto />
      <ImpactVision />
      <CoreFocus />
      <WhyOTSEF />
      <FeaturedInitiative />
      <SuccessStories />
      <ProgramsOverview />
      <Partnerships />
      {/* <Donation /> */}
      <FAQ />
      <Newsletter />
      <FooterCTA />
    </div>);

}
