import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {setRequestLocale} from "next-intl/server";
import {createMetadata} from "@/lib/seo";
import {getContent, getLocale, localePath} from "@/lib/site";

type ThankYouPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({params}: ThankYouPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);

  return createMetadata({
    title: content.thankYouPage.metaTitle,
    description: content.thankYouPage.metaDescription,
    path: "/thank-you/",
    noIndex: true,
    locale
  });
}

export default async function ThankYouPage({params}: ThankYouPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const copy = content.thankYouPage;
  setRequestLocale(locale);

  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="hero-copy">{copy.copy}</p>
        <div className="cta-row">
          <Link className="button button-secondary" href={localePath(locale, "/")}>
            {copy.cta} <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
