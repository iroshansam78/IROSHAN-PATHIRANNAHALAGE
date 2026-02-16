import { affiliations, leadershipRoles, publications } from "@/content/leadership";

export function Publications() {
  return (
    <section id="leadership" className="section-shell py-14 md:py-20">
      <h2 className="section-title">Publications and Leadership Contributions</h2>
      <p className="section-lead">Contributions focused on practical technology transformation in public and secure environments.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border border-brand-border bg-white p-6 shadow-card">
          <h3 className="font-heading text-lg font-bold text-brand-navy">Selected Publications</h3>
          <ul className="mt-3 space-y-3 text-sm text-brand-ink">
            {publications.map((pub) => (
              <li key={pub.title}>
                <p className="font-medium text-brand-navy">{pub.title}</p>
                <p className="text-brand-steel">{pub.venue} | {pub.year}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-brand-border bg-white p-6 shadow-card">
          <h3 className="font-heading text-lg font-bold text-brand-navy">Leadership Roles</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand-ink">
            {leadershipRoles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-brand-border bg-white p-6 shadow-card">
          <h3 className="font-heading text-lg font-bold text-brand-navy">Affiliations</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand-ink">
            {affiliations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
