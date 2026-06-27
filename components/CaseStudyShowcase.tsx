import Link from "next/link";
import {ArrowRight, FileCheck2} from "lucide-react";
import {localePath, type AppLocale, type CaseStudyItem} from "@/lib/site";

type CaseStudyShowcaseProps = {
  items: CaseStudyItem[];
  locale: AppLocale;
  needLabel: string;
  responseLabel: string;
  viewLabel: string;
};

export function CaseStudyShowcase({
  items,
  locale,
  needLabel,
  responseLabel,
  viewLabel
}: CaseStudyShowcaseProps) {
  return (
    <div className="case-study-grid">
      {items.map((item) => (
        <article className="case-study-card" key={item.title}>
          <div className="case-study-card-head">
            <FileCheck2 aria-hidden="true" size={22} />
            <span>{item.category}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <dl>
            <div>
              <dt>{needLabel}</dt>
              <dd>{item.challenge}</dd>
            </div>
            <div>
              <dt>{responseLabel}</dt>
              <dd>{item.response}</dd>
            </div>
          </dl>
          <div className="case-study-footer">
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
