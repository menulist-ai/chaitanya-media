import {htmlLangByLocale, routing, type AppLocale} from "@/i18n/routing";
import {
  absoluteUrl,
  type BlogPost,
  type FAQ,
  localePath,
  localizedAbsoluteUrl,
  siteBase,
  type Service,
  type SiteContent
} from "@/lib/site";

export type JsonLdSchema = Record<string, unknown>;

const organizationId = `${siteBase.url}/#organization`;
const websiteId = `${siteBase.url}/#website`;

function withContext(schema: JsonLdSchema): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    ...schema
  };
}

function uniqueValues(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

export function organizationJsonLd(locale: AppLocale, content: SiteContent): JsonLdSchema {
  return withContext({
    "@type": "LocalBusiness",
    "@id": organizationId,
    name: content.site.name,
    alternateName: content.site.shortName,
    slogan: content.site.tagline,
    url: localizedAbsoluteUrl(locale, "/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon-512x512.png"),
      width: 512,
      height: 512
    },
    image: absoluteUrl("/og-image.png"),
    telephone: content.site.phone,
    email: content.site.email,
    foundingDate: content.site.founded,
    description: content.site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN"
    },
    areaServed: [
      "Pune",
      "Shewalewadi",
      "Hadapsar",
      "Manjri",
      "Maharashtra",
      "India"
    ].map((name) => ({
      "@type": "Place",
      name
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: content.site.phone,
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Marathi", "Hindi"]
    },
    knowsAbout: uniqueValues([
      "Digital marketing",
      "Political campaign promotion",
      "Social media marketing",
      "Bulk SMS marketing",
      "Voice call campaigns",
      "WhatsApp campaign support",
      "Google Ads",
      "Meta Ads",
      "SEO",
      ...content.services.map((service) => service.title)
    ]),
    sameAs: uniqueValues(content.socialLinks.map((link) => link.href))
  });
}

export function websiteJsonLd(locale: AppLocale, content: SiteContent): JsonLdSchema {
  return withContext({
    "@type": "WebSite",
    "@id": websiteId,
    name: content.site.name,
    url: localizedAbsoluteUrl(locale, "/"),
    publisher: {
      "@id": organizationId
    },
    inLanguage: htmlLangByLocale[locale]
  });
}

export function webPageJsonLd({
  locale,
  path,
  name,
  description,
  type = "WebPage"
}: {
  locale: AppLocale;
  path: string;
  name: string;
  description: string;
  type?: string;
}): JsonLdSchema {
  const url = localizedAbsoluteUrl(locale, path);

  return withContext({
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@id": websiteId
    },
    about: {
      "@id": organizationId
    },
    inLanguage: htmlLangByLocale[locale]
  });
}

export function breadcrumbJsonLd(
  locale: AppLocale,
  items: {name: string; path: string}[]
): JsonLdSchema {
  return withContext({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: localizedAbsoluteUrl(locale, item.path)
    }))
  });
}

export function serviceJsonLd(locale: AppLocale, service: Service): JsonLdSchema {
  return withContext({
    "@type": "Service",
    "@id": `${localizedAbsoluteUrl(locale, `/services/${service.slug}/`)}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    url: localizedAbsoluteUrl(locale, `/services/${service.slug}/`),
    provider: {
      "@id": organizationId
    },
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    audience: {
      "@type": "Audience",
      audienceType: "Indian businesses, local brands, and campaign teams"
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: localizedAbsoluteUrl(locale, `/services/${service.slug}/`)
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} scope`,
      itemListElement: service.includes.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item
        }
      }))
    },
    mainEntityOfPage: localizedAbsoluteUrl(locale, `/services/${service.slug}/`),
    inLanguage: htmlLangByLocale[locale]
  });
}

export function serviceItemListJsonLd(locale: AppLocale, content: SiteContent): JsonLdSchema {
  return withContext({
    "@type": "ItemList",
    name: `${content.site.name} services`,
    itemListElement: content.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        provider: {
          "@id": organizationId
        },
        url: localizedAbsoluteUrl(locale, `/services/${service.slug}/`)
      }
    }))
  });
}

export function faqJsonLd(faqs: FAQ[]): JsonLdSchema {
  return withContext({
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  });
}

export function blogItemListJsonLd(locale: AppLocale, content: SiteContent): JsonLdSchema {
  return withContext({
    "@type": "ItemList",
    name: `${content.site.name} articles`,
    itemListElement: content.blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: localizedAbsoluteUrl(locale, `/blog/${post.slug}/`),
        datePublished: post.date
      }
    }))
  });
}

export function articleJsonLd(
  locale: AppLocale,
  content: SiteContent,
  post: BlogPost
): JsonLdSchema {
  const articleBody = post.sections
    .map((section) => [section.heading, ...section.body].join("\n"))
    .join("\n\n");

  return withContext({
    "@type": "BlogPosting",
    "@id": `${localizedAbsoluteUrl(locale, `/blog/${post.slug}/`)}#article`,
    headline: post.title,
    description: post.excerpt,
    articleBody,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@id": organizationId,
      name: content.site.name
    },
    publisher: {
      "@id": organizationId
    },
    image: absoluteUrl("/og-image.png"),
    mainEntityOfPage: localizedAbsoluteUrl(locale, `/blog/${post.slug}/`),
    inLanguage: htmlLangByLocale[locale]
  });
}

export function legalPageJsonLd(
  locale: AppLocale,
  path: string,
  name: string,
  description: string
): JsonLdSchema {
  return webPageJsonLd({
    locale,
    path,
    name,
    description,
    type: "WebPage"
  });
}

export function localizedLanguageLinks(path: string) {
  return Object.fromEntries(
    routing.locales.map((locale) => [htmlLangByLocale[locale], localizedAbsoluteUrl(locale, path)])
  );
}

export function localizedPathForSchema(locale: AppLocale, path: string) {
  return localePath(locale, path);
}
