import type {Metadata} from "next";
import {htmlLangByLocale, routing, type AppLocale} from "@/i18n/routing";
import {absoluteUrl, localizedAbsoluteUrl, siteBase} from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  locale?: AppLocale;
};

export function createMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
  locale = "en"
}: MetadataInput): Metadata {
  const canonical = localizedAbsoluteUrl(locale, path);
  const languages = Object.fromEntries([
    ["x-default", localizedAbsoluteUrl(routing.defaultLocale, path)],
    ...routing.locales.map((item) => [htmlLangByLocale[item], localizedAbsoluteUrl(item, path)])
  ]);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteBase.name,
      images: [
        {
          url: absoluteUrl("/og-image.png"),
          width: 1200,
          height: 630,
          alt: siteBase.name
        }
      ],
      locale: htmlLangByLocale[locale].replace("-", "_"),
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-image.png")]
    },
    robots: noIndex
      ? {
          index: false,
          follow: false
        }
      : {
          index: true,
          follow: true
        }
  };
}
