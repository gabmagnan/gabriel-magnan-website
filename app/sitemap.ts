import { BASE_URL } from '@/env-constants';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticDate = new Date('2025-04-12T00:00:00Z');
  return [
    {
      url: BASE_URL,
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: staticDate,
      changeFrequency: 'weekly',
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
