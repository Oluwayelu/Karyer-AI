import CareerTracks from "./_components/career-tracks";
import CtaSection from "./_components/cta";
import Features from "./_components/features";
import HeroSection from "./_components/hero";
import HowItWorks from "./_components/how-it-works";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <HowItWorks />
      <Features />
      <CareerTracks />
      <CtaSection />
    </div>
  );
}

