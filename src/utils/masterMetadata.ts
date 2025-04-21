import { BASE_URL } from '@/env-constants';

export const masterMetadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Gabriel Magnan | Software Engineer',
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
    url: new URL(BASE_URL),
    title: 'Gabriel Magnan | Software Engineer',
    description:
      'Professional portfolio of Gabriel Magnan, a passionate software engineer specializing in web development.',
    siteName: 'Gabriel Magnan Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 310,
        height: 310,
        alt: 'Gabriel Magnan - Software Engineer',
      },
    ],
  },
  alternates: {
    canonical: new URL(BASE_URL),
  },
};
