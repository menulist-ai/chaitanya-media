import {setRequestLocale} from "next-intl/server";
import {LegalPage} from "@/components/LegalPage";
import {createMetadata} from "@/lib/seo";
import {getContent, getLocale, type LegalSlug} from "@/lib/site";

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
  setRequestLocale(locale);

  return <LegalPage eyebrow={content.legalEyebrow} page={content.legalPages[slug]} />;
}
