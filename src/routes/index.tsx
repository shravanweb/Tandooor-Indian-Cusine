import { createFileRoute, Link } from "@tanstack/react-router";
import heroDosa from "../assets/hero-dosa.jpg";
import dishIdliVada from "../assets/dish-idli-vada.jpg";
import dishBiryani from "../assets/dish-biryani.jpg";
import filterCoffee from "../assets/filter-coffee.jpg";
import bananaLeaf from "../assets/banana-leaf.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saaral — Authentic South Indian Cuisine, Provo UT" },
      { name: "description", content: "Crispy dosa, soft idli, fragrant biryani and brass-tumbler filter coffee. Dine-in, takeout and catering in Provo, Utah." },
      { property: "og:title", content: "Saaral — South Indian Cuisine" },
      { property: "og:description", content: "Authentic dosa, idli, biryani and filter coffee in Provo, Utah." },
      { property: "og:image", content: heroDosa },
      { name: "twitter:image", content: heroDosa },
    ],
  }),
  component: HomePage,
});

const signatures = [
  { name: "Masala Dosa", subtitle: "Mysore-style", price: "$13", img: heroDosa, desc: "Paper-thin fermented crepe, potato masala, three chutneys, sambar." },
  { name: "Idli & Medu Vada", subtitle: "Tiffin classic", price: "$11", img: dishIdliVada, desc: "Pillowy steamed rice cakes and crisp lentil donuts on a banana leaf." },
  { name: "Hyderabadi Biryani", subtitle: "Dum-cooked", price: "$17", img: dishBiryani, desc: "Long-grain basmati, slow-cooked chicken, saffron, fried onions, raita." },
  { name: "Filter Coffee", subtitle: "Madras tradition", price: "$4", img: filterCoffee, desc: "Decoction brewed slow, finished with frothed milk in a brass tumbler." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroDosa} alt="" width={1600} height={1280} className="size-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">Now Open · Provo, UT</span>
            </div>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] text-cream sm:text-7xl md:text-[88px]">
              The soul of <span className="italic text-primary">South India</span>, on a banana leaf.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              Slow-fermented dosa batter, hand-pounded masalas, and filter coffee poured from a brass tumbler. Recipes carried from Madras kitchens to Utah Valley.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/reserve" className="rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition hover:opacity-90">
                Reserve a Table
              </Link>
              <Link to="/menu" className="rounded-sm border border-border bg-background/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition hover:border-primary hover:text-primary">
                Explore Menu
              </Link>
            </div>

            <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <div><p className="font-display text-2xl text-primary">36hr</p><p className="mt-1">Fermented batter</p></div>
              <div><p className="font-display text-2xl text-primary">100%</p><p className="mt-1">Hand-ground</p></div>
              <div><p className="font-display text-2xl text-primary">Veg+</p><p className="mt-1">Non-veg options</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Tiffin & Beyond</p>
            <h2 className="mt-3 font-display text-5xl leading-tight text-foreground">Signature plates</h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/70">
            From a thin paper roast to a clay-pot biryani, each dish carries the rhythm of a different South Indian kitchen.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {signatures.map((d, i) => (
            <article key={d.name} className={`group ${i % 2 === 1 ? "lg:mt-12" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted ring-1 ring-border">
                <img src={d.img} alt={d.name} loading="lazy" width={900} height={1100} className="size-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl text-foreground">{d.name}</h3>
                <span className="font-mono text-sm text-primary">{d.price}</span>
              </div>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{d.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{d.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STORY BAND */}
      <section className="relative overflow-hidden border-y border-border/60">
        <img src={bananaLeaf} alt="" width={1600} height={900} className="absolute inset-0 size-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Our Story</p>
            <h2 className="mt-3 font-display text-5xl leading-tight text-foreground">From a Madras tiffin shop to a Provo banana leaf.</h2>
            <div className="rule-gold my-8 max-w-xs" />
            <p className="text-base leading-relaxed text-foreground/80">
              Saaral — meaning a fine, gentle drizzle in Tamil — was born from family recipes passed down four generations. We ferment our batters for thirty-six hours, stone-grind our masalas, and serve every thali on a fresh banana leaf, just as it’s done back home.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/70">
              Whether it’s a quick tiffin lunch or a 12-course Onam sadhya, we cook the way grandmothers do — patiently, generously, and with a tumbler of filter coffee on the side.
            </p>
          </div>
          <div className="relative">
            <img src={dishIdliVada} alt="Idli and vada on banana leaf" loading="lazy" width={900} height={1100} className="aspect-[4/5] w-full rounded-sm object-cover ring-1 ring-border" />
            <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] bg-primary p-6 text-primary-foreground md:block">
              <p className="font-display text-lg italic leading-snug">“The most honest South Indian food in Utah Valley.”</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.25em] opacity-80">— Local Diner</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS STRIP */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { tag: "Weekdays · 11–3", title: "Tiffin Thali Lunch", desc: "Three curries, rice, sambar, rasam, papad and dessert.", price: "$13.99" },
            { tag: "Sunday Brunch", title: "Banana-Leaf Sadhya", desc: "A 12-item feast served traditionally on a fresh leaf.", price: "$24.99" },
            { tag: "All week", title: "Catering & Events", desc: "From 20 to 500 guests — weddings, pujas, office lunches.", price: "Custom" },
          ].map((o) => (
            <div key={o.title} className="group flex flex-col justify-between rounded-sm border border-border bg-card/40 p-8 transition hover:border-primary">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">{o.tag}</p>
                <h3 className="mt-3 font-display text-3xl text-foreground">{o.title}</h3>
                <p className="mt-3 text-sm text-foreground/70">{o.desc}</p>
              </div>
              <div className="mt-8 flex items-baseline justify-between border-t border-border pt-5">
                <span className="font-mono text-primary">{o.price}</span>
                <Link to="/offers" className="text-[10px] uppercase tracking-[0.25em] text-foreground/80 hover:text-primary">Details →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-5xl leading-tight text-foreground">A table by the window, a dosa fresh off the tawa.</h2>
            <p className="mt-4 max-w-xl text-foreground/70">Book ahead for weekend evenings — our 24 seats fill quickly.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/reserve" className="rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground">Reserve Now</Link>
            <a href="tel:+18019609048" className="rounded-sm border border-border px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary">Call · 801-960-9048</a>
          </div>
        </div>
      </section>
    </>
  );
}
