import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with me for collaboration opportunities, project inquiries, or general questions about software development.',
  openGraph: {
    title: 'Contact | Gabriel Magnan',
    description:
      'Get in touch with me for collaboration opportunities, project inquiries, or general questions about software development.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
