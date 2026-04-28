'use client';

import { CTASection, TrustSection } from '@/components/sections';
import { SectionHeading, Container, GlassCard } from '@/components/ui';
import { useLanguage } from '@/components/providers';
import { dictionary } from '@/lib/translations';

export default function AboutPage() {
  const { locale } = useLanguage();
  const t = dictionary[locale];

  return (
    <>
      <section className="bg-background py-20">
        <Container>
          <SectionHeading 
            eyebrow={t.about} 
            title={t.aboutTitle} 
            text={t.aboutText} 
          />
        </Container>
      </section>
      <section className="bg-background pb-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <GlassCard>
              <h3 className="text-xl font-semibold text-foreground">{t.mission}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.missionText}</p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-semibold text-foreground">{t.positioning}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.positioningText}</p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-semibold text-foreground">{t.trustModel}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.trustModelText}</p>
            </GlassCard>
          </div>
        </Container>
      </section>
      <TrustSection />
      <CTASection />
    </>
  );
}
