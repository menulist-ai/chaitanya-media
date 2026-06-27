import type {MetadataRoute} from "next";
import {routing} from "@/i18n/routing";
import {contentByLocale, legalPageSlugs, localePath, siteBase} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/services/",
    "/results/",
    "/about/",
    "/founder/",
    "/blog/",
    "/contact/"
  ];

  return routing.locales.flatMap((locale) => {
    const content = contentByLocale[locale];
    const serviceRoutes = content.services.map((service) => `/services/${service.slug}/`);
    const blogRoutes = content.blogPosts.map((post) => `/blog/${post.slug}/`);
    const legalRoutes = legalPageSlugs.map((slug) => `/${slug}/`);

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...legalRoutes].map((route) => ({
      url: `${siteBase.url}${localePath(locale, route)}`,
      lastModified: new Date("2026-06-27"),
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route.includes("/services/") ? 0.8 : 0.6
    }));
  });
}
