import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-primary">Saaral</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">South Indian Kitchen · Provo, UT</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/75">
            Slow-fermented batters, hand-ground masalas and a tumbler of filter coffee. A taste of Madras, Mysore and Malabar — served on a banana leaf in the heart of Utah Valley.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid size-9 place-items-center rounded-full border border-border text-foreground/70 hover:text-primary"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook" className="grid size-9 place-items-center rounded-full border border-border text-foreground/70 hover:text-primary"><Facebook size={16} /></a>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">Visit</p>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-primary" /> 1600 N Freedom Blvd, Provo, UT 84604</li>
            <li className="flex items-start gap-2"><Phone size={14} className="mt-1 text-primary" /> +1 801-960-9048</li>
            <li className="flex items-start gap-2"><Mail size={14} className="mt-1 text-primary" /> saaralprovo@gmail.com</li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">Hours</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex justify-between"><span className="text-foreground/80">Mon – Sat</span><span className="font-mono text-foreground/70">11 – 10</span></li>
            <li className="flex justify-between"><span className="text-foreground/80">Sunday</span><span className="font-mono text-foreground/70">11 – 9</span></li>
          </ul>
          <div className="mt-6 flex flex-col gap-2 text-xs uppercase tracking-[0.22em]">
            <Link to="/about" className="text-foreground/70 hover:text-primary">About Us</Link>
            <Link to="/menu" className="text-foreground/70 hover:text-primary">Menu</Link>
            <Link to="/blog" className="text-foreground/70 hover:text-primary">Blog</Link>
            <Link to="/contact" className="text-foreground/70 hover:text-primary">Contact</Link>
            <Link to="/order" className="text-foreground/70 hover:text-primary">Order Online</Link>
            <Link to="/reserve" className="text-foreground/70 hover:text-primary">Reservations</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Saaral South Indian Kitchen</span>
          <span>Crafted with ghee &amp; care</span>
        </div>
      </div>
    </footer>
  );
}
