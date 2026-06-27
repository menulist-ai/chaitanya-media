"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight, ChevronDown, LayoutGrid, MessageCircle, Phone} from "lucide-react";
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
                  <Link
                    className="desktop-services-overview"
                    href={localePath(locale, "/services/")}
                    onClick={closeDesktopServices}
                  >
                    <span className="desktop-services-overview-icon" aria-hidden="true">
                      <LayoutGrid size={22} strokeWidth={2.1} />
                    </span>
                    <span className="desktop-services-overview-copy">
                      <strong>{allServicesLabel}</strong>
                      <span>{content.home.serviceStackTitle}</span>
                    </span>
                    <ArrowRight aria-hidden="true" className="desktop-services-overview-arrow" size={24} />
                  </Link>

                  <div className="desktop-services-layout">
                    <section className="desktop-services-goals" aria-labelledby="desktop-services-goals-title">
                      <span className="desktop-services-kicker" id="desktop-services-goals-title">
                        {content.home.serviceStackEyebrow}
                      </span>
                      <div className="desktop-service-goal-list">
                        {content.home.serviceGroups.map((group) => (
                          <Link
                            className="desktop-service-goal"
                            href={localePath(locale, `/services/${group.slug}/`)}
                            key={group.title}
                            onClick={closeDesktopServices}
                          >
                            <span className="desktop-service-goal-marker" aria-hidden="true" />
                            <strong>{group.title}</strong>
                            <ArrowRight
                              aria-hidden="true"
                              className="desktop-service-goal-arrow"
                              size={15}
                              strokeWidth={2.2}
                            />
                          </Link>
                        ))}
                      </div>
                    </section>

                    <section className="desktop-services-index" aria-labelledby="desktop-services-index-title">
                      <span className="desktop-services-kicker" id="desktop-services-index-title">
                        {content.footer.servicesHeading}
                      </span>
                      <div className="desktop-service-clusters">
                        {content.home.serviceGroups.map((group) => (
                          <div className="desktop-service-cluster" key={group.title}>
                            <h3>{group.title}</h3>
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
                          </div>
                        ))}
                      </div>
                    </section>

                    <aside className="desktop-services-help" aria-label={content.header.consultation}>
                      <span className="desktop-services-help-icon" aria-hidden="true">
                        <MessageCircle size={22} strokeWidth={2.1} />
                      </span>
                      <h3>
                        {content.home.contactTitleBefore}
                        <span>{content.home.contactTitleAccent}</span>
                      </h3>
                      <p>{content.home.contactCopy}</p>
                      <div className="desktop-services-help-points" aria-hidden="true">
                        {content.home.heroServiceHighlights.slice(0, 4).map((highlight) => (
                          <span key={highlight.slug}>{highlight.label}</span>
                        ))}
                      </div>
                      <div className="desktop-services-help-actions">
                        <a href={content.site.whatsapp} onClick={closeDesktopServices}>
                          {content.header.whatsapp}
                        </a>
                        <Link href={localePath(locale, "/#contact")} onClick={closeDesktopServices}>
                          {content.header.consultation}
                        </Link>
                      </div>
                    </aside>
                  </div>
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
