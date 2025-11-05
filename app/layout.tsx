import './globals.css';
import { type ReactNode } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import Schema from '@/app/schema';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { BASE_URL, GOOGLE_VERIFICATION_CODE } from '@/env-constants';
import type { Metadata } from 'next';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Gabriel Magnan | Software Engineer',
    template: '%s | Gabriel Magnan',
  },
  description:
    'Professional portfolio of Gabriel Magnan, a full-stack software engineer with 5 years of experience specializing in modern web development, React, Next.js, and building scalable applications.',
  keywords: [
    'Gabriel Magnan',
    'Software Engineer',
    'Web Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Python',
    'AWS',
    'Docker',
    'MongoDB',
    'GraphQL',
    'Firebase',
  ],
  authors: [{ name: 'Gabriel Magnan', url: BASE_URL }],
  creator: 'Gabriel Magnan',
  publisher: 'Gabriel Magnan',
  category: 'technology',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: 'Gabriel Magnan | Software Engineer',
    description:
      'Professional portfolio of Gabriel Magnan, a full-stack software engineer with 5 years of experience specializing in modern web development and scalable applications.',
    siteName: 'Gabriel Magnan Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gabriel Magnan - Software Engineer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Magnan | Software Engineer',
    description:
      'Professional portfolio of Gabriel Magnan, a full-stack software engineer specializing in modern web development.',
    creator: '@gabrielmagnan',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: GOOGLE_VERIFICATION_CODE,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        <link href="/favicon.ico" rel="icon" sizes="16x16" />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
          type="image/png"
        />
        <link
          href="/android-icon.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link href="/site.webmanifest" rel="manifest" />
        <meta content="#000000" name="theme-color" />
      </Head>
      <body className={`${jetbrainsMono.variable} font-mono`}>
        <Schema />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1 bg-background">
              <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {children}
                <Analytics />
              </div>
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
