import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore my latest projects and technical achievements. View a showcase of web applications, software solutions, and development work.',
  openGraph: {
    title: 'Portfolio | Gabriel Magnan',
    description:
      'Explore my latest projects and technical achievements. View a showcase of web applications, software solutions, and development work.',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
