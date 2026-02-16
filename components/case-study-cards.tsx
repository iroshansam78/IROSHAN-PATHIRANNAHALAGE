import { caseStudies } from "@/content/case-studies";

export function CaseStudyCards() {
  return (
    <section id="case-studies" className="section-shell py-14 md:py-20">
      <h2 className="section-title">Flagship Case Studies</h2>
      <p className="section-lead">Governance-first execution across national systems, secure enterprise delivery, and applied AI/GIS operations.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <article key={study.slug} className="flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-card">
            <h3 className="font-heading text-xl font-bold text-brand-navy">{study.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-ink">{study.context}</p>
            <p className="mt-3 text-sm text-brand-steel"><span className="font-semibold text-brand-navy">Role:</span> {study.role}</p>
            {study.scale ? <p className="mt-1 text-sm text-brand-steel"><span className="font-semibold text-brand-navy">Scale:</span> {study.scale}</p> : null}
            <p className="mt-auto pt-4 text-xs text-brand-steel">{study.safeNote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
