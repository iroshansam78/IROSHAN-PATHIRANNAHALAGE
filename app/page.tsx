import { CaseStudyCards } from "@/components/case-study-cards";
import { Contact } from "@/components/contact";
import { EndorsementPlaceholder } from "@/components/endorsement-placeholder";
import { ExpertiseGrid } from "@/components/expertise-grid";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { KpiCards } from "@/components/kpi-cards";
import { Navbar } from "@/components/navbar";
import { Publications } from "@/components/publications";
import { SportsImpact } from "@/components/sports-impact";
import { Timeline } from "@/components/timeline";
import { executiveSummary } from "@/content/home";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <KpiCards />

        <section className="section-shell py-12 md:py-16">
          <h2 className="section-title">{executiveSummary.title}</h2>
          <p className="section-lead">{executiveSummary.body}</p>
        </section>

        <Timeline />
        <CaseStudyCards />
        <ExpertiseGrid />
        <Publications />
        <SportsImpact />
        <EndorsementPlaceholder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
