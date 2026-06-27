import {BadgeCheck, Quote} from "lucide-react";
import type {TestimonialSlot} from "@/lib/site";

type TestimonialShowcaseProps = {
  testimonials: TestimonialSlot[];
};

export function TestimonialShowcase({testimonials}: TestimonialShowcaseProps) {
  return (
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
        <article className="testimonial-card" key={testimonial.title}>
          <Quote aria-hidden="true" size={24} />
          <span>{testimonial.audience}</span>
          <h3>{testimonial.title}</h3>
          <p>{testimonial.text}</p>
          <div>
            <BadgeCheck aria-hidden="true" size={16} />
            <strong>{testimonial.proofNeeded}</strong>
          </div>
        </article>
      ))}
    </div>
  );
}
