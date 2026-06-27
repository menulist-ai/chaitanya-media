"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Gem,
  Goal,
  Mail,
  Megaphone,
  MessageCircle,
  Phone,
  Radio,
  Search,
  ShoppingCart,
  Smartphone,
  Trophy,
  Users,
  Video,
  Volume2
} from "lucide-react";
import {serviceAccentClass} from "@/lib/service-accent";
import {localePath, type AppLocale, type Service} from "@/lib/site";

type ServiceGoalGroup = {
  title: string;
  text: string;
  slugs: string[];
};

type ServiceGoalStackProps = {
  groups: ServiceGoalGroup[];
  locale: AppLocale;
  note: string;
  services: Service[];
  title: string;
};

const serviceIcons = [
  Smartphone,
  Mail,
  Volume2,
  Phone,
  Radio,
  MessageCircle,
  Megaphone,
  BarChart3,
  Search,
  Goal,
  Building2,
  ShoppingCart,
  Users,
  Building2,
  Gem,
  Video,
  MessageCircle,
  Video,
  ShoppingCart,
  Megaphone,
  Trophy,
  Building2,
  Goal,
  Megaphone
];

export function ServiceGoalStack({groups, locale, note, services, title}: ServiceGoalStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-service-goal-index]"));

    if (!cards.length || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!current) {
          return;
        }

        setActiveIndex(Number((current.target as HTMLElement).dataset.serviceGoalIndex ?? 0));
      },
      {
        rootMargin: "-22% 0px -48% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8]
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="service-stack-shell">
      <aside className="service-stack-browser" aria-label={title}>
        <div className="service-stack-browser-top">
          <strong>{title}</strong>
        </div>
        <div className="service-stack-browser-body">
          {groups.map((group, index) => (
            <a
              aria-current={activeIndex === index ? "true" : undefined}
              className="service-stack-browser-row"
              href={`#service-goal-${index + 1}`}
              key={group.title}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{group.title}</strong>
              <em>{group.slugs.length}</em>
            </a>
          ))}
          <div className="service-stack-browser-note">
            <CheckCircle2 aria-hidden="true" size={17} />
            <span>{note}</span>
          </div>
        </div>
      </aside>
      <div className="service-stack-grid">
        {groups.map((group, groupIndex) => (
          <article
            className="service-group"
            data-service-goal-index={groupIndex}
            id={`service-goal-${groupIndex + 1}`}
            key={group.title}
          >
            <div className="service-group-head">
              <h3>{group.title}</h3>
              <p>{group.text}</p>
            </div>
            <div className="service-link-list">
              {group.slugs.map((slug) => {
                const service = serviceBySlug.get(slug);
                const serviceIndex = services.findIndex((item) => item.slug === slug);
                const Icon = serviceIcons[serviceIndex] ?? Megaphone;

                if (!service) {
                  return null;
                }

                return (
                  <Link
                    className={`service-mini-link ${serviceAccentClass(service.slug)}`}
                    href={localePath(locale, `/services/${service.slug}/`)}
                    key={service.slug}
                  >
                    <Icon aria-hidden="true" size={17} />
                    <span>{service.title}</span>
                    <ArrowRight aria-hidden="true" size={15} />
                  </Link>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
