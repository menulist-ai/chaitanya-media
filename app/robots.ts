import type {MetadataRoute} from "next";
import {siteBase} from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/en/thank-you/", "/mr/thank-you/", "/hi/thank-you/"]
      }
    ],
    sitemap: `${siteBase.url}/sitemap.xml`
  };
}
