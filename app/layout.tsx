import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { BASE_URL } from '@/env-constants';
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
    'Professional portfolio of Gabriel Magnan, a passionate software engineer specializing in web development and creating exceptional digital experiences.',
  keywords: [
    'Software Engineer',
    'Web Developer',
    'Full Stack Developer',
    'React',
    'Node.js',
    'TypeScript',
  ],
  authors: [{ name: 'Gabriel Magnan' }],
  creator: 'Gabriel Magnan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: 'Gabriel Magnan | Software Engineer',
    description:
      'Professional portfolio of Gabriel Magnan, a passionate software engineer specializing in web development.',
    siteName: 'Gabriel Magnan Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gabriel Magnan - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Magnan | Software Engineer',
    description:
      'Professional portfolio of Gabriel Magnan, a passionate software engineer specializing in web development.',
    creator: '@gabrielmagnan',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link href="/site.webmanifest" rel="manifest" />
        <meta content="#000000" name="theme-color" />
      </head>
      <body className={`${jetbrainsMono.variable} font-mono`}>
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
