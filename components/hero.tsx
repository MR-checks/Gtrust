'use client';

import Image from 'next/image';
import { dictionary } from '@/lib/translations';
import { useLanguage } from '@/components/providers';
import { MotionDiv, PrimaryButton, SecondaryButton } from '@/components/ui';

export function Hero() {
  const { locale } = useLanguage();
  const t = dictionary[locale];

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-30 [background:radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.14),transparent_22%),radial-gradient(circle_at_80%_0%,hsl(var(--primary)/0.18),transparent_20%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <MotionDiv className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-5 inline-flex rounded-full border bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary backdrop-blur-md">
            {t.heroEyebrow}
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {t.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">{t.heroText}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <PrimaryButton href="/contact">{t.bookCall}</PrimaryButton>
            <SecondaryButton href="/services">{t.viewServices}</SecondaryButton>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground lg:justify-start">
            {[t.trustBadge1, t.trustBadge2, t.trustBadge3].map((item) => (
              <span key={item} className="rounded-full border bg-muted px-4 py-2 backdrop-blur-md">
                {item}
              </span>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv delay={0.12} className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border bg-card/40 p-3 shadow-glow backdrop-blur-xl">
            <div className="grid gap-3 rounded-[1.4rem] bg-background/70 p-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
                  alt="Space perspective of Earth"
                  width={900}
                  height={1200}
                  className="h-72 w-full object-cover"
                  priority
                />
              </div>
              <div className="grid gap-3">
                <div className="overflow-hidden rounded-[1.2rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=900&q=80"
                    alt="Blue and red cargo ship at sea"
                    width={900}
                    height={500}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div className="rounded-[1.2rem] border bg-muted p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-primary">{t.operationalClarity}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {t.operationalText}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 text-center text-xs text-muted-foreground">
                    <div className="rounded-full bg-background/50 px-3 py-2">{t.sourcing}</div>
                    <div className="rounded-full bg-background/50 px-3 py-2">{t.compliance}</div>
                    <div className="rounded-full bg-background/50 px-3 py-2">{t.delivery}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
