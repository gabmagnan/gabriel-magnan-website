import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protected Access',
  description: 'Access protected content with password authentication.',
  openGraph: {
    title: 'Protected Access | Gabriel Magnan',
    description: 'Access protected content with password authentication.',
  },
};

export default function PasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
