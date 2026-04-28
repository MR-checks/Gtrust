import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://gtrust.com'),
  title: {
    default: 'GTRUST | Trade Facilitation Between Turkey and Africa',
    template: '%s | GTRUST'
  },
  description:
    'GTRUST helps businesses source verified suppliers, manage import/export processes, and coordinate logistics between Turkey and Africa.',
  openGraph: {
    title: 'GTRUST | Trade Facilitation Between Turkey and Africa',
    description:
      'Premium cross-border trade support focused on trust, clarity, and execution.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GTRUST | Trade Facilitation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTRUST | Trade Facilitation Between Turkey and Africa',
    description: 'Premium cross-border trade support focused on trust, clarity, and execution.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
