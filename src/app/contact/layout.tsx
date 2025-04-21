import { strings } from '@/translations/strings';
import { masterMetadata } from '@/utils/masterMetadata';
import { mergeMetadata } from '@/utils/mergeMetadata';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return mergeMetadata(masterMetadata, strings.contact.metadata);
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
