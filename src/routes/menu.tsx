import { createFileRoute, Link } from "@tanstack/react-router";
import heroDosa from "../assets/hero-dosa.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Saaral South Indian Kitchen, Provo" },
      { name: "description", content: "Dosas, idlis, uttapams, biryanis, curries, breads and South Indian desserts. View the full Saaral menu." },
      { property: "og:title", content: "Saaral Menu" },
      { property: "og:description", content: "Authentic South Indian dishes — tiffin, biryani, curries, desserts." },
      { property: "og:image", content: heroDosa },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    name: "Tiffin & Breakfast",
    note: "Served all day with sambar & three chutneys",
    items: [
      { n: "Idli (2 pc)", d: "Steamed rice & lentil cakes", p: "8" },
      { n: "Medu Vada (2 pc)", d: "Crispy lentil donuts", p: "8" },
      { n: "Pongal", d: "Creamy rice & moong dal, ghee, cashews, pepper", p: "11" },
      { n: "Upma", d: "Tempered semolina with cashews and curry leaves", p: "10" },
      { n: "Idiyappam (3 pc)", d: "Steamed string hoppers with coconut milk", p: "12" },
    ],
  },
  {
    name: "Dosas & Uttapams",
    note: "From the tawa — paper, plain, masala & specials",
    items: [
      { n: "Plain Dosa", d: "Classic crisp crepe", p: "10" },
      { n: "Masala Dosa", d: "Potato masala filling", p: "13" },
      { n: "Mysore Masala", d: "Spicy red chutney, potato masala", p: "14" },
      { n: "Ghee Roast", d: "Pan-roasted with cow ghee", p: "14" },
      { n: "Paneer Dosa", d: "Spiced cottage cheese filling", p: "15" },
      { n: "Onion Uttapam", d: "Thick pancake with onion & chili", p: "12" },
    ],
  },
  {
    name: "Biryani & Rice",
    note: "Dum-cooked in copper handi",
    items: [
      { n: "Vegetable Biryani", d: "Mixed vegetables, basmati, raita", p: "15" },
      { n: "Chicken Biryani", d: "Hyderabadi style, saffron, fried onions", p: "17" },
      { n: "Lamb Biryani", d: "Slow-cooked tender lamb", p: "19" },
      { n: "Lemon Rice", d: "Tempered rice with peanuts & curry leaves", p: "10" },
      { n: "Curd Rice", d: "Cooling tempered yogurt rice", p: "9" },
    ],
  },
  {
    name: "Curries & Specialties",
    note: "From Chettinad, Kerala & Andhra kitchens",
    items: [
      { n: "Chettinad Chicken", d: "Roasted spice masala, peppercorn", p: "17" },
      { n: "Kerala Fish Curry", d: "Coconut, kokum, mustard", p: "18" },
      { n: "Sambar", d: "Lentil & vegetable stew", p: "8" },
      { n: "Paneer Butter Masala", d: "Cottage cheese in tomato gravy", p: "15" },
      { n: "Avial", d: "Mixed vegetables in coconut & yogurt", p: "13" },
    ],
  },
  {
    name: "Breads",
    items: [
      { n: "Parotta", d: "Flaky layered Malabar bread", p: "5" },
      { n: "Appam", d: "Lacy fermented rice pancake", p: "6" },
      { n: "Poori (2 pc)", d: "Puffed deep-fried bread", p: "6" },
    ],
  },
  {
    name: "Sweets & Coffee",
    items: [
      { n: "Filter Coffee", d: "Madras decoction in brass tumbler", p: "4" },
      { n: "Masala Chai", d: "Cardamom, ginger, clove", p: "4" },
      { n: "Payasam", d: "Vermicelli kheer with cardamom", p: "7" },
      { n: "Mysore Pak", d: "Ghee-fudge made with gram flour", p: "6" },
      { n: "Gulab Jamun (2 pc)", d: "Cardamom syrup-soaked dumplings", p: "6" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <img src={heroDosa} alt="" width={1600} height={1280} className="absolute inset-0 size-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">The Saaral Menu</p>
          <h1 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">A leaf-full of <span className="italic text-primary">flavour</span>.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
            Tiffin, tawa, biryani, curries and South Indian sweets. All vegetarian dishes can be made vegan on request — just ask your server.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-20">
          {sections.map((s) => (
            <div key={s.name}>
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
                <h2 className="font-display text-4xl text-primary">{s.name}</h2>
                {s.note && <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.note}</p>}
              </div>
              <ul className="mt-8 divide-y divide-border/60">
                {s.items.map((it) => (
                  <li key={it.n} className="flex items-baseline gap-4 py-5">
                    <div className="flex-1">
                      <p className="font-display text-xl text-foreground">{it.n}</p>
                      <p className="mt-1 text-sm text-foreground/65">{it.d}</p>
                    </div>
                    <div className="mx-3 flex-1 border-b border-dashed border-border/70 translate-y-1" />
                    <span className="font-mono text-sm text-primary">${it.p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-border pt-12 text-center">
          <p className="font-display text-2xl text-foreground">Hungry yet? Book a table.</p>
          <Link to="/reserve" className="rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground">Reserve a Table</Link>
        </div>
      </section>
    </>
  );
}
