import Image from "next/image";
import {BadgeCheck, BarChart3, Megaphone} from "lucide-react";
import {setRequestLocale} from "next-intl/server";
import {JsonLd} from "@/components/JsonLd";
import {SectionIntro} from "@/components/SectionIntro";
import {createMetadata} from "@/lib/seo";
import {absoluteUrl, getContent, getLocale, localizedAbsoluteUrl} from "@/lib/site";

type FounderPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({params}: FounderPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);

  return createMetadata({
    title: content.founderPage.metaTitle,
    description: content.founderPage.metaDescription,
    path: "/founder/",
    locale
  });
}

export default async function FounderPage({params}: FounderPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const copy = content.founderPage;
  setRequestLocale(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.site.name,
    url: localizedAbsoluteUrl(locale, "/"),
    logo: absoluteUrl("/images/chaitanya-media-icon-vector-transparent.png"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN"
    }
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="hero-copy">{copy.copy}</p>
        </div>
      </section>

      <section className="section section-about">
        <div className="container split-grid">
          <div>
            <div className="founder-logo-proof" aria-label={content.site.name}>
              <Image
                src="/images/chaitanya-media-icon.svg"
                alt=""
                width={104}
                height={104}
                priority
              />
              <span>
                Chaitanya <strong>Media</strong>
              </span>
            </div>
          </div>
          <div>
            <p className="eyebrow">{copy.positioningEyebrow}</p>
            <h2>{copy.positioningTitle}</h2>
            <p style={{color: "var(--muted)", marginTop: 16}}>{copy.positioningText}</p>
            <div className="credentials-list">
              {content.trustMarkers.map((marker) => (
                <span key={marker}>{marker}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-industries">
        <div className="container">
          <SectionIntro eyebrow={copy.proofEyebrow} title={copy.proofTitle} />
          <div className="feature-grid">
            {copy.proofCards.map((card, index) => {
              const Icon = [BarChart3, Megaphone, BadgeCheck][index] ?? BadgeCheck;
              return (
                <article className="feature-card" key={card.title}>
                  <Icon aria-hidden="true" size={24} />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
