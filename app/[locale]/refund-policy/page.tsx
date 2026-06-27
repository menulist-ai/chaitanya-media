import {
  createLegalPageMetadata,
  LocalizedLegalPage,
  type LocaleRouteProps
} from "@/components/LocalizedLegalPage";

export function generateMetadata({params}: LocaleRouteProps) {
  return createLegalPageMetadata("refund-policy", params);
}

export default function RefundPolicyPage({params}: LocaleRouteProps) {
  return <LocalizedLegalPage params={params} slug="refund-policy" />;
}
