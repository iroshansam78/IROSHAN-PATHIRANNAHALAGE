import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "Experience | National-Scale Delivery, Enterprise IT, Secure Environments",
  description:
    "Career timeline covering enterprise IT leadership, governance, and national-scale program delivery across secure and high-accountability environments."
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main>
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
