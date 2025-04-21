import '@/styles/globals.css';
import { type ReactNode } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { masterMetadata } from '@/utils/masterMetadata';
import type { Metadata } from 'next';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  variable: '--font-jetbrains',
});

export async function generateMetadata(): Promise<Metadata> {
  return masterMetadata;
}

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
