import { experience } from "@/content/experience";

export function Timeline() {
  return (
    <section id="experience" className="section-shell py-14 md:py-20">
      <h2 className="section-title">Experience Timeline</h2>
      <p className="section-lead">Progressive leadership across national delivery, enterprise IT, and governance-led execution.</p>
      <div className="mt-8 space-y-5">
        {experience.map((item) => (
          <article key={`${item.period}-${item.title}`} className="rounded-2xl border border-brand-border bg-white p-6 shadow-card">
            <p className="font-mono text-xs uppercase tracking-wide text-brand-steel">{item.period}</p>
            <h3 className="mt-2 font-heading text-xl font-bold text-brand-navy">{item.title}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-ink md:text-base">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
