import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/order", label: "Order Online" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-primary">Saaral</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">South Indian Kitchen</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex lg:gap-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/80 transition hover:text-primary lg:text-xs lg:tracking-[0.22em]"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/reserve"
            className="hidden rounded-sm bg-primary px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition hover:opacity-90 md:inline-block"
          >
            Reserve Table
          </Link>
          <button
            aria-label="Toggle menu"
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] text-foreground/85"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/reserve"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-primary py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground"
            >
              Reserve Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
