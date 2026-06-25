import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Info,
  UtensilsCrossed,
  Newspaper,
  Phone,
  ShoppingBag,
  CalendarCheck,
  Tag,
  LogIn,
  type LucideIcon,
} from "lucide-react";
import logo from "../assets/logo.png";

const nav: { to: string; label: string; icon: LucideIcon; exact?: boolean }[] = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/about", label: "About", icon: Info },
  { to: "/menu", label: "Menu", icon: UtensilsCrossed },
  { to: "/offers", label: "Offers", icon: Tag },
  { to: "/blog", label: "Blog", icon: Newspaper },
  { to: "/contact", label: "Contact", icon: Phone },
  { to: "/order", label: "Order", icon: ShoppingBag },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex shrink-0 items-center rounded-md bg-black px-2.5 py-1.5">
          <img
            src={logo}
            alt="Tandoor Indian Cuisine"
            className="h-9 w-auto object-contain sm:h-10"
            width={160}
            height={40}
          />
        </Link>

        <nav className="hidden items-center lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground transition hover:text-primary xl:px-3.5 xl:text-[11px]"
              activeProps={{
                className: "text-primary [&>span:last-child]:scale-x-100",
              }}
              activeOptions={{ exact: n.exact ?? false }}
            >
              <n.icon size={13} strokeWidth={2.5} className="shrink-0 group-hover:text-primary" />
              <span>{n.label}</span>
              <span className="absolute inset-x-3 -bottom-[1.125rem] h-0.5 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden items-center gap-1.5 rounded-md border border-foreground/20 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground transition hover:border-primary hover:text-primary sm:inline-flex"
            activeProps={{
              className:
                "hidden items-center gap-1.5 rounded-md border border-primary bg-primary/5 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary sm:inline-flex",
            }}
          >
            <LogIn size={13} strokeWidth={2.5} />
            Login
          </Link>
          <Link
            to="/order"
            className="hidden items-center gap-1.5 rounded-md border border-foreground/20 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground transition hover:border-primary hover:text-primary md:inline-flex"
          >
            <ShoppingBag size={13} strokeWidth={2.5} />
            Order
          </Link>
          <Link
            to="/reserve"
            className="hidden items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-md shadow-primary/15 transition hover:brightness-110 md:inline-flex"
          >
            <CalendarCheck size={13} strokeWidth={2.5} />
            Reserve
          </Link>
          <button
            aria-label="Toggle menu"
            className="grid size-10 place-items-center rounded-md border border-border text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-border/30 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground last:border-0"
              >
                <n.icon size={15} strokeWidth={2.5} className="text-primary" />
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 pb-2">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-md border border-border py-3 text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                <LogIn size={14} />
                Login
              </Link>
              <div className="flex gap-2">
              <Link
                to="/order"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border py-3 text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                <ShoppingBag size={14} />
                Order
              </Link>
              <Link
                to="/reserve"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground"
              >
                <CalendarCheck size={14} />
                Reserve
              </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
