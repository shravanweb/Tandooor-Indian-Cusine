import { createFileRoute, Link } from "@tanstack/react-router";
import bananaLeaf from "../assets/banana-leaf.jpg";
import dishBiryani from "../assets/dish-biryani.jpg";
import filterCoffee from "../assets/filter-coffee.jpg";
import dishIdliVada from "../assets/dish-idli-vada.jpg";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Specials — Saaral South Indian Kitchen" },
      { name: "description", content: "Weekday tiffin thali, Sunday banana-leaf sadhya, student discount and catering offers at Saaral, Provo." },
      { property: "og:title", content: "Saaral · Offers & Specials" },
      { property: "og:description", content: "Lunch thali, Sunday sadhya, catering and student discounts." },
      { property: "og:image", content: bananaLeaf },
    ],
  }),
  component: OffersPage,
});

const offers = [
  { tag: "Mon – Sat · 11 AM – 3 PM", title: "Tiffin Thali Lunch", desc: "Three curries, basmati rice, sambar, rasam, papad, pickle and a dessert of the day — all served on a banana leaf.", price: "$13.99", img: dishIdliVada },
  { tag: "Every Sunday · all day", title: "Banana-Leaf Sadhya", desc: "Our 12-item Kerala feast: avial, olan, kalan, parippu, sambar, rasam, payasam and more. A meal as much as a ritual.", price: "$24.99", img: bananaLeaf },
  { tag: "Daily · 4 – 6 PM", title: "Filter Coffee Hour", desc: "Bottomless brass-tumbler filter coffee with any plate of vada, bonda or bajji. The Madras way to break the afternoon.", price: "$9", img: filterCoffee },
  { tag: "With student ID", title: "UVU & BYU Student Special", desc: "10% off any dosa or biryani — every weekday after 5 PM. Show your student ID at the table.", price: "10% off", img: dishBiryani },
];

function OffersPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">This Season at Saaral</p>
          <h1 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">Offers & <span className="italic text-primary">specials</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
            Small gestures that make a big plate — weekday tiffins, Sunday sadhyas, and a brass tumbler of coffee for the afternoon.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {offers.map((o) => (
            <article key={o.title} className="group overflow-hidden rounded-sm border border-border bg-card/40">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={o.img} alt={o.title} loading="lazy" width={1200} height={750} className="size-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">{o.tag}</p>
                <h3 className="mt-3 font-display text-3xl text-foreground">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{o.desc}</p>
                <div className="mt-6 flex items-baseline justify-between border-t border-border pt-5">
                  <span className="font-display text-2xl text-primary">{o.price}</span>
                  <Link to="/reserve" className="text-[10px] uppercase tracking-[0.25em] text-foreground/80 hover:text-primary">Book a table →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl text-foreground">Planning a wedding, puja or office lunch?</h2>
            <p className="mt-2 max-w-xl text-foreground/70">From 20 to 500 guests — we cater across Utah Valley with full sadhya menus, live dosa counters and chai stations.</p>
          </div>
          <Link to="/contact" className="rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
