export function ProofStrip() {
  return (
    <section id="impact" className="section-shell -mt-6 pb-6 md:-mt-8 md:pb-10">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "National-scale delivery", value: "10,000+ schools" },
          { label: "Large user base", value: "4.2M students" },
          { label: "Systems delivered", value: "100+ applications" }
        ].map((item) => (
          <article
            key={item.label}
            className="rounded-xl border border-brand-border bg-white p-4 shadow-card"
          >
            <p className="text-xs font-mono uppercase tracking-wide text-brand-steel">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-heading font-bold text-brand-navy">
              {item.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
