import {ShieldCheck} from "lucide-react";
import type {CompliancePoint} from "@/lib/site";

type ComplianceShowcaseProps = {
  points: CompliancePoint[];
};

export function ComplianceShowcase({points}: ComplianceShowcaseProps) {
  return (
    <div className="compliance-grid">
      {points.map((point) => (
        <article className="compliance-card" key={point.title}>
          <ShieldCheck aria-hidden="true" size={22} />
          <h3>{point.title}</h3>
          <p>{point.text}</p>
        </article>
      ))}
    </div>
  );
}
