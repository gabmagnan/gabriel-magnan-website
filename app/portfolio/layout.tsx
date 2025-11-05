import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Portfolio',
  description:
    "Explore Gabriel Magnan's portfolio of software projects. View featured web applications, full-stack solutions, and technical achievements using React, Next.js, TypeScript, and modern web technologies.",
  path: '/portfolio',
  keywords: [
    'Portfolio',
    'Projects',
    'Web Applications',
    'Software Projects',
    'React Projects',
    'Next.js Applications',
    'Full Stack Projects',
  ],
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
