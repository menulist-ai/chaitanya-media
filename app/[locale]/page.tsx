import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ExternalLink,
  Gem,
  Goal,
  Megaphone,
  MessageCircle,
  Phone,
  Radio,
  Search,
  Send,
  ShoppingCart,
  Trophy,
  Users,
} from "lucide-react";
import {setRequestLocale} from "next-intl/server";
import {CaseStudyShowcase} from "@/components/CaseStudyShowcase";
import {ComplianceShowcase} from "@/components/ComplianceShowcase";
import {JsonLd} from "@/components/JsonLd";
import {PortfolioShowcase} from "@/components/PortfolioShowcase";
import {ProofGalleryShowcase} from "@/components/ProofGalleryShowcase";
import {ServiceGoalStack} from "@/components/ServiceGoalStack";
import {TestimonialShowcase} from "@/components/TestimonialShowcase";
import {TrustCredentialStrip} from "@/components/TrustCredentialStrip";
import {UgcVideoShowcase} from "@/components/UgcVideoShowcase";
import {createMetadata} from "@/lib/seo";
import {getContent, getLocale, localePath} from "@/lib/site";
import {breadcrumbJsonLd, serviceItemListJsonLd, webPageJsonLd} from "@/lib/structured-data";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const industryIcons = [
  Building2,
  Goal,
  Trophy,
  ShoppingCart,
  Send,
  Radio,
  Users,
  Gem,
  Search,
  Goal,
  Building2,
  BarChart3
];

export async function generateMetadata({params}: HomePageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);

  return createMetadata({
    title: content.servicesPage.metaTitle,
    description: content.site.description,
    path: "/",
    locale
  });
}

export default async function HomePage({params}: HomePageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const {home} = content;
  const instagramProfileUrl =
    content.socialLinks.find((link) => link.kind === "instagram")?.href ?? content.site.whatsapp;
  setRequestLocale(locale);

  const schema = [
    webPageJsonLd({
      locale,
      path: "/",
      name: content.servicesPage.metaTitle,
      description: content.site.description
    }),
    breadcrumbJsonLd(locale, [{name: content.notFoundPage.home, path: "/"}]),
    serviceItemListJsonLd(locale, content)
  ];

  return (
    <>
      <JsonLd data={schema} />
      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-main">
            <div className="hero-badge">{home.heroBadge}</div>
            <h1>
              {home.heroTitle.before}
              <span>{home.heroTitle.accentOne}</span>
              {home.heroTitle.middle}
              <span>{home.heroTitle.accentTwo}</span>
              {home.heroTitle.after}
            </h1>
            <p className="hero-copy-text">{home.heroCopy}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                {home.primaryCta} <ArrowRight aria-hidden="true" size={17} />
              </a>
              <a className="button button-secondary" href="#services">
                {home.secondaryCta}
              </a>
            </div>
            <div className="hero-service-strip" aria-label={home.heroServiceLabel}>
              <span>{home.heroServiceLabel}</span>
              <div className="hero-service-marquee">
                {[0, 1].map((track) => (
                  <div
                    aria-hidden={track === 1}
                    className="hero-service-track"
                    key={track}
                  >
                    {home.heroServiceHighlights.map((item) => (
                      <Link
                        className="hero-service-pill"
                        href={localePath(locale, `/services/${item.slug}/`)}
                        key={`${track}-${item.slug}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="hero-demand-card" aria-label={home.heroDemandTitle}>
            <div className="hero-demand-heading">
              <span>{home.heroDemandEyebrow}</span>
              <h2>{home.heroDemandTitle}</h2>
              <p>{home.heroDemandText}</p>
            </div>
            <div className="hero-demand-list">
              {home.heroDemandItems.map((item, index) => (
                <Link
                  className="hero-demand-item"
                  href={localePath(locale, `/services/${item.slug}/`)}
                  key={item.slug}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </div>
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              ))}
            </div>
            <a className="hero-demand-cta" href="#contact">
              {home.heroDemandCta} <ArrowRight aria-hidden="true" size={16} />
            </a>
          </aside>
        </div>
      </section>

      <section className="section section-engine" id="about">
        <div className="container engine-shell">
          <div className="section-intro section-intro-center">
            <h2>{home.engineTitle}</h2>
            <p>{home.engineText}</p>
          </div>
          <div className="engine-loop" aria-label={home.engineTitle}>
            <div className="engine-loop-center">
              <span>{content.site.shortName}</span>
              <div className="engine-loop-logo" aria-hidden="true">
                <Image
                  alt=""
                  height={80}
                  src="/images/chaitanya-media-icon.svg"
                  width={80}
                />
              </div>
              <p>{home.engineText}</p>
            </div>
            {home.engineCards.map((item, index) => {
              const Icon = [Megaphone, Goal, BarChart3, Phone][index] ?? CheckCircle2;

              return (
                <article
                  className={`engine-card engine-loop-card engine-loop-card-${index + 1}`}
                  key={item.title}
                >
                  <div>
                    <Icon aria-hidden="true" size={24} />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-services" id="services">
        <div className="container">
          <div className="section-heading">
            <h2>{home.serviceStackTitle}</h2>
            <p>{home.serviceStackText}</p>
          </div>
          <ServiceGoalStack
            groups={home.serviceGroups}
            locale={locale}
            note={home.serviceStackText}
            services={content.services}
            title={home.serviceStackEyebrow}
          />
        </div>
      </section>

      <section className="section section-system" id="why-us">
        <div className="container">
          <div className="system-heading">
            <div>
              <h2>{home.systemTitle}</h2>
            </div>
            <div>
              <p>{home.systemText}</p>
              <div className="system-pills" aria-label={home.systemEyebrow}>
                {home.systemPills.map((pill) => (
                  <span key={pill}>{pill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="system-capability-grid">
            {home.systemCapabilities.map((item) => (
              <article className="system-card" key={item.title}>
                <span>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 aria-hidden="true" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-workflow" id="process">
        <div className="container workflow-layout">
          <div className="workflow-sticky">
            <h2>{home.workflowTitle}</h2>
            <p>{home.workflowText}</p>
          </div>
          <div className="workflow-list">
            {home.workflowSteps.map((step, index) => (
              <article
                className="workflow-step"
                key={step.title}
                style={{top: `${96 + index * 16}px`, zIndex: index + 1}}
              >
                <div className="workflow-step-count">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <ul>
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-industries">
        <div className="container">
          <div className="section-heading">
            <h2>
              {home.industriesTitleBefore}
              <span>{home.industriesTitleAccent}</span>
            </h2>
          </div>
          <div className="industry-grid">
            {content.industries.map((industry, index) => {
              const Icon = industryIcons[index] ?? Building2;
              return (
                <div className="industry-card" key={industry}>
                  <Icon aria-hidden="true" size={18} />
                  <span>{industry}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-clients">
        <div className="container split-grid">
          <div>
            <h2>
              {home.clientsTitleBefore}
              <span>{home.clientsTitleAccent}</span>
            </h2>
          </div>
          <div className="client-list">
            {content.clientTypes.map((client) => (
              <div key={client}>{client}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-results" id="results">
        <div className="container">
          <div className="section-heading">
            <h2>
              {home.resultsTitleBefore}
              <span>{home.resultsTitleAccent}</span>
            </h2>
          </div>
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

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>{content.resultsPage.caseStudiesTitle}</h2>
            <p>{content.resultsPage.caseStudiesText}</p>
          </div>
          <CaseStudyShowcase
            items={content.caseStudies}
            locale={locale}
            needLabel={content.resultsPage.caseStudyNeedLabel}
            responseLabel={content.resultsPage.caseStudyResponseLabel}
            viewLabel={content.resultsPage.caseStudyCta}
          />
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <div className="section-heading">
            <h2>{content.resultsPage.portfolioTitle}</h2>
            <p>{content.resultsPage.portfolioText}</p>
          </div>
          <PortfolioShowcase
            items={content.portfolioItems}
            locale={locale}
            viewLabel={content.resultsPage.portfolioCta}
          />
          <ProofGalleryShowcase items={content.proofGalleryItems.slice(0, 4)} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>{content.resultsPage.testimonialsTitle}</h2>
            <p>{content.resultsPage.testimonialsText}</p>
          </div>
          <TestimonialShowcase testimonials={content.testimonialSlots} />
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <div className="section-heading">
            <h2>{content.resultsPage.credentialsTitle}</h2>
            <p>{content.resultsPage.credentialsText}</p>
          </div>
          <TrustCredentialStrip credentials={content.trustCredentials} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>{content.resultsPage.complianceTitle}</h2>
            <p>{content.resultsPage.complianceText}</p>
          </div>
          <ComplianceShowcase points={content.compliancePoints} />
        </div>
      </section>

      <section className="section section-ugc" id="video-content">
        <div className="container">
          <div className="section-heading">
            <h2>{home.reelsTitle}</h2>
            <p>{home.reelsText}</p>
          </div>
          <UgcVideoShowcase videos={home.ugcVideos} />
          <div className="hero-actions">
            <a
              className="button button-secondary"
              href={instagramProfileUrl}
              rel="noreferrer"
              target="_blank"
            >
              {home.reelsProfileCta} <ExternalLink aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section section-contact" id="contact">
        <div className="container lead-contact-grid">
          <div>
            <p className="eyebrow">{home.contactEyebrow}</p>
            <h2>
              {home.contactTitleBefore}
              <span>{home.contactTitleAccent}</span>
            </h2>
            <p>{home.contactCopy}</p>
            <ul className="check-list contact-points">
              {content.trustMarkers.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <form
            className="lead-form"
            action={`mailto:${content.site.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="form-row">
              <label>
                {home.form.fullName}
                <input name="name" placeholder={home.form.fullNamePlaceholder} required />
              </label>
              <label>
                {home.form.phone}
                <input name="phone" placeholder={home.form.phonePlaceholder} required />
              </label>
            </div>
            <label>
              {home.form.businessName}
              <input name="business" placeholder={home.form.businessNamePlaceholder} />
            </label>
            <label>
              {home.form.email}
              <input name="email" type="email" placeholder={home.form.emailPlaceholder} />
            </label>
            <label>
              {home.form.location}
              <input name="location" placeholder={home.form.locationPlaceholder} />
            </label>
            <label>
              {home.form.lookingFor}
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  {home.form.selectService}
                </option>
                {content.services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <div className="form-row">
              <label>
                {home.form.timeline}
                <select name="timeline" defaultValue="">
                  <option value="" disabled>
                    {home.form.selectTimeline}
                  </option>
                  {home.form.timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                {home.form.budget}
                <select name="budget" defaultValue="">
                  <option value="" disabled>
                    {home.form.selectBudget}
                  </option>
                  {home.form.budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="radio-group" aria-label={home.form.preferredContact}>
              <span>{home.form.preferredContact}</span>
              {home.form.preferredContactOptions.map((option, index) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="preferred_contact"
                    value={option}
                    defaultChecked={index === 0}
                  />
                  {option}
                </label>
              ))}
            </div>
            <label>
              {home.form.message}
              <textarea name="message" placeholder={home.form.messagePlaceholder} />
            </label>
            <button className="button button-primary" type="submit">
              {home.form.submit} <Send aria-hidden="true" size={16} />
            </button>
          </form>
        </div>
      </section>

      <section className="section section-final">
        <div className="container final-card">
          <div className="final-brand-lockup" aria-label={content.site.name}>
            <Image
              src="/images/chaitanya-media-icon.png"
              alt=""
              width={56}
              height={56}
              className="final-brand-mark"
            />
            <div className="final-brand-copy">
              <span className="final-brand-name">
                Chaitanya <strong>Media</strong>
              </span>
              <small>{content.site.tagline}</small>
            </div>
          </div>
          <h2>
            {home.finalTitleBefore}
            <span>{home.finalTitleAccent}</span>
          </h2>
          <p>{home.finalCopy}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${content.site.phone}`}>
              {home.finalPhoneCta}
            </a>
            <a className="button button-secondary" href={content.site.whatsapp}>
              <MessageCircle aria-hidden="true" size={17} />
              {home.finalWhatsappCta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
