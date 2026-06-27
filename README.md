# Chaitanya Media Next.js Rebuild

This repository is a standalone workspace for the Chaitanya Media website redesign. It is not part of any existing product repo.

Current implementation source of truth:

- `https://gold-star-growth.lovable.app/`
- The rendered extraction saved under `docs/research/lovable-extraction/`
- The homepage/service content in `lib/site.ts`

Current contents:

- `chaitanya-media-chatgpt-transcript.md` - captured planning transcript from ChatGPT.
- `docs/` - research, strategy, UX, SEO, implementation, and launch documentation for the rebuild.
- `app/`, `components/`, and `lib/` - standalone Next.js implementation.
- `i18n/` and `messages/` - `next-intl` routing/request setup for English, Marathi, and Hindi.

Project boundary:

- Separate repo.
- Separate Next.js project.
- Separate strategy, content, SEO, and implementation decisions.
- No reuse of MenuList or other product rules unless explicitly copied into this repo later.

Implementation target:

- Next.js App Router.
- TypeScript.
- Static-first digital marketing agency site.
- Locale-prefixed routing only: `/en/`, `/mr/`, and `/hi/`.
- Route-level metadata.
- `sitemap.ts` and `robots.ts`.
- LocalBusiness, Organization, Service, Article, FAQPage, and BreadcrumbList schema where appropriate.

Start with:

1. `docs/research/lovable-extraction/rendered-text.txt`
2. `docs/research/lovable-extraction/rendered-content.json`
3. `docs/research/11-lovable-source-pivot.md`
4. `lib/site.ts`
