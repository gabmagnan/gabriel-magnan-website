import Script from 'next/script';
import { type NextPage } from 'next';
import { BASE_URL } from '@/env-constants';

const Schema: NextPage = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gabriel Magnan',
    jobTitle: 'Software Engineer',
    url: `${BASE_URL}`,
    sameAs: [
      'https://github.com/gabrielmagnan',
      'https://linkedin.com/in/gabrielmagnan',
      'https://twitter.com/gabrielmagnan',
    ],
    image: `${BASE_URL}/images/profile.webp`,
    description:
      'Software engineer specializing in web development and creating exceptional digital experiences.',
    email: 'gabriel@magnan.com',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Tech University',
    },
    knowsAbout: [
      'Software Development',
      'Web Development',
      'React',
      'Node.js',
      'TypeScript',
      'AWS',
      'Docker',
      'GraphQL',
    ],
  };

  return (
    <Script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      id="schema"
      type="application/ld+json"
    />
  );
};

export default Schema;
