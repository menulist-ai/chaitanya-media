import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, Megaphone } from "lucide-react";
import {CampaignMaterialShowcase} from "@/components/CampaignMaterialShowcase";
import {localePath, type AppLocale, type Service, type SiteContent} from "@/lib/site";
import { SectionIntro } from "@/components/SectionIntro";
import {serviceAccentClass} from "@/lib/service-accent";

type ServiceDetailProps = {
  content: SiteContent;
  locale: AppLocale;
  service: Service;
};

const campaignMaterialServiceSlugs = new Set([
  "election-management",
  "election-software-management",
  "booth-survey-voter-analysis",
  "voter-slip-booth-kit",
  "led-van-video-campaigns",
  "print-media-design",
  "election-material-supply"
]);

export function ServiceDetail({content, locale, service}: ServiceDetailProps) {
  const copy = content.serviceDetail;
  const related = content.services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const showCampaignMaterials = campaignMaterialServiceSlugs.has(service.slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p className="hero-copy">{service.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={content.site.whatsapp}>
              {copy.strategyCall}
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <Link className="button button-secondary" href={localePath(locale, "/contact/")}>
              {copy.discussScope}
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
            {service.buyerProblems.map((problem) => (
              <div className="check-item" key={problem}>
                <CheckCircle2 aria-hidden="true" size={20} />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <SectionIntro
            eyebrow={copy.includedEyebrow}
            title={copy.includedTitle}
            text={copy.includedText}
          />
          <div className="feature-grid">
            {service.includes.map((item) => (
              <article className="feature-card" key={item}>
                <ClipboardCheck aria-hidden="true" size={22} />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-results">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">{copy.outcomesEyebrow}</p>
            <h2>{copy.outcomesTitle}</h2>
          </div>
          <div className="check-grid">
            {service.outcomes.map((outcome) => (
              <div className="check-item" key={outcome}>
                <Megaphone aria-hidden="true" size={20} />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-why">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">{copy.claimSafetyEyebrow}</p>
            <h2>{copy.claimSafetyTitle}</h2>
            <p>{copy.claimSafetyText}</p>
          </div>
          <div className="warning-list">
            {service.notPromised.map((item) => (
              <div className="warning-item" key={item}>
                <CheckCircle2 aria-hidden="true" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-about">
        <div className="container">
          <SectionIntro
            eyebrow={copy.processEyebrow}
            title={copy.processTitle}
            text={copy.processText}
          />
          <div className="timeline">
            {service.process.map((step, index) => (
              <div className="timeline-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showCampaignMaterials ? (
        <section className="section section-results">
          <div className="container">
            <SectionIntro
              eyebrow={content.resultsPage.materialEyebrow}
              title={content.resultsPage.materialTitle}
              text={content.resultsPage.materialText}
            />
            <CampaignMaterialShowcase
              examples={content.campaignMaterialExamples}
              note={content.resultsPage.materialNote}
            />
          </div>
        </section>
      ) : null}

      <section className="section section-industries">
        <div className="container split-grid">
          <SectionIntro
            eyebrow={copy.questionsEyebrow}
            title={`${copy.commonQuestionsPrefix} ${service.title}`}
          />
          <div className="faq-list">
            {service.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <SectionIntro eyebrow={copy.relatedEyebrow} title={copy.relatedTitle} />
          <div className="service-card-grid">
            {related.map((item) => (
              <Link
                className={`service-card ${serviceAccentClass(item.slug)}`}
                key={item.slug}
                href={localePath(locale, `/services/${item.slug}/`)}
              >
                <Megaphone aria-hidden="true" size={22} />
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <strong>
                  {copy.viewService} <ArrowRight aria-hidden="true" size={16} />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
