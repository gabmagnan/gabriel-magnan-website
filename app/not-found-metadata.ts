import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: '404 - Page Not Found',
  description:
    "The page you are looking for could not be found. Return to the homepage to explore Gabriel Magnan's portfolio, resume, and projects.",
  path: '/404',
  noindex: true, // Don't index 404 pages
  keywords: [],
});
