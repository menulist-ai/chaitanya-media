import Image from "next/image";
import type {ProofGalleryItem} from "@/lib/site";

type ProofGalleryShowcaseProps = {
  items: ProofGalleryItem[];
};

export function ProofGalleryShowcase({items}: ProofGalleryShowcaseProps) {
  return (
    <div className="proof-gallery-grid">
      {items.map((item) => (
        <article className="proof-gallery-card" key={item.title}>
          <div className="proof-gallery-image">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          <div>
            <span>{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
