import {
  createLegalPageMetadata,
  LocalizedLegalPage,
  type LocaleRouteProps
} from "@/components/LocalizedLegalPage";

export function generateMetadata({params}: LocaleRouteProps) {
  return createLegalPageMetadata("privacy-policy", params);
}

export default function PrivacyPolicyPage({params}: LocaleRouteProps) {
  return <LocalizedLegalPage params={params} slug="privacy-policy" />;
}
