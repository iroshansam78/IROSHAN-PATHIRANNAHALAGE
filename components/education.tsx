import { education } from "@/content/education";

export function Education() {
  return (
    <section className="section-shell py-14 md:py-20">
      <h2 className="section-title">Education</h2>
      <p className="section-lead">Academic foundation in computing, defence management, geoinformatics, and engineering research.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.award} className="rounded-2xl border border-brand-border bg-white p-6 shadow-card">
            <h3 className="font-heading text-lg font-bold text-brand-navy">{item.award}</h3>
            <p className="mt-2 text-sm text-brand-ink">{item.institution}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-brand-steel">{item.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
