'use client';

import { ThemeProvider } from 'next-themes';
import { createContext, useContext, useMemo, useState } from 'react';
import type { Locale } from '@/lib/translations';

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
}>({ locale: 'en', setLocale: () => {} });

export function useLanguage() {
  return useContext(LanguageContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    </ThemeProvider>
  );
}
