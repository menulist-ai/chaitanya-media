import Image from "next/image";
import Link from "next/link";
import {MapPin, Phone} from "lucide-react";
import type {ComponentType, SVGProps} from "react";
import {LanguageSwitcher} from "@/components/LanguageSwitcher";
import {ThemeToggle} from "@/components/ThemeToggle";
import {localePath, type AppLocale, type SiteContent, type SocialLink} from "@/lib/site";

type FooterProps = {
  content: SiteContent;
  locale: AppLocale;
};

function InstagramBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8.2V6.7c0-.7.5-1.1 1.2-1.1h1.7V2.7A23 23 0 0 0 14.5 2c-2.4 0-4.1 1.5-4.1 4.2v2H7.7v3.3h2.7V22H14V11.5h2.8l.5-3.3H14Z" />
    </svg>
  );
}

function WhatsAppBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4.8 19.2 6 15.5a7.8 7.8 0 1 1 2.8 2.7l-4 .9Z" />
      <path d="M9.3 8.1c.2-.5.4-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.4.5c-.2.2-.2.4 0 .7.5.9 1.5 1.8 2.5 2.3.3.2.5.1.7-.1l.6-.7c.2-.2.4-.3.7-.2l1.8.8c.3.2.4.4.4.7-.1.7-.5 1.4-1.1 1.7-.6.3-1.7.3-3.2-.4-2.7-1.1-4.8-3.5-5.4-5.8-.3-1.1-.1-1.8.4-2.4Z" />
    </svg>
  );
}

export function Footer({content, locale}: FooterProps) {
  const socialIcons: Record<SocialLink["kind"], ComponentType<SVGProps<SVGSVGElement>>> = {
    instagram: InstagramBrandIcon,
    facebook: FacebookBrandIcon,
    whatsapp: WhatsAppBrandIcon
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid footer-grid-expanded">
        <div className="footer-brand">
          <Link className="footer-brand-lockup" href={localePath(locale, "/")} aria-label={content.header.ariaHome}>
            <Image
              src="/images/chaitanya-media-icon.png"
              alt={content.site.name}
              width={64}
              height={64}
            />
            <span>
              Chaitanya <strong>Media</strong>
            </span>
          </Link>
          <p>{content.footer.description}</p>
        </div>

        <div className="footer-column footer-services-column">
          <h4>{content.footer.servicesHeading}</h4>
          <div className="footer-link-grid">
            {content.services.map((service) => (
              <Link href={localePath(locale, `/services/${service.slug}/`)} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h4>{content.footer.companyHeading}</h4>
          <div className="footer-link-list">
            {content.footer.companyLinks.map((link) => (
              <Link href={localePath(locale, link.href)} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <h4 className="footer-subhead">{content.footer.resourcesHeading}</h4>
          <div className="footer-link-list">
            {content.footer.resourceLinks.map((link) => (
              <Link href={localePath(locale, link.href)} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h4>{content.footer.contactHeading}</h4>
          <ul className="contact-list">
            <li>
              <MapPin aria-hidden="true" size={16} />
              <span>{content.site.location}</span>
            </li>
            <li>
              <Phone aria-hidden="true" size={16} />
              <a href={`tel:${content.site.phone}`}>{content.site.phoneDisplay}</a>
            </li>
          </ul>

          <h4 className="footer-subhead">{content.footer.followHeading}</h4>
          <p className="footer-muted">{content.footer.followText}</p>
          <div className="social-row" aria-label={content.footer.followHeading}>
            {content.socialLinks.map((link) => {
              const Icon = socialIcons[link.kind];

              return (
                <a
                  aria-label={link.label}
                  className={`social-link social-link-${link.kind}`}
                  href={link.href}
                  key={link.kind}
                  rel="noreferrer"
                  target="_blank"
                  title={link.label}
                >
                  <Icon aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="footer-preferences">
            <LanguageSwitcher />
            <ThemeToggle lightLabel={content.header.themeLight} darkLabel={content.header.themeDark} />
          </div>
        </div>
      </div>

      <div className="legal-row">
        <span>
          © 2026 {content.site.name}. {content.footer.rights}
        </span>
        <div aria-label={content.footer.legalHeading}>
          {content.footer.legalLinks.map((link) => (
            <Link key={link.href} href={localePath(locale, link.href)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
