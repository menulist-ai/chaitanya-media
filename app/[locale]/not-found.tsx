"use client";

import Link from "next/link";
import {useParams} from "next/navigation";
import {ArrowRight} from "lucide-react";
import {getLocale, getContent, localePath} from "@/lib/site";

export default function NotFound() {
  const params = useParams<{locale?: string}>();
  const locale = getLocale(params.locale);
  const copy = getContent(locale).notFoundPage;

  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="hero-copy">{copy.copy}</p>
        <div className="cta-row">
          <Link className="button button-secondary" href={localePath(locale, "/")}>
            {copy.home} <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button-secondary" href={localePath(locale, "/services/")}>
            {copy.services} <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
