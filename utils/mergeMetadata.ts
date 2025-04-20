// utils/mergeMetadata.ts
import type { Metadata } from 'next';

export function mergeMetadata(
  parentData: Metadata,
  metadataUpdate: Partial<Metadata>
): Metadata {
  return {
    ...parentData,
    ...metadataUpdate,
    // Repeat for other nested fields if needed
  };
}
