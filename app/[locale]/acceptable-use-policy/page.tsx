import {
  createLegalPageMetadata,
  LocalizedLegalPage,
  type LocaleRouteProps
} from "@/components/LocalizedLegalPage";

export function generateMetadata({params}: LocaleRouteProps) {
  return createLegalPageMetadata("acceptable-use-policy", params);
}

export default function AcceptableUsePolicyPage({params}: LocaleRouteProps) {
  return <LocalizedLegalPage params={params} slug="acceptable-use-policy" />;
}
