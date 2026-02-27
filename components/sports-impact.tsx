import { sportsImpact } from "@/content/sports";

export function SportsImpact() {
  return (
    <section id="sports-impact" className="section-shell py-14 md:py-20">
      <h2 className="section-title">{sportsImpact.title}</h2>
      <p className="section-lead">{sportsImpact.subtitle}</p>
      <p className="mt-5 max-w-4xl text-sm leading-relaxed text-brand-ink md:text-base">
        {sportsImpact.summary}
      </p>

      <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-brand-ink md:text-base">
        {sportsImpact.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
