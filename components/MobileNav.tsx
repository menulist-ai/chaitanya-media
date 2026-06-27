"use client";

import Link from "next/link";
import {ChevronDown, Menu, X} from "lucide-react";
import {useRef} from "react";
import {localePath, type AppLocale, type SiteContent} from "@/lib/site";

type MobileNavProps = {
  locale: AppLocale;
  allServicesLabel: string;
  menuLabel: string;
  navItems: SiteContent["navItems"];
  serviceGroups: SiteContent["home"]["serviceGroups"];
  services: SiteContent["services"];
  shortName: string;
  whatsappHref: string;
  whatsappLabel: string;
};

export function MobileNav({
  locale,
  allServicesLabel,
  menuLabel,
  navItems,
  serviceGroups,
  services,
  shortName,
  whatsappHref,
  whatsappLabel
}: MobileNavProps) {
  const mobileNavRef = useRef<HTMLDetailsElement>(null);
  const serviceBySlug = new Map(services.map((service) => [service.slug, service]));
  const closeMobileNav = () => {
    mobileNavRef.current?.removeAttribute("open");
  };

  return (
    <details className="mobile-nav" ref={mobileNavRef}>
      <summary aria-label={menuLabel}>
        <Menu aria-hidden="true" size={22} />
      </summary>
      <div className="mobile-panel" data-lenis-prevent="">
        <div className="mobile-panel-head">
          <strong>{shortName}</strong>
          <button
            type="button"
            className="mobile-panel-close"
            aria-label="Close menu"
            onClick={closeMobileNav}
          >
            <X aria-hidden="true" size={18} />
          </button>
        </div>
        {navItems.map((item) => {
          const isServicesItem = item.href === "/services/";

          if (!isServicesItem) {
            return (
              <Link key={item.href} href={localePath(locale, item.href)} onClick={closeMobileNav}>
                {item.label}
              </Link>
            );
          }

          return (
            <details className="mobile-services" key={item.href} open>
              <summary>
                <span>{item.label}</span>
                <ChevronDown aria-hidden="true" size={16} />
              </summary>
              <div className="mobile-service-groups">
                <Link className="mobile-all-services-link" href={localePath(locale, item.href)} onClick={closeMobileNav}>
                  {allServicesLabel}
                </Link>
                {serviceGroups.map((group) => (
                  <details className="mobile-service-group" key={group.title}>
                    <summary>
                      <span>{group.title}</span>
                      <ChevronDown aria-hidden="true" size={15} />
                    </summary>
                    <div className="mobile-service-links">
                      <Link
                        className="mobile-service-category-link"
                        href={localePath(locale, `/services/${group.slug}/`)}
                        onClick={closeMobileNav}
                      >
                        {group.title}
                      </Link>
                      {group.slugs.map((slug) => {
                        const service = serviceBySlug.get(slug);

                        if (!service) {
                          return null;
                        }

                        return (
                          <Link
                            href={localePath(locale, `/services/${service.slug}/`)}
                            key={service.slug}
                            onClick={closeMobileNav}
                          >
                            {service.title}
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                ))}
              </div>
            </details>
          );
        })}
        <a href={whatsappHref} onClick={closeMobileNav}>
          {whatsappLabel}
        </a>
      </div>
      <button
        type="button"
        className="mobile-drawer-backdrop"
        aria-label="Close menu"
        onClick={closeMobileNav}
      />
    </details>
  );
}
