import {
  createLegalPageMetadata,
  LocalizedLegalPage,
  type LocaleRouteProps
} from "@/components/LocalizedLegalPage";

export function generateMetadata({params}: LocaleRouteProps) {
  return createLegalPageMetadata("terms", params);
}

export default function TermsPage({params}: LocaleRouteProps) {
  return <LocalizedLegalPage params={params} slug="terms" />;
}
