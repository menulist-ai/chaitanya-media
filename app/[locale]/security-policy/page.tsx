import {
  createLegalPageMetadata,
  LocalizedLegalPage,
  type LocaleRouteProps
} from "@/components/LocalizedLegalPage";

export function generateMetadata({params}: LocaleRouteProps) {
  return createLegalPageMetadata("security-policy", params);
}

export default function SecurityPolicyPage({params}: LocaleRouteProps) {
  return <LocalizedLegalPage params={params} slug="security-policy" />;
}
