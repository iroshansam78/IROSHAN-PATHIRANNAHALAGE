import Image from "next/image";
import { heroOptions } from "@/content/home";
import { site } from "@/content/site";

export function Hero() {
  const primary = heroOptions[0];

  return (
    <section id="home" className="section-shell py-16 md:py-24">
      <div className="rounded-3xl bg-gradient-to-r from-brand-navy to-brand-steel p-8 text-white shadow-card md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">Executive Profile</p>
            <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight md:text-5xl">{primary.headline}</h1>
            <p className="mt-4 max-w-4xl text-base text-white/90 md:text-lg">{site.role}</p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">Project and program leader with 15+ years of delivery across government and secure operational environments.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-mist">
                Request a Consultation
              </a>
              <a href="#case-studies" className="rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                View Flagship Work
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/10 shadow-card">
              <Image
                src="/images/iroshan-profile.jpg"
                alt="Iroshan Pathirannahalage"
                width={640}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
