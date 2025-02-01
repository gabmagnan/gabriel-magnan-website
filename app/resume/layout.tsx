import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'View my professional experience, skills, and qualifications. Learn about my journey as a software engineer and technical expertise.',
  openGraph: {
    title: 'Resume | Gabriel Magnan',
    description:
      'View my professional experience, skills, and qualifications. Learn about my journey as a software engineer and technical expertise.',
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
