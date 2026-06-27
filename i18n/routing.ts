import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "mr", "hi"],
  defaultLocale: "en",
  localePrefix: "always"
});

export type AppLocale = (typeof routing.locales)[number];

export const localeLabels: Record<AppLocale, string> = {
  en: "English",
  mr: "मराठी",
  hi: "हिन्दी"
};

export const localeShortLabels: Record<AppLocale, string> = {
  en: "EN",
  mr: "MR",
  hi: "HI"
};

export const languageLabels: Record<AppLocale, string> = {
  en: "Language",
  mr: "भाषा",
  hi: "भाषा"
};

export const htmlLangByLocale: Record<AppLocale, string> = {
  en: "en-IN",
  mr: "mr-IN",
  hi: "hi-IN"
};
