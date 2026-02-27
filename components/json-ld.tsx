import { site } from "@/content/site";

export function JsonLd() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://iroshan-pathirannahalage.vercel.app";
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: baseUrl,
    sameAs: [site.linkedin],
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
