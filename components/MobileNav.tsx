"use client";

import Link from "next/link";
import {Menu, X} from "lucide-react";
import {useRef} from "react";
import {localePath, type AppLocale, type SiteContent} from "@/lib/site";

type MobileNavProps = {
  locale: AppLocale;
  menuLabel: string;
  navItems: SiteContent["navItems"];
  shortName: string;
  whatsappHref: string;
  whatsappLabel: string;
};

export function MobileNav({
  locale,
  menuLabel,
  navItems,
  shortName,
  whatsappHref,
  whatsappLabel
}: MobileNavProps) {
  const mobileNavRef = useRef<HTMLDetailsElement>(null);
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
        {navItems.map((item) => (
          <Link key={item.href} href={localePath(locale, item.href)} onClick={closeMobileNav}>
            {item.label}
          </Link>
        ))}
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
