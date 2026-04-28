'use client';

import { DetailedServiceList, CTASection } from '@/components/sections';
import { SectionHeading, Container } from '@/components/ui';
import { useLanguage } from '@/components/providers';
import { dictionary } from '@/lib/translations';

export default function ServicesPage() {
  const { locale } = useLanguage();
  const t = dictionary[locale];

  return (
    <>
      <section className="bg-background py-20">
        <Container>
          <SectionHeading 
            eyebrow={t.services} 
            title={t.servicesHeading} 
            text={t.heroText} 
          />
        </Container>
      </section>
      <DetailedServiceList />
      <CTASection />
    </>
  );
}
