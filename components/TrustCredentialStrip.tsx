import {BadgeCheck} from "lucide-react";
import type {TrustCredential} from "@/lib/site";

type TrustCredentialStripProps = {
  credentials: TrustCredential[];
};

export function TrustCredentialStrip({credentials}: TrustCredentialStripProps) {
  return (
    <div className="trust-credential-grid">
      {credentials.map((credential) => (
        <article className="trust-credential-card" key={credential.label}>
          <BadgeCheck aria-hidden="true" size={20} />
          <div>
            <h3>{credential.label}</h3>
            <p>{credential.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
