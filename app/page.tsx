import { Hero } from '@/components/hero';
import { ServicesOverview, HowItWorksPreview, TrustSection, CTASection } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <HowItWorksPreview />
      <TrustSection />
      <CTASection />
    </>
  );
}
