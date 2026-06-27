import Link from "next/link";
import {ArrowRight, BarChart3, Megaphone, Trophy} from "lucide-react";
import {setRequestLocale} from "next-intl/server";
import {SectionIntro} from "@/components/SectionIntro";
import {createMetadata} from "@/lib/seo";
import {getContent, getLocale, localePath} from "@/lib/site";

type AboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({params}: AboutPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);

  return createMetadata({
    title: content.aboutPage.metaTitle,
    description: content.aboutPage.metaDescription,
    path: "/about/",
    locale
  });
}

export default async function AboutPage({params}: AboutPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const copy = content.aboutPage;
  setRequestLocale(locale);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="hero-copy">{copy.copy}</p>
        </div>
      </section>

      <section className="section section-about">
        <div className="container split-grid">
          <SectionIntro eyebrow={copy.introEyebrow} title={copy.introTitle} text={copy.introText} />
          <div className="strength-stack">
            {content.agencyStrengths.map((item, index) => {
              const Icon = [BarChart3, Megaphone, Trophy][index] ?? Megaphone;
              return (
                <article className="strength-card" key={item.title}>
                  <Icon aria-hidden="true" size={22} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-final">
        <div className="container">
          <SectionIntro eyebrow={copy.finalEyebrow} title={copy.finalTitle} />
          <div className="hero-actions">
            <Link className="button button-secondary" href={localePath(locale, "/#services")}>
              {copy.servicesCta} <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a className="button button-primary" href={content.site.whatsapp}>
              {copy.whatsappCta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
