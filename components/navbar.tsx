'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { navItems } from '@/lib/site';
import { dictionary } from '@/lib/translations';
import { useLanguage } from '@/components/providers';
import { LanguageToggle } from '@/components/language-toggle';
import { ThemeToggle } from '@/components/theme-toggle';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();
  const t = dictionary[locale];
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleEvent(event: MouseEvent | KeyboardEvent) {
      if (open && navRef.current) {
        if (event instanceof MouseEvent && !navRef.current.contains(event.target as Node)) {
          setOpen(false);
        } else if (event instanceof KeyboardEvent && event.key === 'Escape') {
          setOpen(false);
        }
      }
    }

    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('keydown', handleEvent);
    return () => {
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('keydown', handleEvent);
    };
  }, [open]);

  return (
    <header ref={navRef} className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex h-12 w-48 shrink-0 items-center overflow-hidden">
          <Image 
            src="/logo.png" 
            alt="GTRUST Logo" 
            width={350} 
            height={120} 
            className="-ml-8 h-32 w-auto object-contain dark:brightness-0 dark:invert" 
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {t[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Link href="/contact" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]">
            {t.bookCall}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border bg-muted text-foreground lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t bg-background/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm text-foreground transition hover:bg-muted">
                  {t[item.key]}
                </Link>
              ))}
            </nav>
            <Link href="/contact" className="inline-flex w-fit rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              {t.bookCall}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
