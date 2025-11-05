# SEO Quick Reference Card

## 🎯 Quick Status Overview

### ✅ What's Already Done

- **Metadata**: Complete on all pages (Home, Resume, Portfolio, Contact)
- **Structured Data**: Person, Website, Organization, Breadcrumbs
- **Sitemap**: Generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Security Headers**: All major headers implemented
- **PWA Manifest**: Enhanced with shortcuts
- **Breadcrumbs**: Auto-generated on all pages
- **Open Graph**: Full OG tags for social sharing
- **Twitter Cards**: Ready for Twitter/X sharing

### ⚠️ Action Required (5 minutes)

#### 1. Create Open Graph Image

Create an image at: `/public/images/og-image.jpg`

- Size: **1200x630 pixels**
- Format: JPG or PNG
- Include: Your name, title, and simple branding

#### 2. Google Search Console

Replace placeholder in `/app/layout.tsx`:

```typescript
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE, // ← Set in .env.local
}
```

Steps:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.gabrielmagnan.com`
3. Choose "HTML tag" verification method
4. Copy the `content` value from the meta tag
5. Paste it in the layout.tsx file

#### 3. Submit Sitemap

After verifying in Search Console:

1. Go to "Sitemaps" section
2. Submit: `https://www.gabrielmagnan.com/sitemap.xml`

## 🧪 Test Your SEO (5 minutes)

Run these tests to verify everything works:

1. **Rich Results Test**: https://search.google.com/test/rich-results

   - Enter: `https://www.gabrielmagnan.com`
   - Should show: Person, Website, Organization schemas

2. **Facebook Debugger**: https://developers.facebook.com/tools/debug/

   - Test how your site looks when shared on Facebook
   - Check OG image displays correctly

3. **Twitter Validator**: https://cards-dev.twitter.com/validator

   - Test how your site looks on Twitter/X
   - Verify card type is "Summary Card with Large Image"

4. **Schema Validator**: https://validator.schema.org/

   - Paste your homepage HTML
   - Should show no errors

5. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
   - Verify site is mobile-friendly

## 📊 Key URLs

| Resource     | URL                                            |
| ------------ | ---------------------------------------------- |
| Sitemap      | https://www.gabrielmagnan.com/sitemap.xml      |
| Robots.txt   | https://www.gabrielmagnan.com/robots.txt       |
| Web Manifest | https://www.gabrielmagnan.com/site.webmanifest |

## 🔧 Adding Metadata to New Pages

When you create a new page, add metadata to its layout:

```typescript
// app/your-page/layout.tsx
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Your Page Title',
  description: 'A compelling description (150-160 characters)',
  path: '/your-page',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  type: 'website', // or 'article' for blog posts
});

export default function YourPageLayout({ children }) {
  return children;
}
```

Then add it to the sitemap in `/app/sitemap.ts`:

```typescript
{
  url: `${BASE_URL}/your-page`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.7,
},
```

## 📈 Monitoring Checklist

### Daily (First Week)

- [ ] Check Search Console for indexing
- [ ] Monitor any crawl errors

### Weekly

- [ ] Review traffic in Google Analytics
- [ ] Check page speed with PageSpeed Insights
- [ ] Look for any errors in Search Console

### Monthly

- [ ] Review top performing pages
- [ ] Update content if needed
- [ ] Check for broken links
- [ ] Review Core Web Vitals

## 🎨 Social Media Preview

Your site will show rich previews on:

- **Google Search**: With structured data snippets
- **Facebook/LinkedIn**: With OG image and description
- **Twitter/X**: With large image card
- **WhatsApp/Telegram**: With preview image
- **Slack/Discord**: With rich embed

## 💡 Pro Tips

1. **Keywords**: Your name "Gabriel Magnan" is mentioned in all key SEO fields
2. **Breadcrumbs**: Auto-generated on every page except home
3. **Structured Data**: Updates automatically based on content
4. **Security**: All headers protect against common attacks
5. **Performance**: Next.js optimizations are built-in

## 🚨 Common Issues & Solutions

### Issue: OG Image not showing

- **Solution**: Create `/public/images/og-image.jpg` (1200x630px)
- Clear cache in Facebook/Twitter debuggers

### Issue: Site not indexed

- **Solution**: Submit sitemap in Google Search Console
- Wait 2-7 days for indexing

### Issue: Schema errors

- **Solution**: Test with Schema.org validator
- Check that all structured data is valid JSON

### Issue: Poor mobile score

- **Solution**: Already optimized with Next.js
- Test specific issues with Lighthouse

## 📞 Quick Support

If you need help:

1. Check `/SEO-GUIDE.md` for detailed docs
2. Test with the tools listed above
3. Review Google Search Console for specific errors

## 🎯 Expected Timeline

- **Immediate**: Metadata, structured data working
- **1-3 days**: Google starts crawling
- **1-2 weeks**: Site fully indexed
- **2-4 weeks**: Rankings start improving
- **2-3 months**: Optimal SEO performance

---

**Priority Actions**: Create OG image → Add Google verification → Submit sitemap

**Time Required**: ~15 minutes total

**Result**: Professional SEO setup ready for production 🚀
