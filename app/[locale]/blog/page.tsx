import Link from "next/link";
import {ArrowRight, Megaphone} from "lucide-react";
import {setRequestLocale} from "next-intl/server";
import {SectionIntro} from "@/components/SectionIntro";
import {createMetadata} from "@/lib/seo";
import {getContent, getLocale, localePath} from "@/lib/site";

type BlogPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({params}: BlogPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);

  return createMetadata({
    title: content.blogPage.metaTitle,
    description: content.blogPage.metaDescription,
    path: "/blog/",
    locale
  });
}

export default async function BlogPage({params}: BlogPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const copy = content.blogPage;
  const categories = Array.from(new Set(content.blogPosts.map((post) => post.category)));
  setRequestLocale(locale);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="hero-copy">{copy.copy}</p>
        </div>
      </section>

      <section className="section section-industries">
        <div className="container">
          <SectionIntro eyebrow={copy.topicsEyebrow} title={copy.topicsTitle} />
          <div className="credentials-list">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <SectionIntro
            eyebrow={copy.articlesEyebrow}
            title={copy.articlesTitle}
            text={copy.articlesText}
          />
          <div className="article-list">
            {content.blogPosts.map((post) => (
              <Link className="blog-card" href={localePath(locale, `/blog/${post.slug}/`)} key={post.slug}>
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <strong>
                  {copy.readArticle} <ArrowRight aria-hidden="true" size={16} />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-why">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">{copy.editorialEyebrow}</p>
            <h2>{copy.editorialTitle}</h2>
            <p>{copy.editorialText}</p>
          </div>
          <div className="warning-list">
            {copy.editorialPoints.map((item) => (
              <div className="warning-item" key={item}>
                <Megaphone aria-hidden="true" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
