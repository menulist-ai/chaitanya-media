import path from "node:path";
import { fileURLToPath } from "node:url";
import createNextIntlPlugin from "next-intl/plugin";

const root = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  devIndicators: false,
  turbopack: {
    root
  },
  async redirects() {
    return [
      {
        source: "/chaitanya-suhas-jadhav/",
        destination: "/en/founder/",
        permanent: true
      },
      {
        source: "/cyber-security-website-protection/",
        destination: "/en/services/digital-marketing/",
        permanent: true
      },
      {
        source: "/security/",
        destination: "/en/",
        permanent: true
      },
      {
        source: "/seo/",
        destination: "/en/services/seo-services/",
        permanent: true
      },
      {
        source: "/proof-of-power/",
        destination: "/en/results/",
        permanent: true
      },
      {
        source: "/privacy-policy-2/",
        destination: "/en/privacy-policy/",
        permanent: true
      },
      {
        source: "/terms-conditions-chaitanya-digital-solutions/",
        destination: "/en/terms/",
        permanent: true
      },
      {
        source: "/disclaimer-chaitanya-digital-solutions/",
        destination: "/en/disclaimer/",
        permanent: true
      },
      {
        source: "/ui-ix-design/",
        destination: "/en/blog/digital-campaign-blueprint/",
        permanent: true
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          }
        ]
      }
    ];
  }
};

export default withNextIntl(nextConfig);
