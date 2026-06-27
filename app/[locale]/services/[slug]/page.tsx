import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {JsonLd} from "@/components/JsonLd";
import {ServiceCategoryDetail} from "@/components/ServiceCategoryDetail";
import {ServiceDetail} from "@/components/ServiceDetail";
import {routing} from "@/i18n/routing";
import {createMetadata} from "@/lib/seo";
import {
  getContent,
  getLocale,
  getService,
  getServiceGroup,
  serviceGroups as englishServiceGroups,
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
  return routing.locales.flatMap((locale) => [
    ...englishServiceGroups.map((group) => ({
      locale,
      slug: group.slug
    })),
    ...englishServices.map((service) => ({
      locale,
      slug: service.slug
    }))
  ]);
}

export async function generateMetadata({params}: ServicePageProps) {
  const {locale: requestedLocale, slug} = await params;
  const locale = getLocale(requestedLocale);
  const service = getService(locale, slug);
  const group = getServiceGroup(locale, slug);

  if (!service && !group) {
    return {};
  }

  if (group) {
    return createMetadata({
      title: `${group.title} Services`,
      description: group.text,
      path: `/services/${group.slug}/`,
      locale
    });
  }

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
  const group = getServiceGroup(locale, slug);
  setRequestLocale(locale);

  if (!service && !group) {
    notFound();
  }

  if (group) {
    const categoryServices = group.slugs
      .map((item) => getService(locale, item))
      .filter((item): item is NonNullable<typeof item> => Boolean(item));
    const categoryFaqs = categoryServices.flatMap((item) => item.faqs.slice(0, 1)).slice(0, 5);
    const path = `/services/${group.slug}/`;
    const schema = [
      webPageJsonLd({
        locale,
        path,
        name: `${group.title} Services`,
        description: group.text,
        type: "CollectionPage"
      }),
      breadcrumbJsonLd(locale, [
        {name: content.notFoundPage.home, path: "/"},
        {name: content.notFoundPage.services, path: "/services/"},
        {name: group.title, path}
      ]),
      faqJsonLd(categoryFaqs)
    ];

    return (
      <>
        <JsonLd data={schema} />
        <ServiceCategoryDetail content={content} group={group} locale={locale} />
      </>
    );
  }

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
