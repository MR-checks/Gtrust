'use client';

import { CTASection } from '@/components/sections';
import { SectionHeading, Container } from '@/components/ui';
import { ContactForm } from '@/components/contact-form';
import { useLanguage } from '@/components/providers';
import { dictionary } from '@/lib/translations';

export default function ContactPage() {
  const { locale } = useLanguage();
  const t = dictionary[locale];

  return (
    <>
      <section className="bg-background py-20">
        <Container>
          <SectionHeading 
            eyebrow={t.contact} 
            title={t.contactHeading} 
            text={t.contactText} 
          />
        </Container>
      </section>
      <section className="bg-background pb-24">
        <Container>
          <ContactForm />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
