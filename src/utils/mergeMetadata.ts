import type { Metadata } from 'next';

export function mergeMetadata(
  parentMetadata: Metadata,
  metadataUpdate: Partial<Metadata>
): Metadata {
  return {
    ...parentMetadata,
    ...metadataUpdate,
    openGraph: {
      ...parentMetadata.openGraph,
      ...metadataUpdate?.openGraph,
    },
  };
}
