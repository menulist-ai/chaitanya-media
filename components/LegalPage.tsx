import type {LegalPageContent} from "@/lib/site";

type LegalPageProps = {
  eyebrow: string;
  page: LegalPageContent;
};

export function LegalPage({eyebrow, page}: LegalPageProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="hero-copy">{page.description}</p>
        </div>
      </section>
      <section className="section section-white">
        <div className="container legal-page">
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </>
  );
}
