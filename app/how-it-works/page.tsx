'use client';

import { CTASection } from '@/components/sections';
import { SectionHeading, Container, GlassCard } from '@/components/ui';
import { processSteps } from '@/lib/site';
import { useLanguage } from '@/components/providers';
import { dictionary } from '@/lib/translations';

export default function HowItWorksPage() {
  const { locale } = useLanguage();
  const t = dictionary[locale];

  return (
    <>
      <section className="bg-background py-20">
        <Container>
          <SectionHeading 
            eyebrow={t.howItWorks} 
            title={t.processTitle} 
            text={t.aboutText} 
          />
        </Container>
      </section>
      <section className="bg-background pb-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-4">
            {processSteps[locale].map((step) => (
              <GlassCard key={step.number} className="h-full">
                <p className="text-sm font-semibold tracking-[0.25em] text-primary">{step.number}</p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
