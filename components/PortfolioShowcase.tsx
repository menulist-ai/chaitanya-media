import Link from "next/link";
import {ArrowRight, CheckCircle2} from "lucide-react";
import {localePath, type AppLocale, type PortfolioItem} from "@/lib/site";

type PortfolioShowcaseProps = {
  items: PortfolioItem[];
  locale: AppLocale;
  viewLabel: string;
};

export function PortfolioShowcase({items, locale, viewLabel}: PortfolioShowcaseProps) {
  return (
    <div className="portfolio-grid">
      {items.map((item) => (
        <article className="portfolio-card" key={item.title}>
          <div>
            <span>{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
          <ul>
            {item.points.map((point) => (
              <li key={point}>
                <CheckCircle2 aria-hidden="true" size={16} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="portfolio-card-footer">
            <em>{item.proofStatus}</em>
            <Link href={localePath(locale, item.href)}>
              {viewLabel} <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
