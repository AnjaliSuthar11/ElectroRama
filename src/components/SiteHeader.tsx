import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { SITE } from "@/content/site";
import Logo from "@/components/Logo";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/90 shadow-lg shadow-navy/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label={SITE.brand.name}>
          <Logo tone="light" />
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
          {SITE.nav.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                i === 0 ? "text-primary" : "text-white/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_oklch(0.62_0.22_300/0.6)] transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            {SITE.navCta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* mobile nav */}
      {open && (
        <nav className="border-t border-white/10 bg-navy/95 px-6 py-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4">
            {SITE.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/85 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-2.5 text-sm font-semibold text-white"
            >
              {SITE.navCta}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
