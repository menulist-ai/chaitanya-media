# SEO and AEO Implementation

Date: 2026-06-27

## Current status

The Chaitanya Media website now has a code-side SEO and AEO foundation:

- Locale-aware metadata for English, Marathi, and Hindi
- Canonical URLs and `x-default`, `en-IN`, `mr-IN`, and `hi-IN` alternates
- Open Graph and Twitter image metadata
- Local business and website JSON-LD in the shared layout
- Page-specific JSON-LD for home, services, service details, blog listing, blog articles, about, leadership, results, contact, and legal pages
- Sitemap generation across all public locale routes
- Robots policy that keeps `/thank-you/` out of indexing
- Public `llms.txt` and `llms-full.txt` files for answer engines and AI assistants

## Production domain requirement

The URL base is controlled by:

```text
NEXT_PUBLIC_SITE_URL
```

Set this to the final production origin before launch.

Example:

```text
NEXT_PUBLIC_SITE_URL=https://www.your-final-domain.com
```

If this environment variable is missing, the site falls back to:

```text
https://chaitanya-media.vercel.app
```

## Important files

- `lib/seo.ts` - shared metadata helper
- `lib/structured-data.ts` - JSON-LD helpers
- `app/sitemap.ts` - sitemap route generation
- `app/robots.ts` - robots policy
- `public/llms.txt` - short AI/answer-engine summary
- `public/llms-full.txt` - full AI/answer-engine context
- `app/[locale]/layout.tsx` - organization and website schema

## No-guarantee policy

The SEO/AEO copy and structured data intentionally avoid claims such as:

- guaranteed election wins
- guaranteed Google rankings
- guaranteed leads or revenue
- guaranteed viral reach

Campaign performance depends on audience, offer, budget, timing, creative quality, platform rules, competition, and follow-up.
