import { kpis } from "@/content/home";

export function KpiCards() {
  return (
    <section id="impact" className="section-shell py-12 md:py-16">
      <h2 className="section-title">Delivery at National and Enterprise Scale</h2>
      <p className="section-lead">Demonstrated outcomes across public-sector transformation and secure operational environments.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="rounded-2xl border border-brand-border bg-white p-6 shadow-card">
            <p className="font-mono text-xs uppercase tracking-wide text-brand-steel">{kpi.label}</p>
            <p className="mt-3 font-heading text-3xl font-extrabold text-brand-navy">{kpi.value}</p>
            <p className="mt-2 text-sm text-brand-steel">{kpi.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
