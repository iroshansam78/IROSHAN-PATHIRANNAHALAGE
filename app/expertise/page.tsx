import type { Metadata } from "next";
import { ExpertiseGrid } from "@/components/expertise-grid";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Expertise | Program Leadership, AI/Computer Vision, GIS",
  description:
    "Explore expertise in program governance, mission-critical delivery, AI/computer vision applications, and geospatial decision-support."
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main>
        <ExpertiseGrid />
      </main>
      <Footer />
    </>
  );
}
