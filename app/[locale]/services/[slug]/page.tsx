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
  localizedAbsoluteUrl,
  services as englishServices
} from "@/lib/site";

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

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.summary,
      provider: {
        "@type": "Organization",
        name: content.site.name,
        url: localizedAbsoluteUrl(locale, "/")
      },
      areaServed: "India",
      url: localizedAbsoluteUrl(locale, `/services/${service.slug}/`)
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    }
  ];

  return (
    <>
      <JsonLd data={schema} />
      <ServiceDetail content={content} locale={locale} service={service} />
    </>
  );
}
