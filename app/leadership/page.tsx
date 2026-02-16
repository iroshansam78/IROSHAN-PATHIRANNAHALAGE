import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Publications } from "@/components/publications";
import { SportsImpact } from "@/components/sports-impact";

export const metadata: Metadata = {
  title: "Publications and Leadership | Iroshan Pathirannahalage",
  description:
    "Contributions across publications, strategic leadership roles, and professional affiliations."
};

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <Publications />
        <SportsImpact />
      </main>
      <Footer />
    </>
  );
}
