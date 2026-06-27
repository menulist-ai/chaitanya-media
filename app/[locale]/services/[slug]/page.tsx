import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {JsonLd} from "@/components/JsonLd";
import {ServiceDetail} from "@/components/ServiceDetail";
import {routing} from "@/i18n/routing";
import {createMetadata} from "@/lib/seo";
import {
  getContent,
  getLocale,
  getService,
  services as englishServices
} from "@/lib/site";
import {breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd} from "@/lib/structured-data";

type ServicePageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    englishServices.map((service) => ({
      locale,
      slug: service.slug
    }))
  );
}

export async function generateMetadata({params}: ServicePageProps) {
  const {locale: requestedLocale, slug} = await params;
  const locale = getLocale(requestedLocale);
  const service = getService(locale, slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: `${service.title} Services`,
    description: service.summary,
    path: `/services/${service.slug}/`,
    locale
  });
}

export default async function ServicePage({params}: ServicePageProps) {
  const {locale: requestedLocale, slug} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const service = getService(locale, slug);
  setRequestLocale(locale);

  if (!service) {
    notFound();
  }

  const path = `/services/${service.slug}/`;
  const schema = [
    webPageJsonLd({
      locale,
      path,
      name: `${service.title} Services`,
      description: service.summary
    }),
    breadcrumbJsonLd(locale, [
      {name: content.notFoundPage.home, path: "/"},
      {name: content.notFoundPage.services, path: "/services/"},
      {name: service.title, path}
    ]),
    serviceJsonLd(locale, service),
    faqJsonLd(service.faqs)
  ];

  return (
    <>
      <JsonLd data={schema} />
      <ServiceDetail content={content} locale={locale} service={service} />
    </>
  );
}
