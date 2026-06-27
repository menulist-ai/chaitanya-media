import Image from "next/image";
import {CheckCircle2} from "lucide-react";
import type {CampaignMaterialExample} from "@/lib/site";

type CampaignMaterialShowcaseProps = {
  examples: CampaignMaterialExample[];
  note: string;
};

export function CampaignMaterialShowcase({examples, note}: CampaignMaterialShowcaseProps) {
  return (
    <div className="campaign-material-grid">
      {examples.map((example) => (
        <article className="campaign-material-card" key={example.image}>
          <div className="campaign-material-image">
            <Image
              src={example.image}
              alt={example.alt}
              width={640}
              height={640}
              loading="eager"
              sizes="(max-width: 720px) 100vw, 420px"
            />
          </div>
          <div className="campaign-material-body">
            <span>{example.category}</span>
            <h3>{example.title}</h3>
            <ul>
              {example.points.map((point) => (
                <li key={point}>
                  <CheckCircle2 aria-hidden="true" size={16} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
      <p className="campaign-material-note">{note}</p>
    </div>
  );
}
