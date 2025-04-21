import { type Metadata } from 'next';
import { strings } from '@/translations/strings';
import { masterMetadata } from '@/utils/masterMetadata';
import { mergeMetadata } from '@/utils/mergeMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return mergeMetadata(masterMetadata, strings.resume.metadata);
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
