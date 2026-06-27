import {
  createLegalPageMetadata,
  LocalizedLegalPage,
  type LocaleRouteProps
} from "@/components/LocalizedLegalPage";

export function generateMetadata({params}: LocaleRouteProps) {
  return createLegalPageMetadata("disclaimer", params);
}

export default function DisclaimerPage({params}: LocaleRouteProps) {
  return <LocalizedLegalPage params={params} slug="disclaimer" />;
}
