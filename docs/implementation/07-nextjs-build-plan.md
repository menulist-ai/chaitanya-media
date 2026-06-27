# Next.js Build Plan

## Project Boundary

This rebuild should be a separate Next.js project in this repository.

Do not import code, styles, config, or product assumptions from other repos.

## Recommended Stack

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- MDX or local content files for blog/content at first.
- Static rendering for marketing pages.
- Server actions or route handler only if a real form backend is needed.
- No database for v1 unless the owner requests dynamic admin content.

## Suggested Folder Shape

```text
app/
  layout.tsx
  page.tsx
  sitemap.ts
  robots.ts
  not-found.tsx
  services/
    page.tsx
    website-infrastructure/page.tsx
    seo-google-visibility/page.tsx
    website-security/page.tsx
    automation-ai/page.tsx
  results/page.tsx
  about/page.tsx
  founder/page.tsx
  blog/
    page.tsx
    [slug]/page.tsx
  contact/page.tsx
  privacy-policy/page.tsx
  terms/page.tsx
  acceptable-use-policy/page.tsx
  refund-policy/page.tsx
  cookie-policy/page.tsx
  disclaimer/page.tsx
  security-policy/page.tsx
  security-compliance/page.tsx
  thank-you/page.tsx
components/
  layout/
  sections/
  ui/
content/
  pages/
  posts/
  data/
lib/
  metadata.ts
  schema.ts
  routes.ts
  redirects.ts
public/
  images/
```

## SEO Implementation

Use Next.js Metadata APIs:

- Static metadata for simple pages.
- `generateMetadata` for blog posts or dynamic routes.
- Shared helper for title templates and canonical URLs.

Use Next.js metadata files:

- `app/sitemap.ts`
- `app/robots.ts`

Routes must output:

- Canonicals.
- Open Graph metadata.
- Twitter card metadata if needed.
- Noindex for `/thank-you/`.

## Rendering Strategy

Use static-first rendering:

- Marketing pages should be static.
- Blog posts can be static from local content files.
- Forms can post to WhatsApp, email, or a future API endpoint.

Reason:

Google says server-side or pre-rendering remains useful because it is faster for users and crawlers, and not all bots run JavaScript.

## Forms And Contact

V1 contact options:

- WhatsApp deep link.
- Phone link.
- Email link.
- Simple audit form if backend destination is confirmed.

Do not ask for:

- Passwords.
- Hosting credentials.
- Admin credentials.
- Payment data.
- Sensitive client data.

If security work requires access, collect that only after formal authorization outside the public form.

## Security Headers

Configure in `next.config.ts` after implementation review:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Frame-Options` or CSP `frame-ancestors`
- `Content-Security-Policy` after scripts/assets are known

OWASP Secure Headers should guide the final header set.

## Image Strategy

Use Next.js `Image` for:

- Founder image.
- Credential images.
- Portfolio screenshots.
- Blog thumbnails.

Rules:

- Set explicit dimensions or stable containers.
- Use `sizes` for responsive layouts.
- Avoid unoptimized huge uploads.
- Keep LCP image light.

## Redirects

Add redirects for:

- `/chaitanya-suhas-jadhav/` -> `/founder/`
- `/cyber-security-website-protection/` -> `/services/website-security/`
- `/security/` -> `/services/website-security/` unless kept as an alias.
- `/seo/` -> `/services/seo-google-visibility/` unless kept as an alias.
- `/proof-of-power/` -> `/results/`
- `/privacy-policy-2/` -> `/privacy-policy/`
- `/terms-conditions-chaitanya-digital-solutions/` -> `/terms/`
- `/disclaimer-chaitanya-digital-solutions/` -> `/disclaimer/`

Confirm all redirects after Search Console review.

## Build Phases

Phase 1:

- Scaffold Next.js app.
- Add layout, design tokens, base components.
- Implement routes with placeholder content.

Phase 2:

- Add final copy and content.
- Migrate selected blog posts.
- Add schema and metadata.

Phase 3:

- Add images, proof assets, credentials, portfolio.
- Add contact/audit flows.

Phase 4:

- QA desktop/mobile.
- SEO crawl.
- Redirect testing.
- Launch.

