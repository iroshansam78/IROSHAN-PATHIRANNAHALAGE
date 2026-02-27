import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { caseStudies } from "@/content/case-studies";

type Params = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return {};
  const title = `${study.title} | Case Study`;
  return {
    title,
    description: study.context,
    openGraph: {
      title,
      description: study.context,
      images: ["/og-image.png"]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.context,
      images: ["/og-image.png"]
    }
  };
}

export default function CaseStudyDetailPage({ params }: Params) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) notFound();

  return (
    <>
      <Navbar />
      <main className="section-shell py-14 md:py-20">
        <Link href="/case-studies" className="text-sm font-semibold text-brand-teal hover:underline">
          ← Back to Case Studies
        </Link>
        <article className="mt-5 rounded-2xl border border-brand-border bg-white p-7 shadow-card">
          <h1 className="section-title">{study.title}</h1>
          <p className="section-lead">{study.context}</p>

          <p className="mt-5 text-sm text-brand-steel"><span className="font-semibold text-brand-navy">Role:</span> {study.role}</p>
          {study.scale ? <p className="text-sm text-brand-steel"><span className="font-semibold text-brand-navy">Scale:</span> {study.scale}</p> : null}
          <p className="mt-2 text-sm text-brand-steel"><span className="font-semibold text-brand-navy">Stakeholders:</span> {study.stakeholders}</p>

          <h2 className="mt-6 font-heading text-xl font-bold text-brand-navy">Key Outcomes</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-brand-ink">
            {study.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-6 font-heading text-xl font-bold text-brand-navy">Delivery Approach</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-brand-ink">
            {study.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-6 font-heading text-xl font-bold text-brand-navy">Artifacts</h2>
          {study.artifacts === "screenshots_placeholder" ? (
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="h-24 rounded-lg border border-dashed border-brand-border bg-brand-mist p-3 text-xs text-brand-steel">Screenshot placeholder</div>
              <div className="h-24 rounded-lg border border-dashed border-brand-border bg-brand-mist p-3 text-xs text-brand-steel">Architecture view placeholder</div>
              <div className="h-24 rounded-lg border border-dashed border-brand-border bg-brand-mist p-3 text-xs text-brand-steel">Workflow placeholder</div>
            </div>
          ) : (
            <p className="mt-3 text-sm text-brand-ink">Detailed artifacts are available on request. Use the contact form to request a demo briefing.</p>
          )}

          <p className="mt-6 text-xs text-brand-steel">{study.safeNote}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
