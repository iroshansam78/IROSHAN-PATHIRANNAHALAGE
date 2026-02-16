import { heroOptions } from "@/content/home";
import { site } from "@/content/site";

export function Hero() {
  const primary = heroOptions[0];

  return (
    <section id="home" className="section-shell py-16 md:py-24">
      <div className="rounded-3xl bg-gradient-to-r from-brand-navy to-brand-steel p-8 text-white shadow-card md:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">Executive Profile</p>
        <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight md:text-5xl">{primary.headline}</h1>
        <p className="mt-4 max-w-4xl text-base text-white/90 md:text-lg">{site.role}</p>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">Project and program leader with 15+ years of delivery across government and secure operational environments. Currently leading nationwide NEMIS rollout across 10,000+ schools and onboarding at scale for 240,000 teachers, 4.2M students, and 15,000 administrative officers.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-mist">
            {primary.cta}
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
