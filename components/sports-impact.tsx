import fs from "node:fs";
import path from "node:path";
import { sportsImpact } from "@/content/sports";

export function SportsImpact() {
  const imageCards = sportsImpact.images.map((image) => {
    const filePath = path.join(process.cwd(), "public", image.src);
    return {
      ...image,
      exists: fs.existsSync(filePath)
    };
  });

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

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {imageCards.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card"
          >
            {image.exists ? (
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover"
              />
            ) : (
              <div className="flex h-64 w-full items-center justify-center bg-brand-mist p-6 text-center text-sm text-brand-steel">
                Add image file:
                <br />
                <span className="font-mono text-xs text-brand-navy">{`public${image.src}`}</span>
              </div>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
