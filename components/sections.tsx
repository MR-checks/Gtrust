'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { services, processSteps, trustPoints, faqs } from '@/lib/site';
import { dictionary } from '@/lib/translations';
import { useLanguage } from '@/components/providers';
import { GlassCard, MotionDiv, PrimaryButton, SectionHeading } from '@/components/ui';

export function ServicesOverview() {
  const { locale } = useLanguage();
  const t = dictionary[locale];
  const localizedServices = services[locale];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv>
          <SectionHeading eyebrow={t.heroEyebrow} title={t.servicesHeading} text={t.servicesText} />
        </MotionDiv>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {localizedServices.map((service, index) => (
            <MotionDiv key={service.title} delay={index * 0.05}>
              <GlassCard className="h-full transition hover:-translate-y-1 hover:bg-accent/10">
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <Check size={14} className="text-primary" /> {point}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </MotionDiv>
          ))}
        </div>
        <div className="mt-10 flex justify-start">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-foreground">
            {t.exploreServices} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksPreview() {
  const { locale } = useLanguage();
  const t = dictionary[locale];
  const localizedSteps = processSteps[locale];

  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv>
          <SectionHeading eyebrow={t.processHeading} title={t.processTitle} />
        </MotionDiv>
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {localizedSteps.map((step, index) => (
            <MotionDiv key={step.number} delay={index * 0.06}>
              <GlassCard className="h-full">
                <p className="text-sm font-semibold tracking-[0.25em] text-primary">{step.number}</p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </GlassCard>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  const { locale } = useLanguage();
  const t = dictionary[locale];
  const localizedPoints = trustPoints[locale];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <MotionDiv>
          <SectionHeading eyebrow={t.trustHeading} title={t.trustSubtitle} text={t.trustText} />
          <div className="mt-8 space-y-3">
            {localizedPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border bg-muted/50 p-4 text-muted-foreground backdrop-blur-md">
                <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                <p className="text-sm leading-6">{point}</p>
              </div>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv delay={0.1}>
          <GlassCard className="h-full overflow-hidden">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.2rem] border bg-muted/50 p-5">
                <p className="text-sm text-muted-foreground">{t.positioning}</p>
                <p className="mt-2 text-3xl font-semibold text-foreground">Turkey ↔ Africa</p>
              </div>
              <div className="rounded-[1.2rem] border bg-muted/50 p-5">
                <p className="text-sm text-muted-foreground">Support model</p>
                <p className="mt-2 text-3xl font-semibold text-foreground">Remote + On-ground</p>
              </div>
            </div>
            <div className="mt-4 rounded-[1.2rem] border bg-gradient-to-br from-primary/10 to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">{t.aboutHeading}</p>
              <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground">
                {t.trustDetails}
              </p>
            </div>
          </GlassCard>
        </MotionDiv>
      </div>
    </section>
  );
}

export function CTASection() {
  const { locale } = useLanguage();
  const t = dictionary[locale];
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard className="flex flex-col items-start justify-between gap-6 bg-gradient-to-br from-primary/10 to-accent/5 p-8 md:flex-row md:items-center md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{t.schedule}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{t.scheduleText}</h2>
          </div>
          <PrimaryButton href="/contact">{t.bookCall}</PrimaryButton>
        </GlassCard>
      </div>
    </section>
  );
}

export function FAQSection() {
  const { locale } = useLanguage();
  const t = dictionary[locale];
  const localizedFaqs = faqs[locale];
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.faqHeading} title={t.faqTitle} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {localizedFaqs.map((faq) => (
            <GlassCard key={faq.q}>
              <h3 className="text-lg font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.a}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DetailedServiceList() {
  const { locale } = useLanguage();
  const t = dictionary[locale];
  const localizedServices = services[locale];
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv>
          <SectionHeading eyebrow={t.services} title={t.aboutHeading} text={t.aboutText} />
        </MotionDiv>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {localizedServices.map((service) => (
            <GlassCard key={service.title} className="h-full">
              <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.summary}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.points.map((point) => (
                  <li key={point} className="rounded-2xl border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
