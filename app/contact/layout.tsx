import { strings } from '@/src/strings';
import { mergeMetadata } from '@/utils/mergeMetadata';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = (await parent) as Metadata;
  return mergeMetadata(parentMetadata, strings.contact.metadata);
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
