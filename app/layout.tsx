import type { Metadata } from "next";
import "./globals.css";
import { seo, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Iroshan Pathirannahalage | Strategic Program Leader in Government & Defence Tech",
  description: site.description,
  keywords: seo.keywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Iroshan Pathirannahalage | Strategic Program Leader",
    description: site.description,
    type: "website",
    url: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
