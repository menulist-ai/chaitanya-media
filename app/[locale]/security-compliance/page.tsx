import {
  createLegalPageMetadata,
  LocalizedLegalPage,
  type LocaleRouteProps
} from "@/components/LocalizedLegalPage";

export function generateMetadata({params}: LocaleRouteProps) {
  return createLegalPageMetadata("security-compliance", params);
}

export default function SecurityCompliancePage({params}: LocaleRouteProps) {
  return <LocalizedLegalPage params={params} slug="security-compliance" />;
}
