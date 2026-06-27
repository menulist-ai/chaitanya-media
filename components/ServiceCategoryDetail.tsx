import Link from "next/link";
import {ArrowRight, CheckCircle2, ClipboardCheck, Megaphone} from "lucide-react";
import {SectionIntro} from "@/components/SectionIntro";
import {serviceAccentClass} from "@/lib/service-accent";
import {localePath, type AppLocale, type ServiceGroup, type SiteContent} from "@/lib/site";

type ServiceCategoryDetailProps = {
  content: SiteContent;
  group: ServiceGroup;
  locale: AppLocale;
};

function uniqueItems(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}

function chunkServices<T>(items: T[]) {
  const chunkSize = Math.max(1, Math.ceil(items.length / 3));
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += chunkSize) {
    chunks.push(items.slice(index, index + chunkSize));
  }

  return chunks.slice(0, 3);
}

export function ServiceCategoryDetail({content, group, locale}: ServiceCategoryDetailProps) {
  const copy = content.serviceDetail;
  const serviceBySlug = new Map(content.services.map((service) => [service.slug, service]));
  const categoryServices = group.slugs
    .map((slug) => serviceBySlug.get(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const categoryServiceSlugs = new Set(categoryServices.map((service) => service.slug));
  const relatedGroups = content.home.serviceGroups.filter((item) => item.slug !== group.slug);
  const outcomes = uniqueItems(categoryServices.flatMap((service) => service.outcomes)).slice(0, 6);
  const processSteps = uniqueItems(categoryServices.flatMap((service) => service.process)).slice(0, 5);
  const categoryFaqs = categoryServices.flatMap((service) => service.faqs.slice(0, 1)).slice(0, 5);
  const serviceChunks = chunkServices(categoryServices);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{content.home.serviceStackEyebrow}</p>
          <h1>{group.title}</h1>
          <p className="hero-copy">{group.text}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={content.site.whatsapp}>
              {copy.strategyCall}
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <Link className="button button-secondary" href={localePath(locale, "/services/")}>
              {content.footer.servicesHeading}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-about">
        <div className="container split-grid">
          <SectionIntro
            eyebrow={copy.whenHelpsEyebrow}
            title={copy.whenHelpsTitle}
            text={copy.whenHelpsText}
          />
          <div className="check-grid">
            {categoryServices.map((service) => (
              <div className="check-item" key={service.slug}>
                <CheckCircle2 aria-hidden="true" size={20} />
                <span>{service.summary}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <SectionIntro eyebrow={copy.includedEyebrow} title={copy.includedTitle} text={copy.includedText} />
          <div className="service-card-grid">
            {categoryServices.map((service) => (
              <Link
                className={`service-card ${serviceAccentClass(service.slug)}`}
                href={localePath(locale, `/services/${service.slug}/`)}
                key={service.slug}
              >
                <Megaphone aria-hidden="true" size={22} />
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <strong>
                  {copy.viewService} <ArrowRight aria-hidden="true" size={16} />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-results">
        <div className="container split-grid">
          <SectionIntro eyebrow={copy.outcomesEyebrow} title={copy.outcomesTitle} />
          <div className="check-grid">
            {outcomes.map((outcome) => (
              <div className="check-item" key={outcome}>
                <Megaphone aria-hidden="true" size={20} />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-why">
        <div className="container">
          <SectionIntro eyebrow={content.home.engineEyebrow} title={content.home.engineTitle} text={content.home.engineText} />
          <div className="category-combo-grid">
            {serviceChunks.map((chunk) => (
              <article className="category-combo-card" key={chunk.map((service) => service.slug).join("-")}>
                <ClipboardCheck aria-hidden="true" size={22} />
                <h3>{chunk.map((service) => service.title).join(" + ")}</h3>
                <p>{chunk.map((service) => service.summary).join(" ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-about">
        <div className="container">
          <SectionIntro eyebrow={copy.processEyebrow} title={copy.processTitle} text={copy.processText} />
          <div className="timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-industries">
        <div className="container split-grid">
          <SectionIntro eyebrow={copy.questionsEyebrow} title={`${copy.commonQuestionsPrefix} ${group.title}`} />
          <div className="faq-list">
            {categoryFaqs.map((faq) => (
              <details key={`${group.slug}-${faq.question}`}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <SectionIntro eyebrow={content.home.serviceStackEyebrow} title={content.home.serviceStackTitle} />
          <div className="category-link-grid">
            {relatedGroups.map((item) => {
              const count = item.slugs.filter((slug) => !categoryServiceSlugs.has(slug)).length || item.slugs.length;

              return (
                <Link className="category-link-card" href={localePath(locale, `/services/${item.slug}/`)} key={item.slug}>
                  <span>{String(count).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <strong>
                    {copy.viewService} <ArrowRight aria-hidden="true" size={16} />
                  </strong>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
