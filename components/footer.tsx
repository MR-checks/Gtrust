'use client';

import Link from 'next/link';
import { dictionary } from '@/lib/translations';
import { useLanguage } from '@/components/providers';
import { navItems } from '@/lib/site';

import Image from 'next/image';

export function Footer() {
  const { locale } = useLanguage();
  const t = dictionary[locale];

  return (
    <footer className="border-t bg-background py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Image 
            src="/logo.png" 
            alt="GTRUST Logo" 
            width={240} 
            height={80} 
            className="h-16 w-auto scale-[2] object-contain dark:brightness-0 dark:invert" 
          />
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{t.footerText}</p>
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <p><a href={`tel:${t.phone.replace(/\D/g, '')}`} className="transition hover:text-foreground">{t.phone}</a></p>
            <p><a href={`mailto:${t.emailAddress}`} className="transition hover:text-foreground">{t.emailAddress}</a></p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3 lg:col-span-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {t[item.key]}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {new Date().getFullYear()} GTRUST. {t.rights}
      </div>
    </footer>
  );
}
