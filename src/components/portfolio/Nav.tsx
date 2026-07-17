import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-6",
            scrolled
              ? "glass border-border/60 shadow-[0_8px_30px_-10px_rgb(15_23_42_/_0.15)]"
              : "border-transparent bg-transparent",
          )}
        >
          <a href="#top" className="group flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-navy-foreground font-display font-bold">
              T
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-navy">
              Techgod
            </span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-sm font-medium text-navy/70 transition-colors hover:bg-secondary hover:text-navy"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-emerald px-4 py-2 text-sm font-semibold text-emerald-foreground shadow-[0_6px_20px_-6px_oklch(0.63_0.17_148_/_0.6)] transition hover:translate-y-[-1px] hover:shadow-[0_10px_26px_-8px_oklch(0.63_0.17_148_/_0.7)] md:inline-flex"
            >
              Book a call
            </a>
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background/80 md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl border border-border/60 p-2 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-navy/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-emerald px-4 py-3 text-center text-sm font-semibold text-emerald-foreground"
            >
              Book a call
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}