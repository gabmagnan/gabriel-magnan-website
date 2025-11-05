import { BASE_URL, GOOGLE_VERIFICATION_CODE } from '@/env-constants';
import type { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  keywords?: string[];
  type?: 'website' | 'article' | 'profile';
}

export function generateMetadata({
  title,
  description,
  path = '',
  image = '/images/og-image.jpg',
  noindex = false,
  keywords = [],
  type = 'website',
}: SEOProps): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path ? `${title} | Gabriel Magnan` : title;

  const defaultKeywords = [
    'Gabriel Magnan',
    'Software Engineer',
    'Web Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: 'Gabriel Magnan', url: BASE_URL }],
    creator: 'Gabriel Magnan',
    publisher: 'Gabriel Magnan',
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      siteName: 'Gabriel Magnan Portfolio',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: '@gabrielmagnan',
      images: [image],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      nocache: false,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: GOOGLE_VERIFICATION_CODE,
      // Add other verification codes as needed (Bing, Yandex, etc.)
    },
  };
}

export function generateStructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gabriel Magnan',
    jobTitle: 'Software Engineer',
    url: BASE_URL,
    image: `${BASE_URL}/assets/profile_picture.webp`,
    description:
      'Full-stack software engineer specializing in modern web development, with 5 years of experience building scalable applications.',
    sameAs: [
      'https://github.com/gabrielmagnan',
      'https://www.linkedin.com/in/gabriel-magnan/',
      'https://twitter.com/gabrielmagnan',
    ],
    knowsAbout: [
      'Software Development',
      'Web Development',
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'AWS',
      'Docker',
      'GraphQL',
      'MongoDB',
      'Firebase',
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en',
      },
      {
        '@type': 'Language',
        name: 'French',
        alternateName: 'fr',
      },
      {
        '@type': 'Language',
        name: 'Spanish',
        alternateName: 'es',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Gabriel Magnan Portfolio',
    description:
      'Professional portfolio of Gabriel Magnan, a software engineer specializing in web development.',
    url: BASE_URL,
    author: {
      '@type': 'Person',
      name: 'Gabriel Magnan',
    },
    inLanguage: ['en', 'fr', 'es'],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Gabriel Magnan - Software Engineer',
    url: BASE_URL,
    logo: `${BASE_URL}/assets/profile_picture.webp`,
    description:
      'Professional software engineering services specializing in web development.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    sameAs: [
      'https://github.com/gabrielmagnan',
      'https://www.linkedin.com/in/gabriel-magnan/',
      'https://twitter.com/gabrielmagnan',
    ],
  };

  return {
    personSchema,
    websiteSchema,
    organizationSchema,
  };
}
