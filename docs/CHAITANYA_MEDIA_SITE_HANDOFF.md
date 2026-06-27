# Chaitanya Media Website Handoff

Generated: 2026-06-27  
Project path: `/Users/danny/Documents/CDS`  
Project type: standalone Next.js website  
Current status: build-ready local website with multilingual content, mobile-first UX, local video assets, services pages, proof sections, legal pages, and final QA checks passing.

## 1. Executive Summary

Chaitanya Media is a Pune-based digital marketing and campaign support business. The website is built as a separate dedicated Next.js project, not part of any existing product/repo.

The site is designed for Indian non-technical clients, especially local business owners, political campaign teams, real estate teams, schools, retail businesses, event/wedding clients, and service providers who need practical promotion support.

The website should communicate:

- clear digital promotion services
- local Indian business trust
- campaign and election support capability
- practical lead generation and follow-up
- social proof through work examples, reels, testimonials, and campaign material
- easy mobile contact through phone and WhatsApp

Primary positioning:

> Best Digital Marketing Agency in Pune that builds brands and wins elections.

Positioning caution:

This is the current website-facing positioning, but it should not be treated as the final long-term brand strategy without review. The strongest next improvement is strategic simplification: Chaitanya Media should be easier to understand in one sentence before the visitor sees the full service inventory.

Important audience note:

Most visitors are expected to open the site on mobile. Copy, layout, CTAs, and forms are intentionally written for non-tech users.

## 1A. Strategic Positioning Review

This handoff is strong as an engineering and implementation document. However, the next team should treat product positioning as an open strategic item, not as fully settled.

Current strategic risk:

Chaitanya Media currently presents a very broad service range: websites, SEO, ads, reels, SMS, WhatsApp, IVR, voice calls, school campaigns, wedding invitations, real estate, jewellery, retail, and election campaign support. This is operationally accurate, but it can dilute the visitor's mental model if every service appears equally important.

The main risk is not visual design. The main risk is cognitive load.

Recommended simplified positioning:

> Chaitanya Media helps local businesses and campaign teams get more enquiries through websites, marketing, campaign communication, and follow-up systems.

Alternative shorter positioning:

> Practical digital marketing and campaign support for local businesses in Pune.

Avoid relying too heavily on:

> Best Digital Marketing Agency

Reason:

Unless there is objective third-party proof, "best" is a weak claim. It can feel less credible than a practical, outcome-led promise.

Recommended homepage message hierarchy:

1. Outcome
   Get more visibility, enquiries, and follow-up.

2. Four simple service pillars
   Websites, Marketing, Campaigns, Lead Systems.

3. Specialist vertical
   Election Campaign Solutions.

4. Proof
   Reels, campaign material, testimonials, portfolio, results.

5. Contact
   WhatsApp, phone, and inquiry form.

Recommended brand differentiator options:

- Campaign-first execution
- Local business specialization
- WhatsApp-first marketing
- Offline + online campaign support
- Election execution expertise

Pick one primary differentiator for the public homepage. Do not try to make all of them equally dominant.

Recommended production service hierarchy:

```text
Chaitanya Media
├ Websites
├ Digital Marketing
├ Campaign Communication
├ Lead & Follow-up Systems
└ Election Campaign Solutions
```

The 26 detailed services can still exist as SEO/service-detail pages, but the homepage should not make all 26 feel like equal front-door choices.

Recommended future homepage compression:

The current homepage is intentionally comprehensive, but a production conversion version can be shorter:

1. Hero with outcome-led promise
2. Four service pillars
3. Election campaign vertical callout
4. Proof/results section combining case studies, portfolio, testimonials, and campaign material
5. Reels/video proof
6. Contact

This would reduce cognitive load while preserving the deeper service pages for SEO and sales discussions.

## 2. Business Identity

Business name: Chaitanya Media  
Short name: Chaitanya Media  
Location: Shewalewadi, Pune  
Primary service region: Pune, Shewalewadi, Hadapsar, Manjri, Maharashtra, India  
Phone: `+91 88053 85779`  
WhatsApp: `https://wa.me/918805385779`  
Email destination: `hello@chaitanyadigitalsolutions.com` (legacy delivery address, replace after a confirmed Chaitanya Media email/domain is available)  
Instagram: `https://www.instagram.com/marketing_with_shivam_/`  
Facebook: currently points to the same Instagram URL until a confirmed Facebook URL is provided.

## 3. Current Technology Stack

Framework:

- Next.js `16.2.9`
- React `19.2.7`
- App Router
- static generation with dynamic locale routes

Key libraries:

- `next-intl` for multilingual routing/content
- `lenis` for smooth scrolling
- `lucide-react` for icons
- `playwright-core` for local rendered QA scripts

Scripts:

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
```

Local dev example:

```bash
PORT=3010 npm run dev
```

Local URL:

```text
http://localhost:3010/en
```

## 4. Main Source Of Truth

Most website business content lives in:

```text
lib/site.ts
```

This includes:

- site name, phone, email, WhatsApp
- nav labels
- homepage copy
- services
- services grouped by customer goal
- industries
- client types
- proof items
- portfolio items
- testimonials
- trust credentials
- compliance points
- blog posts
- legal page copy
- EN/MR/HI content variants

Design and layout styling lives mainly in:

```text
app/globals.css
```

Core homepage:

```text
app/[locale]/page.tsx
```

Shared shell:

```text
app/[locale]/layout.tsx
components/Header.tsx
components/MobileNav.tsx
components/Footer.tsx
```

## 5. Supported Languages

The site supports exactly three languages:

- English: `/en`
- Marathi: `/mr`
- Hindi: `/hi`

Locale routing is handled by:

```text
i18n/routing.ts
```

Language switching is currently placed in the footer, as requested. Do not move the language selector back into the header unless explicitly approved.

Content quality note:

Some Marathi/Hindi content intentionally uses mixed English marketing/service terms because that matches common client vocabulary for this business category.

## 6. Current Pages And Routes

Main locale routes:

```text
/:locale
/:locale/about
/:locale/founder
/:locale/services
/:locale/services/:slug
/:locale/results
/:locale/contact
/:locale/blog
/:locale/blog/:slug
/:locale/thank-you
/:locale/privacy-policy
/:locale/terms
/:locale/acceptable-use-policy
/:locale/refund-policy
/:locale/cookie-policy
/:locale/disclaimer
/:locale/security-policy
/:locale/security-compliance
```

Generated technical routes:

```text
/robots.txt
/sitemap.xml
```

Important dynamic sections:

- service detail pages are generated from `content.services`
- blog detail pages are generated from `content.blogPosts`
- legal pages are generated from the legal page content map

## 7. Services Currently Represented

Chaitanya Media services currently included on the site:

1. Bulk SMS Marketing
2. Email Marketing
3. Voice Call Campaigns
4. Missed Call Alert
5. IVR Solutions
6. WhatsApp Business API
7. Social Media Marketing
8. Google & Meta Ads
9. SEO Services
10. Web Designing
11. Web Development
12. Election Management
13. Election Software Management
14. Booth Survey & Voter Analysis
15. Voter Slip & Booth Kit
16. LED Van & Video Campaigns
17. Print Media & Outdoor Design
18. Election Material Supply
19. Real Estate Marketing
20. Jewellery & Luxury Branding
21. Content & Reel Production
22. Event & Wedding Digital Invitations
23. School Admission Campaigns
24. Retail & Local Business Marketing
25. Digital Marketing
26. Customized Advertising

Removed/avoid:

- E-Commerce Solutions was removed because Chaitanya Media does not provide that service.

## 8. Services By Customer Goal

The homepage groups services into plain-language customer goals:

1. Reach & Follow-up
   Services such as SMS, email, voice calls, missed calls, IVR, WhatsApp.

2. Visibility & Leads
   Social media, Google/Meta ads, SEO, digital marketing, local campaigns.

3. Website & Online Presence
   Web designing and web development.

4. Specialized Campaigns
   Real estate, jewellery/luxury, content/reels, events/weddings, school admissions, retail/local business, customized advertising.

5. Election Ground Support
   Election management, software, booth survey, voter slips, LED van/video, print media, material supply.

The service grouping component is:

```text
components/ServiceGoalStack.tsx
```

It uses `IntersectionObserver` to highlight the active group in the left-side list while the right-side service cards are scrolled.

## 9. Homepage Structure

Current homepage sections:

1. Hero
   Main positioning, primary CTA, secondary CTA, trust stats.

2. Easy browsing / smooth experience
   Explains that the site is simple, mobile-first, and contact-ready.

3. Campaign plan
   Explains how Chaitanya Media connects reach, inquiry, trust, and follow-up.

4. Services by goal
   Main services selection module with sticky/active side navigation.

5. Clear campaign planning
   Explains how Chaitanya Media makes messaging, channels, inquiries, and follow-up practical.

6. How Chaitanya Media works
   Process cards from brief to campaign launch and reporting.

7. Industries
   Industry and client categories.

8. Clients
   Types of clients served.

9. Results and proof
   Metrics and trust numbers.

10. Case studies
    Structured proof sections.

11. Portfolio
    Approved placeholders and work examples.

12. Testimonials
    Trust slots.

13. Credentials
    Trust credentials.

14. Compliance / responsible outreach
    Safe claims and campaign responsibility.

15. UGC / reels video section
    Local videos loaded from `public/videos`, with thumbnails from `public/images/Video Thumbnails`.

16. Contact form
    Inquiry form with phone, business, location, service, timeline, budget, preferred contact, and message.

17. Final CTA
    Phone and WhatsApp action.

Important prior decision:

The old hero card titled "Clear campaign planning" was removed from the hero. Do not re-add it to the top hero.

## 10. Design Direction

The visual direction is based on a high-contrast lime and near-black palette inspired by Wibify:

```text
#C9E265  Lime accent
#18181A  Ink / near-black
```

Core visual goals:

- clear for non-tech Indian clients
- modern but not too SaaS-heavy
- mobile-first
- strong CTAs
- practical service clarity
- restrained cards and borders
- no generic blue/purple AI SaaS look
- no overcomplicated technical dashboard feel

Current design behavior:

- light and dark mode supported
- language and theme controls live in the footer
- header is sticky
- mobile menu opens as a right-side full-height drawer
- drawer has an `X` close button
- homepage hero is compact enough to show the next section on mobile
- UGC videos do not autoplay directly on the page; thumbnails open a player modal

## 11. Mobile UX Rules

Assumption: about 99 percent of visitors may use mobile.

Mobile priorities:

- CTAs visible early
- no overloaded hero card
- no technical jargon before the user understands the service
- drawer menu must be easy to open and close
- forms must be readable and stacked
- service choices must be grouped by goal
- videos render as thumbnails, not full autoplay embeds

Recent mobile fixes already completed:

- mobile hamburger opens right-to-left drawer
- drawer uses full available height
- drawer includes visible `X` close button
- drawer closes on menu item click, WhatsApp click, backdrop click, or `X`
- hero stats are horizontally scrollable on mobile to avoid crowding
- hero copy shortened for mobile readability

## 12. Media Assets

Image assets:

```text
public/images/chaitanya-media-icon.svg
public/images/chaitanya-media-icon-vector-transparent.png
public/images/lovable-hero-bg.jpg
public/images/chaitanya-founder.jpg
public/images/campaign-materials/election-service-menu.jpg
public/images/campaign-materials/voter-outreach-banner.jpg
public/images/Video Thumbnails/1.jpg
public/images/Video Thumbnails/2.jpg
public/images/Video Thumbnails/3.jpg
public/images/Video Thumbnails/4.jpg
public/images/Video Thumbnails/5.jpg
public/images/Video Thumbnails/6.jpg
public/images/Video Thumbnails/7.jpg
```

Video assets:

```text
public/videos/1.mp4
public/videos/2.mp4
public/videos/3.mp4
public/videos/4.mp4
public/videos/5.mp4
public/videos/6.mp4
public/videos/7.mp4
```

Video rendering component:

```text
components/UgcVideoShowcase.tsx
```

Important video rule:

Videos should not render directly as playing videos on page load. Use thumbnails first, then open the selected video in the modal player.

## 13. Social Links

Current social links are defined in:

```text
lib/site.ts
```

Current behavior:

- Instagram links to `https://www.instagram.com/marketing_with_shivam_/`
- Facebook currently links to the same Instagram profile until a real Facebook URL is available
- WhatsApp links to `https://wa.me/918805385779`

Footer uses actual social icon styling for Instagram, Facebook, and WhatsApp.

## 14. Form And Lead Handling

Homepage contact form currently submits using `mailto:` to the legacy delivery inbox:

```text
action="mailto:hello@chaitanyadigitalsolutions.com"
method="post"
encType="text/plain"
```

Current fields:

- full name
- phone
- business or campaign name
- email
- target location
- looking for service
- timeline
- approximate budget
- preferred contact
- message

Important limitation:

There is no backend CRM, database, email API, WhatsApp API, or lead capture endpoint yet. A future team can replace the `mailto:` action with:

- server action
- API route
- email service
- Google Sheet integration
- CRM webhook
- WhatsApp lead workflow

When changing this, preserve field names and user-facing labels unless the team coordinates analytics and lead handling changes.

## 15. SEO And Metadata

SEO helpers:

```text
lib/seo.ts
```

Content base:

```text
lib/site.ts
```

Generated files/routes:

```text
app/robots.ts
app/sitemap.ts
```

Structured data:

- homepage includes `ItemList` schema for services
- layout includes organization/local business style schema

SEO positioning focuses on:

- digital marketing services in Pune
- local campaign support
- election promotion
- SMS, WhatsApp, voice call, IVR, SEO, ads
- local business and campaign visibility

## 16. Legal And Policy Pages

Included legal/policy pages:

- Privacy Policy
- Terms of Service
- Acceptable Use Policy
- Refund Policy
- Cookie Policy
- Disclaimer
- Security Policy
- Security & Compliance

Important:

These are website-level policies and disclaimers. They are not a substitute for a lawyer-reviewed service agreement. Any high-risk political campaign, bulk messaging, voter data, or advertising compliance claim should be reviewed before production.

## 17. Taste Skill Setup

The repo includes local Taste skill files under:

```text
.agents/skills/design-taste-frontend/SKILL.md
.agents/skills/redesign-existing-projects/SKILL.md
.agents/skills/full-output-enforcement/SKILL.md
skills-lock.json
```

How it was used:

- as a design QA layer
- not as the brand authority
- not as a reason to redesign everything

Useful Taste-driven cleanup already completed:

- reduced repeated homepage eyebrow labels
- removed old hero card CSS
- shortened mobile hero copy
- replaced generic `John Doe` placeholder
- avoided scroll event listeners in service group highlighting
- checked for common AI-slop patterns

Important rule:

Taste can guide polish, but Chaitanya Media business truth, current services, local ICP, multilingual content, and owner instructions override Taste defaults.

## 18. Verification Status

Final checks passed on 2026-06-27:

```bash
npm run typecheck
npm run lint
npm run build
```

Rendered smoke checks passed for:

```text
/en
/en/services
/en/contact
/en/results
/en/services/bulk-sms-marketing
```

Mobile drawer smoke passed:

- opens from hamburger
- closes with `X`
- no console errors
- no horizontal overflow

Build generated:

- 139 static pages
- locale routes for EN/MR/HI
- service detail paths for all configured services
- blog detail paths
- legal paths
- sitemap and robots routes

## 19. Current Known Limitations

1. Product positioning is still broad.
   The implementation supports many services, but the public homepage should eventually reduce visible complexity into four or five simple pillars.

2. Differentiation needs one clear choice.
   Chaitanya Media should decide whether the strongest public differentiator is local business specialization, campaign-first execution, WhatsApp-first marketing, offline + online campaigns, or election execution expertise.

3. Proof is weaker than the service inventory.
   The site has proof sections, but the highest conversion lift will come from real testimonials, before/after work, campaign screenshots, approved client examples, and verifiable metrics.

4. Facebook URL is not confirmed.
   It currently points to the Instagram profile.

5. Form lead handling is not production-grade.
   It uses `mailto:` and should be replaced with a real lead capture flow before serious marketing.

6. Testimonials and portfolio content include trust slots and approved placeholders.
   Real client-approved testimonials, images, and proof should be added when available.

7. Legal/compliance copy should be reviewed before public political campaign usage.

8. No production deployment config is documented in this handoff.
   The app builds locally and can be deployed through a standard Next.js platform after domain and environment decisions.

## 20. Team Responsibilities

Design team:

- preserve lime/ink visual identity
- keep mobile-first layouts
- avoid making the site look like generic SaaS, AI tool, or cybersecurity company
- keep cards and borders restrained
- keep language/theme controls in footer unless asked otherwise

Content team:

- update `lib/site.ts`
- keep EN/MR/HI content aligned
- use plain language for non-tech clients
- avoid unsupported outcome promises
- keep services accurate to what Chaitanya Media actually provides
- do not re-add E-Commerce Solutions unless Chaitanya Media starts providing it

Development team:

- preserve App Router locale structure
- run typecheck, lint, and build after changes
- keep mobile drawer functional
- avoid unnecessary new dependencies
- replace `mailto:` only with a planned lead backend
- preserve service slugs unless SEO migration is planned

Marketing team:

- add approved testimonials and portfolio proof
- provide final Facebook profile URL
- provide real campaign results only when claim-safe
- add new reels/videos into `public/videos` and matching thumbnails into `public/images/Video Thumbnails`
- keep Instagram profile CTA active

## 21. How To Add A New Service

1. Add the service to all three locale service arrays in `lib/site.ts`.
2. Add title, slug, summary, intro, buyer problems, includes, outcomes, not-promised items, process, and FAQs.
3. Add the service slug into the correct `home.serviceGroups` group for EN/MR/HI.
4. Add or update icon mapping if needed in:

```text
components/ServiceGoalStack.tsx
```

5. Add service accent mapping if needed in:

```text
lib/service-accent.ts
```

6. Run:

```bash
npm run typecheck
npm run lint
npm run build
```

## 22. How To Add A New Video

1. Add the video file:

```text
public/videos/N.mp4
```

2. Add the thumbnail:

```text
public/images/Video Thumbnails/N.jpg
```

3. Add the video item in `home.ugcVideos` for each locale in `lib/site.ts`.

4. Keep title and category short so the mobile video card remains readable.

5. Confirm video opens in the modal player and does not autoplay on page load.

## 23. How To Run Final QA

Recommended before handoff or deployment:

```bash
npm run typecheck
npm run lint
npm run build
PORT=3010 npm run dev
```

Manual checks:

- `/en`
- `/mr`
- `/hi`
- `/en/services`
- one service detail page
- `/en/contact`
- `/en/results`
- mobile hamburger drawer
- footer language/theme controls
- UGC video modal
- contact form fields
- dark mode
- mobile viewport around 390px wide

Look specifically for:

- horizontal overflow
- button text wrapping
- unreadable form fields
- missing thumbnails/videos
- broken social links
- too much English in Marathi/Hindi pages
- unsupported claims
- services that Chaitanya Media does not actually provide

## 24. Do Not Change Without Approval

Do not silently change:

- phone number
- WhatsApp URL
- Instagram URL
- service slugs
- locale route structure
- legal/disclaimer meaning
- form field names/order
- language/theme placement
- mobile drawer behavior
- removal of E-Commerce Solutions
- local non-tech Indian ICP positioning

## 25. Final Handoff Note

This website is now a dedicated Chaitanya Media Next.js project with a mobile-first, multilingual, service-rich structure. The next most valuable production step is not more visual redesign. The next valuable steps are strategic simplification, real inquiry capture, and stronger proof: reduce the homepage message into simple service pillars, replace `mailto:` with a real lead workflow, and add approved testimonials, portfolio examples, final social links, and verified campaign results.
