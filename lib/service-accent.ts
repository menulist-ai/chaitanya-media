const websiteInfrastructureSlugs = new Set([
  "web-designing",
  "web-development",
  "digital-marketing"
]);

const seoSlugs = new Set(["seo-services", "google-meta-ads", "social-media-marketing"]);

const automationSlugs = new Set([
  "bulk-sms-marketing",
  "email-marketing",
  "voice-call-campaigns",
  "missed-call-alert",
  "ivr-solutions",
  "whatsapp-business-api",
  "content-reel-production",
  "event-wedding-digital-invitations",
  "school-admission-campaigns",
  "customized-advertising"
]);

const securitySlugs = new Set([
  "real-estate-marketing",
  "retail-local-business-marketing",
  "election-management",
  "election-software-management",
  "booth-survey-voter-analysis",
  "voter-slip-booth-kit",
  "led-van-video-campaigns",
  "print-media-design",
  "election-material-supply"
]);

export function serviceAccentClass(slug: string) {
  if (websiteInfrastructureSlugs.has(slug)) {
    return "service-accent-website";
  }

  if (seoSlugs.has(slug)) {
    return "service-accent-seo";
  }

  if (securitySlugs.has(slug)) {
    return "service-accent-security";
  }

  if (automationSlugs.has(slug)) {
    return "service-accent-automation";
  }

  return "service-accent-premium";
}
