import type { Metadata } from "next";
import { CaseStudyCards } from "@/components/case-study-cards";
import { Contact } from "@/components/contact";
import { ExpertiseGrid } from "@/components/expertise-grid";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import { Publications } from "@/components/publications";
import { SportsImpact } from "@/components/sports-impact";
import { Timeline } from "@/components/timeline";
import { executiveSummary } from "@/content/home";

export const metadata: Metadata = {
  title:
    "Iroshan Pathirannahalage | Strategic Program Leader in Government & Defence Tech",
  description:
    "Executive profile of Iroshan Pathirannahalage, a strategic program and project leader delivering mission-critical government and defence technology initiatives, including nationwide NEMIS rollout.",
  openGraph: {
    title:
      "Iroshan Pathirannahalage | Strategic Program Leader in Government & Defence Tech",
    description:
      "Executive profile of Iroshan Pathirannahalage, a strategic program and project leader delivering mission-critical government and defence technology initiatives, including nationwide NEMIS rollout.",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Iroshan Pathirannahalage | Strategic Program Leader in Government & Defence Tech",
    description:
      "Executive profile of Iroshan Pathirannahalage, a strategic program and project leader delivering mission-critical government and defence technology initiatives, including nationwide NEMIS rollout.",
    images: ["/og-image.png"]
  }
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <CaseStudyCards />

        <section className="section-shell py-12 md:py-16">
          <h2 className="section-title">{executiveSummary.title}</h2>
          <p className="section-lead">{executiveSummary.body}</p>
        </section>

        <Timeline />
        <ExpertiseGrid />
        <Publications />
        <SportsImpact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
