"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import {
  localeLabels,
  localeShortLabels,
  routing,
  type AppLocale
} from "@/i18n/routing";

function switchLocalePath(pathname: string, targetLocale: AppLocale) {
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (routing.locales.includes(firstSegment as AppLocale)) {
    segments[1] = targetLocale;
  } else {
    segments.splice(1, 0, targetLocale);
  }

  const nextPath = segments.join("/") || `/${targetLocale}`;
  return nextPath.endsWith("/") ? nextPath : `${nextPath}/`;
}

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const currentLocale = useLocale() as AppLocale;
  const t = useTranslations("LanguageSwitcher");

  return (
    <div className="language-switcher" aria-label={t("label")}>
      <div>
        {routing.locales.map((locale) => (
          <Link
            aria-current={locale === currentLocale ? "page" : undefined}
            aria-label={localeLabels[locale]}
            href={switchLocalePath(pathname, locale)}
            key={locale}
          >
            {localeShortLabels[locale]}
          </Link>
        ))}
      </div>
    </div>
  );
}
