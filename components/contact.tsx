import { contactCopy } from "@/content/contact";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="section-shell py-14 md:py-20">
      <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-card md:p-10">
        <h2 className="section-title">{contactCopy.title}</h2>
        <p className="section-lead">{contactCopy.subtitle}</p>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-brand-ink md:text-base">{contactCopy.body}</p>
        <div className="mt-6 space-y-2 text-sm text-brand-steel">
          <p>{contactCopy.availability}</p>
          <p>{contactCopy.response}</p>
          <p>{contactCopy.privacy}</p>
          <p>
            Email: <a className="font-medium text-brand-navy hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>Phone: {site.phone}</p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="rounded-xl bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-steel">
            {contactCopy.primaryCta}
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-brand-border px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-mist">
            {contactCopy.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
