'use client';

import { useState } from 'react';
import { Loader2, Mail, PhoneCall } from 'lucide-react';
import { PrimaryButton, GlassCard } from '@/components/ui';
import { dictionary } from '@/lib/translations';
import { useLanguage } from '@/components/providers';

export function ContactForm() {
  const { locale } = useLanguage();
  const t = dictionary[locale];
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/gtrust2026@gmail.com', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus(t.statusSuccess);
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('Something went wrong. Please try again or email us directly.');
      }
    } catch (error) {
      setStatus('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <GlassCard>
        <form onSubmit={onSubmit} className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t.name} name="name" type="text" required />
            <Field label={t.email} name="email" type="email" required />
          </div>
          <Field label={t.company} name="company" type="text" />
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">{t.message}</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={6} 
              className="w-full rounded-2xl border bg-muted/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/20 focus:ring-2 focus:ring-primary/10" 
              placeholder={t.messagePlaceholder} 
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? <Loader2 className="animate-spin" size={16} /> : null}
            {t.submit}
          </button>
          {status ? <p className="text-sm text-primary">{status}</p> : null}
        </form>
      </GlassCard>

      <div className="space-y-5">
        <GlassCard>
          <p className="text-sm uppercase tracking-[0.24em] text-primary">{t.bookCall}</p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">{t.directSpeak}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.directSpeakText}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton href="/contact">{t.bookCall}</PrimaryButton>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="flex items-center gap-3 text-foreground">
            <PhoneCall size={18} className="text-primary" /> 
            <a href={`tel:${t.phone.replace(/\D/g, '')}`} className="transition hover:text-primary">{t.phone}</a>
          </div>
          <div className="mt-4 flex items-center gap-3 text-foreground">
            <Mail size={18} className="text-primary" /> 
            <a href={`mailto:${t.emailAddress}`} className="transition hover:text-primary">{t.emailAddress}</a>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{t.bestFor}</p>
        </GlassCard>
      </div>
    </div>
  );
}

function Field({ label, name, type, required = false }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border bg-muted/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/20 focus:ring-2 focus:ring-primary/10"
      />
    </div>
  );
}
