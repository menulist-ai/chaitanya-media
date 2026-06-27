import Link from "next/link";
import {ArrowRight, ClipboardCheck, Megaphone} from "lucide-react";
import {setRequestLocale} from "next-intl/server";
import {JsonLd} from "@/components/JsonLd";
import {SectionIntro} from "@/components/SectionIntro";
import {createMetadata} from "@/lib/seo";
import {serviceAccentClass} from "@/lib/service-accent";
import {getContent, getLocale, localePath, localizedAbsoluteUrl} from "@/lib/site";

type ServicesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({params}: ServicesPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);

  return createMetadata({
    title: content.servicesPage.metaTitle,
    description: content.servicesPage.metaDescription,
    path: "/services/",
    locale
  });
}

export default async function ServicesPage({params}: ServicesPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const copy = content.servicesPage;
  setRequestLocale(locale);

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: content.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: localizedAbsoluteUrl(locale, `/services/${service.slug}/`),
        provider: {
          "@type": "Organization",
          name: content.site.name
        }
      }
    }))
  };

  return (
    <>
      <JsonLd data={serviceListSchema} />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="hero-copy">{copy.copy}</p>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <SectionIntro eyebrow={copy.menuEyebrow} title={copy.menuTitle} />
          <div className="service-card-grid">
            {content.services.map((service) => (
              <Link
                className={`service-card ${serviceAccentClass(service.slug)}`}
                href={localePath(locale, `/services/${service.slug}/`)}
                key={service.slug}
              >
                <Megaphone aria-hidden="true" size={22} />
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <strong>
                  {content.serviceDetail.viewService} <ArrowRight aria-hidden="true" size={16} />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-why">
        <div className="container split-grid">
          <SectionIntro eyebrow={copy.howEyebrow} title={copy.howTitle} text={copy.howText} />
          <div className="check-grid">
            {copy.steps.map((item) => (
              <div className="check-item" key={item}>
                <ClipboardCheck aria-hidden="true" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
