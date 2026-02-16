import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-brand-border py-8">
      <div className="section-shell flex flex-col gap-3 text-sm text-brand-steel md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <a href={site.linkedin} target="_blank" rel="noreferrer" className="font-medium text-brand-navy hover:underline">
          linkedin.com/in/iroshan-pathirannahalage
        </a>
      </div>
    </footer>
  );
}
