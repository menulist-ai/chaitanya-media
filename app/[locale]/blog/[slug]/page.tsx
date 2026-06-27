import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowRight, CalendarDays, Clock} from "lucide-react";
import {setRequestLocale} from "next-intl/server";
import {JsonLd} from "@/components/JsonLd";
import {routing} from "@/i18n/routing";
import {createMetadata} from "@/lib/seo";
import {
  blogPosts as englishBlogPosts,
  getBlogPost,
  getContent,
  getLocale,
  localePath
} from "@/lib/site";
import {articleJsonLd, breadcrumbJsonLd, webPageJsonLd} from "@/lib/structured-data";

type BlogPostPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    englishBlogPosts.map((post) => ({
      locale,
      slug: post.slug
    }))
  );
}

export async function generateMetadata({params}: BlogPostPageProps) {
  const {locale: requestedLocale, slug} = await params;
  const locale = getLocale(requestedLocale);
  const post = getBlogPost(locale, slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    locale
  });
}

export default async function BlogPostPage({params}: BlogPostPageProps) {
  const {locale: requestedLocale, slug} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const post = getBlogPost(locale, slug);
  const copy = content.blogPostPage;
  setRequestLocale(locale);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}/`;
  const articleSchema = [
    webPageJsonLd({
      locale,
      path,
      name: post.title,
      description: post.excerpt
    }),
    breadcrumbJsonLd(locale, [
      {name: content.notFoundPage.home, path: "/"},
      {name: content.blogPage.title, path: "/blog/"},
      {name: post.title, path}
    ]),
    articleJsonLd(locale, content, post)
  ];

  return (
    <>
      <JsonLd data={articleSchema} />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="hero-copy">{post.excerpt}</p>
          <div className="hero-meta">
            <span>
              <CalendarDays aria-hidden="true" size={16} />
              {post.date}
            </span>
            <span>
              <Clock aria-hidden="true" size={16} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <article className="section section-white">
        <div className="container article-body">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <section className="section section-soft">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">{copy.nextEyebrow}</p>
            <h2>{copy.nextTitle}</h2>
            <p>{copy.nextText}</p>
          </div>
          <div className="cta-row">
            <a className="button button-primary" href={content.site.whatsapp}>
              {copy.requestCta}
            </a>
            <Link className="button button-secondary" href={localePath(locale, "/blog/")}>
              {copy.moreArticles} <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
