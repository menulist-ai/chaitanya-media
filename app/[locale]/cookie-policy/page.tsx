import {
  createLegalPageMetadata,
  LocalizedLegalPage,
  type LocaleRouteProps
} from "@/components/LocalizedLegalPage";

export function generateMetadata({params}: LocaleRouteProps) {
  return createLegalPageMetadata("cookie-policy", params);
}

export default function CookiePolicyPage({params}: LocaleRouteProps) {
  return <LocalizedLegalPage params={params} slug="cookie-policy" />;
}
