import { strings } from '@/src/strings';
import { mergeMetadata } from '@/utils/mergeMetadata';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = (await parent) as Metadata;
  return mergeMetadata(parentMetadata, strings.portfolio.metadata);
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
