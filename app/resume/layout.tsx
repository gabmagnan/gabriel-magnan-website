import { type Metadata, type ResolvingMetadata } from 'next';
import { strings } from '@/src/strings';
import { mergeMetadata } from '@/utils/mergeMetadata';

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = (await parent) as Metadata;
  return mergeMetadata(parentMetadata, strings.resume.metadata);
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
