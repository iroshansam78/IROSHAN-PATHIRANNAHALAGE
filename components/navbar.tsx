import { navLinks } from "@/content/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-border/70 bg-white/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="font-heading text-sm font-extrabold tracking-wide text-brand-navy md:text-base">
          IROSHAN PATHIRANNAHALAGE
        </a>
        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-brand-steel transition hover:text-brand-navy">
              {item.label}
            </a>
          ))}
          <a href="https://www.linkedin.com/in/iroshan-pathirannahalage/" target="_blank" rel="noreferrer" className="rounded-lg bg-brand-navy px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-steel">
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
