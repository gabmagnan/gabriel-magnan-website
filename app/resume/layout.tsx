import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Resume',
  description:
    'Professional resume of Gabriel Magnan, a full-stack software engineer with 5 years of experience. View work experience, technical skills, education, and professional qualifications.',
  path: '/resume',
  keywords: [
    'Resume',
    'CV',
    'Professional Experience',
    'Work History',
    'Skills',
    'Education',
    'Qualifications',
  ],
});

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
