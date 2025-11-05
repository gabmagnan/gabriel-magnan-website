import { BASE_URL } from '@/env-constants';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticDate = new Date('2025-04-12T00:00:00Z');
  return [
    {
      url: BASE_URL,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
