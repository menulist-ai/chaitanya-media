"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ChevronDown, Phone} from "lucide-react";
import {MobileNav} from "@/components/MobileNav";
import {localePath, type AppLocale, type SiteContent} from "@/lib/site";

type HeaderProps = {
  content: SiteContent;
  locale: AppLocale;
};

export function Header({content, locale}: HeaderProps) {
  const [isServicesDismissed, setIsServicesDismissed] = useState(false);
  const serviceBySlug = new Map(content.services.map((service) => [service.slug, service]));
  const allServicesLabel =
    content.footer.resourceLinks.find((link) => link.href === "/services/")?.label || content.footer.servicesHeading;
  const closeDesktopServices = () => setIsServicesDismissed(true);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href={localePath(locale, "/")} aria-label={content.header.ariaHome}>
          <Image
            src="/images/chaitanya-media-icon.png"
            alt={content.site.name}
            width={64}
            height={64}
            className="brand-logo"
            priority
          />
          <span className="brand-wordmark" aria-hidden="true">
            Chaitanya <strong>Media</strong>
          </span>
        </Link>

        <div className="desktop-nav">
          {content.navItems.map((item) => {
            const isServicesItem = item.href === "/services/";

            if (!isServicesItem) {
              return (
                <Link className="desktop-nav-link" key={item.href} href={localePath(locale, item.href)}>
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                className="desktop-nav-item desktop-services-nav"
                data-dismissed={isServicesDismissed ? "true" : "false"}
                key={item.href}
                onFocus={() => setIsServicesDismissed(false)}
              >
                <Link
                  aria-haspopup="true"
                  aria-expanded={isServicesDismissed ? "false" : undefined}
                  className="desktop-nav-link desktop-services-trigger"
                  href={localePath(locale, item.href)}
                  onClick={closeDesktopServices}
                  onPointerEnter={() => setIsServicesDismissed(false)}
                >
                  {item.label}
                  <ChevronDown aria-hidden="true" size={14} />
                </Link>
                <div className="desktop-services-panel" aria-label={content.home.serviceStackTitle}>
                  <div className="desktop-services-grid">
                    {content.home.serviceGroups.map((group) => (
                      <section className="desktop-service-group" key={group.title}>
                        <h3>
                          <Link href={localePath(locale, `/services/${group.slug}/`)} onClick={closeDesktopServices}>
                            {group.title}
                          </Link>
                        </h3>
                        <p>{group.text}</p>
                        <div className="desktop-service-links">
                          {group.slugs.map((slug) => {
                            const service = serviceBySlug.get(slug);

                            if (!service) {
                              return null;
                            }

                            return (
                              <Link
                                href={localePath(locale, `/services/${service.slug}/`)}
                                key={service.slug}
                                onClick={closeDesktopServices}
                              >
                                {service.title}
                              </Link>
                            );
                          })}
                        </div>
                      </section>
                    ))}
                  </div>
                  <Link
                    className="desktop-services-all"
                    href={localePath(locale, "/services/")}
                    onClick={closeDesktopServices}
                  >
                    {allServicesLabel}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="nav-actions">
          <a className="nav-cta" href={localePath(locale, "/#contact")}>
            <Phone aria-hidden="true" size={16} />
            {content.header.consultation}
          </a>

          <MobileNav
            locale={locale}
            allServicesLabel={allServicesLabel}
            menuLabel={content.header.menu}
            navItems={content.navItems}
            serviceGroups={content.home.serviceGroups}
            services={content.services}
            shortName={content.site.shortName}
            whatsappHref={content.site.whatsapp}
            whatsappLabel={content.header.whatsapp}
          />
        </div>
      </nav>
    </header>
  );
}
