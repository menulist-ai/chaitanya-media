import {Mail, MessageCircle, Phone, ShieldAlert} from "lucide-react";
import {setRequestLocale} from "next-intl/server";
import {SectionIntro} from "@/components/SectionIntro";
import {createMetadata} from "@/lib/seo";
import {getContent, getLocale} from "@/lib/site";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({params}: ContactPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);

  return createMetadata({
    title: content.contactPage.metaTitle,
    description: content.contactPage.metaDescription,
    path: "/contact/",
    locale
  });
}

export default async function ContactPage({params}: ContactPageProps) {
  const {locale: requestedLocale} = await params;
  const locale = getLocale(requestedLocale);
  const content = getContent(locale);
  const copy = content.contactPage;
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

      <section className="section section-contact">
        <div className="container">
          <SectionIntro eyebrow={copy.fastEyebrow} title={copy.fastTitle} text={copy.fastText} />
          <div className="contact-grid">
            <a className="contact-card" href={content.site.whatsapp}>
              <MessageCircle aria-hidden="true" size={24} />
              <h3>{copy.cards.whatsappTitle}</h3>
              <p>{copy.cards.whatsappText}</p>
            </a>
            <a className="contact-card" href={`tel:${content.site.phone}`}>
              <Phone aria-hidden="true" size={24} />
              <h3>{content.site.phoneDisplay}</h3>
              <p>{copy.cards.phoneText}</p>
            </a>
            <a className="contact-card" href={`mailto:${content.site.email}`}>
              <Mail aria-hidden="true" size={24} />
              <h3>{copy.cards.emailTitle}</h3>
              <p>{copy.cards.emailText}</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-why">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">{copy.requestEyebrow}</p>
            <h2>{copy.requestTitle}</h2>
            <p>{copy.requestText}</p>
            <div className="alert-panel" style={{marginTop: 24}}>
              <ShieldAlert aria-hidden="true" size={24} />
              <p>{copy.alertText}</p>
            </div>
          </div>

          <form
            className="audit-panel form-grid"
            action={`mailto:${content.site.email}`}
            method="post"
            encType="text/plain"
          >
            <label>
              {copy.form.name}
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              {copy.form.business}
              <input name="business" autoComplete="organization" />
            </label>
            <label>
              {copy.form.phone}
              <input name="phone" autoComplete="tel" required />
            </label>
            <label>
              {copy.form.email}
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label>
              {copy.form.location}
              <input name="location" autoComplete="address-level2" />
            </label>
            <label>
              {copy.form.service}
              <select name="service" defaultValue="">
                <option value="" disabled>
                  {copy.form.selectService}
                </option>
                {content.services.map((service) => (
                  <option value={service.title} key={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <div className="form-row">
              <label>
                {copy.form.timeline}
                <select name="timeline" defaultValue="">
                  <option value="" disabled>
                    {copy.form.selectTimeline}
                  </option>
                  {copy.form.timelineOptions.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                {copy.form.budget}
                <select name="budget" defaultValue="">
                  <option value="" disabled>
                    {copy.form.selectBudget}
                  </option>
                  {copy.form.budgetOptions.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="radio-group" aria-label={copy.form.preferredContact}>
              <span>{copy.form.preferredContact}</span>
              {copy.form.preferredContactOptions.map((option, index) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="preferred_contact"
                    value={option}
                    defaultChecked={index === 0}
                  />
                  {option}
                </label>
              ))}
            </div>
            <label>
              {copy.form.goal}
              <textarea name="message" required />
            </label>
            <label className="consent-check">
              <input name="safe_submission" type="checkbox" value="accepted" required />
              <span>{copy.form.consent}</span>
            </label>
            <button className="button button-primary" type="submit">
              {copy.form.submit}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
