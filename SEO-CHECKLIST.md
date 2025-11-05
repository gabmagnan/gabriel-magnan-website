# ✅ SEO Action Checklist

Print this and check off items as you complete them!

---

## 🚨 PRIORITY ACTIONS (Do These First - 15 min)

### 1. Create Open Graph Image

- [ ] Design image: 1200x630 pixels
- [ ] Include: Your name, title, branding
- [ ] Save to: `/public/images/og-image.jpg`
- [ ] Keep file under 1MB

**Tools**: Canva, Figma, Photoshop, or GIMP

---

### 2. Google Search Console Setup

- [ ] Go to: https://search.google.com/search-console
- [ ] Add property: `https://www.gabrielmagnan.com`
- [ ] Choose "HTML tag" verification
- [ ] Copy verification code
- [ ] Add to `.env.local`: `GOOGLE_VERIFICATION_CODE=your_code_here`
- [ ] **Important:** Never commit the actual code to version control
- [ ] Add to production environment variables (Vercel/hosting platform)
- [ ] Deploy changes
- [ ] Click "Verify" in Search Console

---

### 3. Submit Sitemap

- [ ] Log into Google Search Console
- [ ] Go to "Sitemaps" section
- [ ] Enter: `https://www.gabrielmagnan.com/sitemap.xml`
- [ ] Click "Submit"
- [ ] Wait for processing (1-24 hours)

---

## 🧪 TESTING (Do These Second - 10 min)

### Test All Pages

- [ ] Homepage: `https://www.gabrielmagnan.com`
- [ ] Resume: `https://www.gabrielmagnan.com/resume`
- [ ] Portfolio: `https://www.gabrielmagnan.com/portfolio`
- [ ] Contact: `https://www.gabrielmagnan.com/contact`

### Test SEO Tools (paste your homepage URL)

- [ ] Rich Results: https://search.google.com/test/rich-results
- [ ] PageSpeed: https://pagespeed.web.dev/
- [ ] Mobile Test: https://search.google.com/test/mobile-friendly
- [ ] Schema Validator: https://validator.schema.org/

### Test Social Media

- [ ] Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Validator: https://cards-dev.twitter.com/validator
- [ ] Verify OG image displays correctly
- [ ] Verify title and description show

---

## 📊 VERIFICATION (Confirm Everything Works)

### Check Technical SEO

- [ ] Sitemap loads: `/sitemap.xml`
- [ ] Robots.txt loads: `/robots.txt`
- [ ] Manifest loads: `/site.webmanifest`
- [ ] No console errors in browser
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions

### Check Structured Data

- [ ] Person schema detected
- [ ] Website schema detected
- [ ] Organization schema detected
- [ ] Breadcrumb schema on subpages
- [ ] No structured data errors

### Check Meta Tags (View Page Source)

- [ ] Title tag present
- [ ] Meta description present
- [ ] OG tags present (og:title, og:image, etc.)
- [ ] Twitter tags present
- [ ] Canonical URL present

---

## 📈 MONITORING SETUP (Optional but Recommended)

### Google Analytics 4

- [ ] Create GA4 property
- [ ] Get tracking ID
- [ ] Add to website
- [ ] Verify tracking works

### Additional Tools

- [ ] Set up Google Analytics
- [ ] Set up Bing Webmaster Tools
- [ ] Set up Plausible/Fathom (privacy-friendly alternative)

---

## 📱 FINAL CHECKS

### Desktop Testing

- [ ] Open site in Chrome
- [ ] Open site in Firefox
- [ ] Open site in Safari
- [ ] Check page load speed
- [ ] Verify no layout issues

### Mobile Testing

- [ ] Open site on mobile phone
- [ ] Check touch targets
- [ ] Verify text is readable
- [ ] Check image loading
- [ ] Test navigation

### Cross-Browser

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

---

## 🎯 WEEK 1 MONITORING

### Daily (First 3 Days)

- [ ] Day 1: Check Search Console for first crawl
- [ ] Day 2: Look for indexing progress
- [ ] Day 3: Verify no crawl errors

### Day 7

- [ ] Check if any pages indexed
- [ ] Review Search Console coverage
- [ ] Fix any errors found
- [ ] Review PageSpeed scores

---

## 📅 ONGOING MAINTENANCE

### Weekly (First Month)

- [ ] Check Search Console
- [ ] Monitor page speed
- [ ] Look for errors
- [ ] Review traffic (if any)

### Monthly

- [ ] Review indexed pages
- [ ] Check search queries
- [ ] Update content if needed
- [ ] Review Core Web Vitals
- [ ] Check for broken links

### Quarterly

- [ ] Full SEO audit
- [ ] Update meta descriptions
- [ ] Refresh content
- [ ] Review competitors
- [ ] Update structured data

---

## 📝 NOTES SECTION

Write down any issues or observations:

```
Issue: ____________________________________________________

Solution: __________________________________________________

Date: _____________________________________________________
```

```
Issue: ____________________________________________________

Solution: __________________________________________________

Date: _____________________________________________________
```

```
Issue: ____________________________________________________

Solution: __________________________________________________

Date: _____________________________________________________
```

---

## 🎓 LEARNING RESOURCES

### Must-Read Guides

- [ ] Google SEO Starter Guide
- [ ] Schema.org documentation
- [ ] Next.js SEO guide
- [ ] Web.dev SEO course

### Video Tutorials

- [ ] Google Search Console basics
- [ ] Structured data explained
- [ ] SEO for developers
- [ ] Core Web Vitals overview

---

## ✨ SUCCESS INDICATORS

You'll know your SEO is working when:

- ✅ Site appears in Google when searching your name
- ✅ Rich snippets show in search results
- ✅ Social media shares show your OG image
- ✅ PageSpeed score is 90+
- ✅ All pages indexed in Search Console
- ✅ Organic traffic starts increasing

---

## 🆘 TROUBLESHOOTING

### OG Image Not Showing

**Solution**:

- Verify file exists at `/public/images/og-image.jpg`
- Clear Facebook/Twitter cache
- Wait 24-48 hours for updates

### Pages Not Indexing

**Solution**:

- Verify sitemap submitted
- Check robots.txt not blocking
- Request indexing in Search Console
- Wait 1-2 weeks

### Schema Errors

**Solution**:

- Test with Schema.org validator
- Check JSON syntax
- Verify all required fields
- Review Schema.org docs

### Slow Page Speed

**Solution**:

- Optimize images
- Enable caching
- Minify code
- Use CDN

---

## 📞 QUICK LINKS

| Tool             | URL                                            |
| ---------------- | ---------------------------------------------- |
| Search Console   | https://search.google.com/search-console       |
| PageSpeed        | https://pagespeed.web.dev/                     |
| Rich Results     | https://search.google.com/test/rich-results    |
| Schema Validator | https://validator.schema.org/                  |
| Mobile Test      | https://search.google.com/test/mobile-friendly |
| Facebook Debug   | https://developers.facebook.com/tools/debug/   |
| Twitter Cards    | https://cards-dev.twitter.com/validator        |

---

## ✅ COMPLETION

When you've checked off all priority actions above:

**Your SEO setup is complete! 🎉**

### Next:

1. Monitor weekly for first month
2. Review monthly for first quarter
3. Optimize based on data
4. Keep content fresh
5. Build quality backlinks

---

**Started**: ********\_********
**Completed**: ******\_\_\_******
**Next Review**: ******\_******

---

**Your site is ready for success!** 🚀
