import { strings } from '@/src/strings';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return strings.contact.metadata;
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
