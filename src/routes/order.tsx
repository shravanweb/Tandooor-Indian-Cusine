import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, ExternalLink } from "lucide-react";
import dishIdliVada from "../assets/dish-idli-vada.jpg";

const ORDER_URL = "https://fromtherestaurant.com/tandoor-indian-cuisine-provo/menu/1600-N-Freedom-Blvd/";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Online — Saaral South Indian Kitchen, Provo UT" },
      { name: "description", content: "Order South Indian food online for pickup or delivery in Provo. Dosas, biryanis, curries and more from Saaral." },
      { property: "og:title", content: "Order Online — Saaral" },
      { property: "og:description", content: "Pickup and delivery across Provo, Utah." },
      { property: "og:image", content: dishIdliVada },
    ],
  }),
  component: OrderPage,
});

function OrderPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">Pickup &amp; Delivery</p>
          <h1 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">Order <span className="italic text-primary">online</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
            Craving dosa, biryani or a tiffin thali? Order ahead for pickup or delivery — hot, fresh and ready when you are.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <div className="rounded-sm border border-border bg-card p-8">
            <h2 className="font-display text-3xl text-foreground">Order through our platform</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              Browse the full menu, customize your order and pay online. Available for pickup and delivery in the Provo area.
            </p>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground hover:opacity-90"
            >
              Start Your Order
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="rounded-sm border border-border bg-card/40 p-8">
            <h3 className="font-display text-2xl text-foreground">Prefer to call?</h3>
            <p className="mt-2 text-sm text-foreground/70">Place your order by phone and we will have it ready for pickup.</p>
            <a href="tel:+18019609048" className="mt-4 inline-flex items-center gap-2 font-display text-xl text-primary hover:underline">
              <Phone size={18} />
              +1 801-960-9048
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Info icon={<Clock size={16} />} label="Hours" lines={["Mon – Sat · 11 AM – 10 PM", "Sunday · 11 AM – 9 PM"]} />
            <Info icon={<MapPin size={16} />} label="Pickup at" lines={["1600 N Freedom Blvd", "Provo, UT 84604"]} />
          </div>
        </div>

        <div className="aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-border">
          <img src={dishIdliVada} alt="South Indian tiffin platter" loading="lazy" width={900} height={1100} className="size-full object-cover" />
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center">
          <p className="text-foreground/70">Not sure what to order? Browse our full menu first.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/menu" className="rounded-sm border border-border px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary">View Menu</Link>
            <Link to="/contact" className="rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon, label, lines }: { icon: React.ReactNode; label: string; lines: string[] }) {
  return (
    <div className="rounded-sm border border-border bg-background p-6">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">{label}</span>
      </div>
      <div className="mt-3 space-y-1 text-sm text-foreground/80">
        {lines.map((l) => <p key={l}>{l}</p>)}
      </div>
    </div>
  );
}
