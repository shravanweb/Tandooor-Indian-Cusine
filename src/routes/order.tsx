import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  ExternalLink,
  ArrowRight,
  ShoppingBag,
  Truck,
  UtensilsCrossed,
  Clock,
} from "lucide-react";
import { ScrollReveal } from "../components/scroll-reveal";
import dishBiryani from "../assets/dish-biryani.jpg";

const ORDER_URL =
  "https://fromtherestaurant.com/tandoor-indian-cuisine-provo/menu/1600-N-Freedom-Blvd/";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Online — Tandoor Indian Cuisine, Provo UT" },
      {
        name: "description",
        content:
          "Order North Indian food online for pickup or delivery in Provo. Tandoori, biryani, curries and more from Tandoor Indian Cuisine.",
      },
      { property: "og:title", content: "Order Online — Tandoor Indian Cuisine" },
      {
        property: "og:description",
        content: "Pickup and delivery across Provo, Utah.",
      },
      { property: "og:image", content: dishBiryani },
    ],
  }),
  component: OrderPage,
});

const steps = [
  {
    icon: UtensilsCrossed,
    title: "Browse the menu",
    desc: "Tandoori grills, biryanis, curries and fresh naan.",
  },
  {
    icon: ShoppingBag,
    title: "Customize & pay",
    desc: "Choose items, add notes and checkout securely online.",
  },
  {
    icon: Truck,
    title: "Pickup or delivery",
    desc: "Hot, fresh and ready when you are in Provo.",
  },
] as const;

function OrderPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-[#1c1511] text-[#f2ebe3]">
        <div className="absolute inset-0" aria-hidden>
          <img src={dishBiryani} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1511]/75 via-[#1c1511]/92 to-[#1c1511]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,92,38,0.18),transparent_60%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
            Pickup &amp; Delivery
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Order <span className="text-primary">online</span>
          </h1>
          <div className="rule-gold mx-auto my-7 max-w-[12rem]" />
          <p className="text-base font-medium leading-relaxed text-[#f2ebe3]/75 sm:text-lg">
            Craving tandoori kebabs, biryani or butter chicken? Order ahead for
            pickup or delivery — hot, fresh and ready when you are.
          </p>

          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-110"
          >
            Start Your Order
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Main */}
      <section className="bg-background py-14 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal variant="fade-right" className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_12px_48px_-16px_rgba(28,21,17,0.1)] sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
                Online Ordering
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground">
                Order through our platform
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Browse the full menu, customize your order and pay online. Available
                for pickup and delivery in the Provo area.
              </p>

              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground shadow-md shadow-primary/20 transition hover:brightness-110 sm:w-auto sm:px-8"
              >
                Start Your Order
                <ExternalLink size={14} />
              </a>

              <div className="mt-8 flex items-center gap-3 rounded-lg border border-border bg-secondary/40 px-4 py-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Prefer to call?
                  </p>
                  <a
                    href="tel:+18019609048"
                    className="text-sm font-semibold text-foreground transition hover:text-primary"
                  >
                    +1 801-960-9048
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 80} variant="fade-up">
                <div
                  className="rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <span className="text-[10px] font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <step.icon size={20} className="mt-3 text-primary" strokeWidth={2} />
                  <h3 className="mt-2 font-display text-sm font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={100} className="relative">
            <div
              className="pointer-events-none absolute -right-2 -top-2 z-10 h-16 w-16 border-r-2 border-t-2 border-primary/60 sm:-right-3 sm:-top-3 sm:h-20 sm:w-20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-2 -left-2 z-10 h-16 w-16 border-b-2 border-l-2 border-primary/35 sm:-bottom-3 sm:-left-3 sm:h-20 sm:w-20"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-xl shadow-[0_24px_48px_-16px_rgba(28,21,17,0.2)]">
              <img
                src={dishBiryani}
                alt="Hyderabadi chicken biryani ready to order"
                loading="lazy"
                width={900}
                height={675}
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-md border border-white/15 bg-black/40 px-4 py-2 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                  House favorites
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Biryani, curries &amp; tandoori
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hours note */}
      <section className="border-y border-border bg-secondary/40 py-10">
        <ScrollReveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6 text-center sm:gap-6">
          <Clock size={18} className="text-primary" />
          <p className="text-sm font-medium text-muted-foreground">
            <span className="font-semibold text-foreground">Open daily</span> — Mon–Sat
            11 AM – 10 PM · Sunday 11 AM – 9 PM
          </p>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#1c1511] py-16 text-[#f2ebe3] lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(197,92,38,0.12),transparent_55%)]"
          aria-hidden
        />
        <ScrollReveal className="relative mx-auto max-w-2xl px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
            Explore First
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            Not sure what to order?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#f2ebe3]/70 sm:text-base">
            Browse our full menu or get in touch — we&apos;re happy to help you choose.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#f2ebe3] transition hover:border-primary/50 hover:text-primary"
            >
              View Menu
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition hover:brightness-110"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
