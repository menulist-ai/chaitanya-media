import {setRequestLocale} from "next-intl/server";
import {JsonLd} from "@/components/JsonLd";
import {LegalPage} from "@/components/LegalPage";
import {createMetadata} from "@/lib/seo";
import {getContent, getLocale, type LegalSlug} from "@/lib/site";
import {breadcrumbJsonLd, legalPageJsonLd} from "@/lib/structured-data";

export type LocaleRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function createLegalPageMetadata(slug: LegalSlug, params: LocaleRouteProps["params"]) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const page = content.legalPages[slug];

  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}/`,
    locale
  });
}

type LocalizedLegalPageProps = LocaleRouteProps & {
  slug: LegalSlug;
};

export async function LocalizedLegalPage({params, slug}: LocalizedLegalPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const page = content.legalPages[slug];
  const path = `/${slug}/`;
  setRequestLocale(locale);
  const schema = [
    legalPageJsonLd(locale, path, page.title, page.description),
    breadcrumbJsonLd(locale, [
      {name: content.notFoundPage.home, path: "/"},
      {name: page.title, path}
    ])
  ];

  return (
    <>
      <JsonLd data={schema} />
      <LegalPage eyebrow={content.legalEyebrow} page={page} />
    </>
  );
}
