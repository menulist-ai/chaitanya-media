import Image from "next/image";
import Link from "next/link";
import {Phone} from "lucide-react";
import {MobileNav} from "@/components/MobileNav";
import {localePath, type AppLocale, type SiteContent} from "@/lib/site";

type HeaderProps = {
  content: SiteContent;
  locale: AppLocale;
};

export function Header({content, locale}: HeaderProps) {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href={localePath(locale, "/")} aria-label={content.header.ariaHome}>
          <Image
            src="/images/chaitanya-media-icon.svg"
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
          {content.navItems.map((item) => (
            <Link key={item.href} href={localePath(locale, item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a className="nav-cta" href={localePath(locale, "/#contact")}>
            <Phone aria-hidden="true" size={16} />
            {content.header.consultation}
          </a>

          <MobileNav
            locale={locale}
            menuLabel={content.header.menu}
            navItems={content.navItems}
            shortName={content.site.shortName}
            whatsappHref={content.site.whatsapp}
            whatsappLabel={content.header.whatsapp}
          />
        </div>
      </nav>
    </header>
  );
}
