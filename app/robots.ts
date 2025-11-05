import { BASE_URL } from '@/env-constants';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General web crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // Google Search
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - OpenAI (ChatGPT)
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - Google Extended (Bard/Gemini AI training)
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - Anthropic (Claude)
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - Common Crawl
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - Cohere
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - Meta (Facebook AI)
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - Apple Intelligence
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - Amazon
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - ByteDance (TikTok)
      {
        userAgent: 'Bytespider',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - Image analysis
      {
        userAgent: 'ImagesiftBot',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
      // AI Bots - Diffbot
      {
        userAgent: 'Diffbot',
        allow: '/',
        disallow: ['/password/', '/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
