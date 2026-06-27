import Link from "next/link";
import {ArrowRight, BadgeCheck, BarChart3} from "lucide-react";
import {setRequestLocale} from "next-intl/server";
import {CampaignMaterialShowcase} from "@/components/CampaignMaterialShowcase";
import {CaseStudyShowcase} from "@/components/CaseStudyShowcase";
import {ComplianceShowcase} from "@/components/ComplianceShowcase";
import {JsonLd} from "@/components/JsonLd";
import {PortfolioShowcase} from "@/components/PortfolioShowcase";
import {ProofGalleryShowcase} from "@/components/ProofGalleryShowcase";
import {SectionIntro} from "@/components/SectionIntro";
import {TestimonialShowcase} from "@/components/TestimonialShowcase";
import {TrustCredentialStrip} from "@/components/TrustCredentialStrip";
import {createMetadata} from "@/lib/seo";
import {getContent, getLocale, localePath} from "@/lib/site";
import {breadcrumbJsonLd, webPageJsonLd} from "@/lib/structured-data";

type ResultsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({params}: ResultsPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);

  return createMetadata({
    title: content.resultsPage.metaTitle,
    description: content.resultsPage.metaDescription,
    path: "/results/",
    locale
  });
}

export default async function ResultsPage({params}: ResultsPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const copy = content.resultsPage;
  setRequestLocale(locale);

  const proofSchema = [
    webPageJsonLd({
      locale,
      path: "/results/",
      name: copy.schemaName,
      description: copy.schemaDescription,
      type: "CollectionPage"
    }),
    breadcrumbJsonLd(locale, [
      {name: content.notFoundPage.home, path: "/"},
      {name: copy.title, path: "/results/"}
    ])
  ];

  return (
    <>
      <JsonLd data={proofSchema} />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="hero-copy">{copy.copy}</p>
        </div>
      </section>

      <section className="section section-results">
        <div className="container">
          <SectionIntro eyebrow={copy.numbersEyebrow} title={copy.numbersTitle} />
          <div className="result-grid">
            {content.resultStats.map((stat) => (
              <article className="result-card" key={stat.label}>
                <BarChart3 aria-hidden="true" size={24} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <SectionIntro
            eyebrow={copy.caseStudiesEyebrow}
            title={copy.caseStudiesTitle}
            text={copy.caseStudiesText}
          />
          <CaseStudyShowcase
            items={content.caseStudies}
            locale={locale}
            needLabel={copy.caseStudyNeedLabel}
            responseLabel={copy.caseStudyResponseLabel}
            viewLabel={copy.caseStudyCta}
          />
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <SectionIntro
            eyebrow={copy.portfolioEyebrow}
            title={copy.portfolioTitle}
            text={copy.portfolioText}
          />
          <PortfolioShowcase
            items={content.portfolioItems}
            locale={locale}
            viewLabel={copy.portfolioCta}
          />
        </div>
      </section>

      <section className="section section-results">
        <div className="container">
          <SectionIntro eyebrow={copy.galleryEyebrow} title={copy.galleryTitle} text={copy.galleryText} />
          <ProofGalleryShowcase items={content.proofGalleryItems} />
        </div>
      </section>

      <section className="section section-industries">
        <div className="container split-grid">
          <SectionIntro
            eyebrow={copy.clientsEyebrow}
            title={copy.clientsTitle}
            text={copy.clientsText}
          />
          <div className="client-list">
            {content.clientTypes.map((client) => (
              <div key={client}>{client}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-results">
        <div className="container">
          <SectionIntro
            eyebrow={copy.testimonialsEyebrow}
            title={copy.testimonialsTitle}
            text={copy.testimonialsText}
          />
          <TestimonialShowcase testimonials={content.testimonialSlots} />
        </div>
      </section>

      <section className="section section-why">
        <div className="container">
          <SectionIntro eyebrow={copy.trustEyebrow} title={copy.trustTitle} text={copy.trustText} />
          <TrustCredentialStrip credentials={content.trustCredentials} />
          <div className="proof-grid">
            {content.trustMarkers.map((marker) => (
              <article className="proof-card" key={marker}>
                <BadgeCheck aria-hidden="true" size={24} />
                <h3>{marker}</h3>
                <p>{copy.proofCardText}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-results">
        <div className="container">
          <SectionIntro
            eyebrow={copy.materialEyebrow}
            title={copy.materialTitle}
            text={copy.materialText}
          />
          <CampaignMaterialShowcase
            examples={content.campaignMaterialExamples}
            note={copy.materialNote}
          />
        </div>
      </section>

      <section className="section section-why">
        <div className="container">
          <SectionIntro
            eyebrow={copy.complianceEyebrow}
            title={copy.complianceTitle}
            text={copy.complianceText}
          />
          <ComplianceShowcase points={content.compliancePoints} />
        </div>
      </section>

      <section className="section section-final">
        <div className="container">
          <SectionIntro eyebrow={copy.finalEyebrow} title={copy.finalTitle} />
          <div className="hero-actions">
            <a className="button button-primary" href={content.site.whatsapp}>
              {copy.primaryCta}
            </a>
            <Link className="button button-secondary" href={localePath(locale, "/contact/")}>
              {copy.secondaryCta} <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
