import type {Metadata} from "next";
import {DM_Sans, Noto_Sans_Devanagari} from "next/font/google";
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
import {getContent, localizedAbsoluteUrl, siteBase} from "@/lib/site";
import {organizationJsonLd, websiteJsonLd} from "@/lib/structured-data";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const headingFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const devanagariFont = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  weight: ["400", "500", "600", "700"],
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
      languages: Object.fromEntries([
        ["x-default", localizedAbsoluteUrl(routing.defaultLocale, "/")],
        ...routing.locales.map((item) => [htmlLangByLocale[item], localizedAbsoluteUrl(item, "/")])
      ])
    },
    icons: {
      icon: [
        {url: "/favicon.ico", sizes: "any"},
        {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"},
        {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
        {url: "/favicon-48x48.png", sizes: "48x48", type: "image/png"},
        {url: "/icon-192x192.png", sizes: "192x192", type: "image/png"},
        {url: "/icon-512x512.png", sizes: "512x512", type: "image/png"}
      ],
      shortcut: "/favicon.ico",
      apple: [{url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png"}]
    },
    manifest: "/site.webmanifest"
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

  const organizationSchema = organizationJsonLd(locale, content);
  const websiteSchema = websiteJsonLd(locale, content);

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
