import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | NEMIS Rollout, Secure IT Delivery, Applied AI/GIS",
  description:
    "Read case studies on national education system rollout, secure enterprise IT modernization, and applied AI/GIS decision-support outcomes.",
  openGraph: {
    title: "Case Studies | NEMIS Rollout, Secure IT Delivery, Applied AI/GIS",
    description:
      "Read case studies on national education system rollout, secure enterprise IT modernization, and applied AI/GIS decision-support outcomes.",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | NEMIS Rollout, Secure IT Delivery, Applied AI/GIS",
    description:
      "Read case studies on national education system rollout, secure enterprise IT modernization, and applied AI/GIS decision-support outcomes.",
    images: ["/og-image.png"]
  }
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="section-shell py-14 md:py-20">
        <h1 className="section-title">Case Studies in High-Impact Delivery</h1>
        <p className="section-lead">Each case reflects a governance-first approach to complex execution while maintaining stakeholder trust and operational continuity.</p>
        <div className="mt-8 space-y-6">
          {caseStudies.map((study) => (
            <article key={study.slug} className="rounded-2xl border border-brand-border bg-white p-7 shadow-card">
              <h2 className="font-heading text-2xl font-bold text-brand-navy">{study.title}</h2>
              <p className="mt-3 text-brand-ink">{study.context}</p>
              <p className="mt-3 text-sm text-brand-steel"><span className="font-semibold text-brand-navy">Role:</span> {study.role}</p>
              {study.scale ? <p className="text-sm text-brand-steel"><span className="font-semibold text-brand-navy">Scale:</span> {study.scale}</p> : null}
              <p className="mt-2 text-sm text-brand-steel"><span className="font-semibold text-brand-navy">Stakeholders:</span> {study.stakeholders}</p>

              <h3 className="mt-5 font-heading text-lg font-bold text-brand-navy">Delivery Approach</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-brand-ink">
                {study.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3 className="mt-5 font-heading text-lg font-bold text-brand-navy">Outcomes</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-brand-ink">
                {study.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={`/case-studies/${study.slug}`} className="mt-5 inline-block text-sm font-semibold text-brand-teal hover:underline">
                View details
              </Link>
              <p className="mt-5 text-xs text-brand-steel">{study.safeNote}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
