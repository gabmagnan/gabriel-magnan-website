import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Contact',
  description:
    'Contact Gabriel Magnan for software development opportunities, project collaborations, consulting inquiries, or questions about web development and full-stack engineering.',
  path: '/contact',
  keywords: [
    'Contact',
    'Get in Touch',
    'Hire',
    'Collaboration',
    'Consulting',
    'Project Inquiry',
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
