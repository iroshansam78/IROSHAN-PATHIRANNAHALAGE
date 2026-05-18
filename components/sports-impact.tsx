import { sportsImpact } from "@/content/sports";

export function SportsImpact() {
  return (
    <section id="sports-impact" className="section-shell py-14 md:py-20">
      <h2 className="section-title">{sportsImpact.title}</h2>
      <p className="section-lead">{sportsImpact.subtitle}</p>

      <div className="mt-5 max-w-4xl space-y-4 text-sm leading-relaxed text-brand-ink md:text-base">
        {sportsImpact.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
