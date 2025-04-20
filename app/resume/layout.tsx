import { type Metadata } from 'next';
import { strings } from '@/src/strings';

export async function generateMetadata(): Promise<Metadata> {
  return strings.resume.metadata;
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
