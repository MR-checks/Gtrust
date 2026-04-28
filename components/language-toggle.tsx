'use client';

import { useLanguage } from '@/components/providers';
import type { Locale } from '@/lib/translations';

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const options: { label: string; value: Locale }[] = [
    { label: 'EN', value: 'en' },
    { label: 'TR', value: 'tr' },
  ];

  return (
    <div className="inline-flex overflow-hidden rounded-full border bg-muted p-1 backdrop-blur-md">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={locale === option.value}
          onClick={() => setLocale(option.value)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.2em] transition ${
            locale === option.value ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
