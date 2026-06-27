# Lovable Source Pivot

Captured on 2026-06-20 after the user clarified that the Lovable site is the source to rebuild and redesign.

## Source Of Truth

- Source website: https://gold-star-growth.lovable.app/
- Rendered text extraction: `docs/research/lovable-extraction/rendered-text.txt`
- Rendered structured extraction: `docs/research/lovable-extraction/rendered-content.json`
- Source screenshot: `qa-screenshots/lovable-source-desktop.png`

## Correct Positioning

The rebuild should be around:

> Best Digital Marketing Agency in Pune That Builds Brands & Wins Elections

The site is not primarily the earlier public-domain website infrastructure, SEO, and cybersecurity direction. It is a digital marketing agency landing page for:

- Political leaders and parties.
- Real estate builders.
- Jewellery showrooms and luxury branding.
- Cafes and lifestyle brands.
- Startups and local businesses.

## Correct Service Content

The services come from the Lovable source:

- Bulk SMS Marketing.
- Email Marketing.
- Voice Call Campaigns.
- Missed Call Alert.
- IVR Solutions.
- WhatsApp Business API.
- Social Media Marketing.
- Google & Meta Ads.
- SEO Services.
- Web Designing.
- Web Development.
- E-Commerce Solutions.
- Election Management.
- Real Estate Marketing.
- Jewellery & Luxury Branding.
- Content & Reel Production.
- Digital Marketing.
- Customized Advertising.

## Correct Section Order

- Hero.
- Who we are.
- Services.
- Industries.
- Why choose us.
- Our clients.
- Numbers that speak.
- Growth blueprint form.
- Final CTA.
- Footer.

## Implementation Notes

The Next.js app has been pivoted to this source:

- `lib/site.ts` now owns the Lovable service list and content model.
- `app/page.tsx` now follows the Lovable one-page section structure.
- `app/globals.css` now follows the Lovable dark/gold visual system.
- `public/images/lovable-hero-bg.jpg` is copied from the Lovable site assets.
- `public/images/chaitanya-media-icon.svg` is the new Chaitanya Media brand mark supplied during the rebrand pass.
