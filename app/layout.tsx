import type { Metadata } from "next";
import "./globals.css";
import { Chatbot } from "@/components/chatbot";
import { seo, site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://iroshan-pathirannahalage.vercel.app"
  ),
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
    url: "/",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Iroshan Pathirannahalage | Strategic Program Leader",
    description: site.description,
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
