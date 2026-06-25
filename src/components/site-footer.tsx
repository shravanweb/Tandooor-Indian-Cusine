import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/logo.png";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Menu" },
  { to: "/offers", label: "Offers & Specials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/order", label: "Order Online" },
  { to: "/reserve", label: "Reservations" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background text-foreground shadow-[0_-12px_40px_-16px_rgba(28,21,17,0.1)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="inline-block rounded-lg bg-black px-3 py-2.5">
              <img
                src={logo}
                alt="Tandoor Indian Cuisine"
                className="h-10 w-auto object-contain"
                width={192}
                height={48}
              />
            </div>
            <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-muted-foreground">
              Authentic North Indian cuisine in Provo — tandoori specialties, biryanis,
              curries and fresh naan. Dine-in, takeout and catering.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                <Instagram size={17} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                <Facebook size={17} />
              </a>
            </div>
            <Link
              to="/reserve"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-md shadow-primary/15 transition hover:brightness-110"
            >
              Book a Table
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              Explore
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-semibold text-foreground/70 transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & hours */}
          <div className="lg:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              Visit Us
            </p>
            <div className="mt-6 space-y-4 rounded-xl border border-border bg-card p-5 shadow-[0_4px_20px_-8px_rgba(28,21,17,0.08)]">
              <div className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <p className="text-sm font-medium leading-relaxed text-foreground/80">
                  1600 N Freedom Blvd
                  <br />
                  Provo, UT 84604
                </p>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                <a
                  href="tel:+18019609048"
                  className="text-sm font-semibold text-foreground/80 transition hover:text-primary"
                >
                  +1 801-960-9048
                </a>
              </div>
              <div className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
                <a
                  href="mailto:tandoorprovo1600@gmail.com"
                  className="text-sm font-semibold text-foreground/80 transition hover:text-primary"
                >
                  tandoorprovo1600@gmail.com
                </a>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-2 text-primary">
                  <Clock size={15} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                    Hours
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between font-medium text-muted-foreground">
                    <span>Mon – Sat</span>
                    <span className="font-mono text-foreground/80">11 AM – 10 PM</span>
                  </div>
                  <div className="flex justify-between font-medium text-muted-foreground">
                    <span>Sunday</span>
                    <span className="font-mono text-foreground/80">11 AM – 9 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-secondary/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Tandoor Indian Cuisine · Provo, Utah</span>
          <span>Authentic flavors · Warm hospitality</span>
        </div>
      </div>
    </footer>
  );
}
