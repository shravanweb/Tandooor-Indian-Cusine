import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { offers } from "../data/offers";
import dishBiryani from "../assets/dish-biryani.jpg";

const ORDER_URL =
  "https://fromtherestaurant.com/tandoor-indian-cuisine-provo/menu/1600-N-Freedom-Blvd/";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Specials — Tandoor Indian Cuisine, Provo UT" },
      {
        name: "description",
        content:
          "Lunch combo, family biryani feast, catering packages and student specials at Tandoor Indian Cuisine, Provo.",
      },
      { property: "og:title", content: "Tandoor Indian Cuisine · Offers & Specials" },
      {
        property: "og:description",
        content: "Weekday lunch, weekend biryani, catering and student discounts.",
      },
      { property: "og:image", content: dishBiryani },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  return (
    <>
      <section className="border-b border-border bg-[#1c1511] text-[#f2ebe3]">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center lg:py-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
            Special Offers
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
            Dine, celebrate &amp; <span className="text-primary">save</span>
          </h1>
          <div className="rule-gold mx-auto my-5 max-w-[10rem]" />
          <p className="mx-auto max-w-xl text-sm text-[#f2ebe3]/70 sm:text-base">
            Freshly cooked specials for lunch, weekends and every celebration.
          </p>
        </div>
      </section>

      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {offers.map((o) => (
              <article
                key={o.id}
                className={`group flex flex-col overflow-hidden rounded-lg border bg-card transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(28,21,17,0.14)] ${
                  o.featured ? "border-primary/35" : "border-border hover:border-primary/30"
                }`}
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={o.img}
                    alt={o.title}
                    loading="lazy"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {o.featured && (
                    <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
                      Popular
                    </span>
                  )}
                  <span className="absolute bottom-2 right-2 rounded bg-primary px-2 py-0.5 font-display text-sm font-extrabold text-primary-foreground">
                    {o.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-primary">
                    {o.tag}
                  </p>
                  <h2 className="mt-1 font-display text-base font-bold leading-snug text-foreground">
                    {o.title}
                  </h2>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {o.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      to="/reserve"
                      className="inline-flex items-center gap-1 rounded border border-border px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-foreground transition hover:border-primary hover:text-primary"
                    >
                      Book
                      <ArrowRight size={10} />
                    </Link>
                    <a
                      href={ORDER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded border border-border px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-foreground transition hover:border-primary hover:text-primary"
                    >
                      Order
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Planning a party or office lunch?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              From 20 to 500 guests — tandoori platters, biryani feasts and full menus.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition hover:brightness-110"
          >
            Request a Quote
            <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </>
  );
}
