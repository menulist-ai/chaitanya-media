import type {Metadata} from "next";
import {Inter, Inter_Tight, Noto_Sans_Devanagari} from "next/font/google";
import {notFound} from "next/navigation";
import {NextIntlClientProvider, hasLocale} from "next-intl";
import {setRequestLocale} from "next-intl/server";
import type {ReactNode} from "react";
import "lenis/dist/lenis.css";
import "../globals.css";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {JsonLd} from "@/components/JsonLd";
import {SmoothScrollProvider} from "@/components/SmoothScrollProvider";
import {ThemeProvider} from "@/components/ThemeProvider";
import {htmlLangByLocale, routing, type AppLocale} from "@/i18n/routing";
import {absoluteUrl, getContent, localizedAbsoluteUrl, siteBase} from "@/lib/site";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const headingFont = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const devanagariFont = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: LocaleLayoutProps): Promise<Metadata> {
  const {locale: requestedLocale} = await params;
  const locale = hasLocale(routing.locales, requestedLocale)
    ? (requestedLocale as AppLocale)
    : routing.defaultLocale;
  const content = getContent(locale);

  return {
    metadataBase: new URL(siteBase.url),
    title: {
      default: `${content.site.name} | ${content.servicesPage.metaTitle}`,
      template: `%s | ${content.site.name}`
    },
    description: content.site.description,
    alternates: {
      canonical: localizedAbsoluteUrl(locale, "/"),
      languages: Object.fromEntries(
        routing.locales.map((item) => [htmlLangByLocale[item], localizedAbsoluteUrl(item, "/")])
      )
    },
    icons: {
      icon: "/images/chaitanya-media-icon.svg",
      apple: "/images/chaitanya-media-icon-vector-transparent.png"
    }
  };
}

export default async function LocaleLayout({children, params}: LocaleLayoutProps) {
  const {locale: requestedLocale} = await params;

  if (!hasLocale(routing.locales, requestedLocale)) {
    notFound();
  }

  const locale = requestedLocale as AppLocale;
  const content = getContent(locale);
  setRequestLocale(locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: content.site.name,
    url: localizedAbsoluteUrl(locale, "/"),
    image: absoluteUrl("/images/chaitanya-media-icon-vector-transparent.png"),
    telephone: content.site.phone,
    email: content.site.email,
    foundingDate: content.site.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN"
    },
    areaServed: ["Pune", "Shewalewadi", "Hadapsar", "Manjri", "Maharashtra", "India"],
    description: content.site.description,
    sameAs: content.socialLinks.map((link) => link.href)
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: content.site.name,
    url: localizedAbsoluteUrl(locale, "/"),
    inLanguage: htmlLangByLocale[locale]
  };

  return (
    <html lang={htmlLangByLocale[locale]} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable} ${devanagariFont.variable}`}>
        <NextIntlClientProvider>
          <ThemeProvider />
          <SmoothScrollProvider />
          <JsonLd data={[organizationSchema, websiteSchema]} />
          <Header content={content} locale={locale} />
          <main>{children}</main>
          <Footer content={content} locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
