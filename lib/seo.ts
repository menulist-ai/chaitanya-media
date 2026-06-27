import type {Metadata} from "next";
import {htmlLangByLocale, type AppLocale} from "@/i18n/routing";
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

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteBase.name,
      images: [
        {
          url: absoluteUrl("/images/chaitanya-media-icon-vector-transparent.png"),
          width: 1600,
          height: 1600,
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
      images: [absoluteUrl("/images/chaitanya-media-icon-vector-transparent.png")]
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
