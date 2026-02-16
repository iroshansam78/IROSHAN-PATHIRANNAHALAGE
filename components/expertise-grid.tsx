import { expertiseGroups } from "@/content/expertise";

export function ExpertiseGrid() {
  return (
    <section id="expertise" className="section-shell py-14 md:py-20">
      <h2 className="section-title">Core Expertise</h2>
      <p className="section-lead">Leadership depth across program delivery, enterprise systems, applied AI, and geospatial intelligence.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {expertiseGroups.map((group) => (
          <article key={group.title} className="rounded-2xl border border-brand-border bg-white p-6 shadow-card">
            <h3 className="font-heading text-lg font-bold text-brand-navy">{group.title}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand-ink">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
