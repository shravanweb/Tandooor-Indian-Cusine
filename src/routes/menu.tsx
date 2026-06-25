import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollReveal } from "../components/scroll-reveal";
import heroKebab from "../assets/hero-kebab.jpg";
import dishBiryani from "../assets/dish-biryani.jpg";
import dishButterChicken from "../assets/dish-butter-chicken.jpg";
import dishGarlicNaan from "../assets/dish-garlic-naan.jpg";
import dishTikkaMasala from "../assets/dish-tikka-masala.jpg";
import dishSeekhKebab from "../assets/dish-seekh-kebab.jpg";
import dishJeeraRice from "../assets/dish-jeera-rice.jpg";
import tandoor from "../assets/tandoor.jpg";
import filterCoffee from "../assets/filter-coffee.jpg";
import previewSm01 from "../assets/preview-sm-01.jpg";
import previewSm02 from "../assets/preview-sm-02.jpg";
import previewSm03 from "../assets/preview-sm-03.jpg";
import previewSm04 from "../assets/preview-sm-04.jpg";
import previewSm05 from "../assets/preview-sm-05.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Tandoor Indian Cuisine, Provo UT" },
      {
        name: "description",
        content:
          "Tandoori kebabs, biryanis, curries, naan and North Indian specialties. View the full Tandoor menu.",
      },
      { property: "og:title", content: "Tandoor Indian Cuisine Menu" },
      {
        property: "og:description",
        content: "Authentic North Indian dishes — tandoor, biryani, curries and breads.",
      },
      { property: "og:image", content: heroKebab },
    ],
  }),
  component: MenuPage,
});

type MenuItem = {
  n: string;
  d: string;
  p: string;
  img: string;
  tag?: string;
};

type MenuSection = {
  id: string;
  name: string;
  short: string;
  note?: string;
  cover: string;
  items: MenuItem[];
};

const sections: MenuSection[] = [
  {
    id: "tandoor",
    name: "Tandoor & Kebabs",
    short: "Tandoor",
    note: "Flame-roasted in our clay oven",
    cover: heroKebab,
    items: [
      { n: "Tandoori Chicken", d: "Yogurt-marinated, charred in clay oven", p: "16", img: heroKebab, tag: "Popular" },
      { n: "Chicken Tikka", d: "Boneless pieces, ginger-garlic marinade", p: "15", img: tandoor },
      { n: "Lamb Seekh Kebab", d: "Minced lamb, spices and fresh mint", p: "17", img: dishSeekhKebab },
      { n: "Paneer Tikka", d: "Cottage cheese, bell pepper and onion", p: "14", img: previewSm03 },
      { n: "Mixed Grill Platter", d: "Assorted kebabs — perfect for sharing", p: "28", img: heroKebab },
    ],
  },
  {
    id: "biryani",
    name: "Biryani & Rice",
    short: "Biryani",
    note: "Dum-cooked Hyderabadi style",
    cover: dishBiryani,
    items: [
      { n: "Chicken Biryani", d: "Saffron basmati, fried onions, raita", p: "17", img: dishBiryani, tag: "Chef's Pick" },
      { n: "Lamb Biryani", d: "Slow-cooked tender lamb, aromatic spices", p: "19", img: dishBiryani },
      { n: "Vegetable Biryani", d: "Seasonal vegetables, basmati, raita", p: "15", img: previewSm02 },
      { n: "Jeera Rice", d: "Basmati tempered with cumin seeds", p: "6", img: dishJeeraRice },
      { n: "Plain Basmati Rice", d: "Steamed long-grain basmati", p: "4", img: dishJeeraRice },
    ],
  },
  {
    id: "curries",
    name: "Curries & Mains",
    short: "Curries",
    note: "Rich gravies from North Indian kitchens",
    cover: dishButterChicken,
    items: [
      { n: "Butter Chicken", d: "Tender chicken in creamy tomato sauce", p: "15", img: dishButterChicken, tag: "Popular" },
      { n: "Chicken Tikka Masala", d: "Grilled chicken in spiced tomato gravy", p: "16", img: dishTikkaMasala },
      { n: "Lamb Rogan Josh", d: "Kashmiri-style slow-braised lamb", p: "18", img: previewSm02 },
      { n: "Paneer Butter Masala", d: "Cottage cheese in rich tomato gravy", p: "15", img: dishButterChicken },
      { n: "Dal Makhani", d: "Black lentils simmered with cream and butter", p: "13", img: previewSm04 },
      { n: "Palak Paneer", d: "Spinach and cottage cheese, garlic tempered", p: "14", img: previewSm03 },
    ],
  },
  {
    id: "breads",
    name: "Breads & Sides",
    short: "Breads",
    note: "Fresh from the tandoor, served warm",
    cover: dishGarlicNaan,
    items: [
      { n: "Garlic Naan", d: "Clay-oven naan brushed with garlic butter", p: "4", img: dishGarlicNaan },
      { n: "Butter Naan", d: "Classic soft naan with melted butter", p: "3", img: dishTikkaMasala },
      { n: "Cheese Naan", d: "Stuffed with melted cheese", p: "5", img: dishGarlicNaan },
      { n: "Roti", d: "Whole-wheat flatbread", p: "3", img: previewSm02 },
      { n: "Raita", d: "Cooling yogurt with cucumber and mint", p: "4", img: previewSm01 },
      { n: "Papadum (2 pc)", d: "Crispy lentil wafers", p: "3", img: previewSm05 },
    ],
  },
  {
    id: "drinks",
    name: "Beverages & Desserts",
    short: "Drinks",
    note: "Sweet finishes and classic drinks",
    cover: filterCoffee,
    items: [
      { n: "Mango Lassi", d: "Creamy yogurt blended with ripe mango", p: "5", img: previewSm01 },
      { n: "Sweet Lassi", d: "Traditional yogurt drink, lightly sweetened", p: "4", img: previewSm01 },
      { n: "Masala Chai", d: "Cardamom, ginger and clove spiced tea", p: "4", img: filterCoffee },
      { n: "Gulab Jamun (2 pc)", d: "Cardamom syrup-soaked dumplings", p: "6", img: previewSm01 },
      { n: "Kheer", d: "Rice pudding with saffron and nuts", p: "7", img: previewSm01 },
      { n: "Rasmalai (2 pc)", d: "Soft cheese patties in sweet milk", p: "8", img: previewSm01 },
    ],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group flex h-full items-start gap-3 rounded-lg border border-border/70 bg-background p-3 transition hover:border-primary/30 hover:bg-secondary/30 sm:items-center sm:p-3.5">
      <div className="relative size-14 shrink-0 overflow-hidden rounded-md ring-1 ring-border/80">
        <img
          src={item.img}
          alt={item.n}
          loading="lazy"
          width={112}
          height={112}
          className="size-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <h3 className="font-display text-sm font-bold leading-tight text-foreground">
              {item.n}
            </h3>
            {item.tag && (
              <span className="rounded bg-primary/10 px-1.5 py-px text-[8px] font-bold uppercase tracking-wide text-primary">
                {item.tag}
              </span>
            )}
          </div>
          <span className="shrink-0 font-display text-sm font-extrabold tabular-nums text-primary">
            ${item.p}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {item.d}
        </p>
      </div>
    </div>
  );
}

function MenuPage() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(section.id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-[#1c1511] text-[#f2ebe3]">
        <div className="absolute inset-0" aria-hidden>
          <img src={tandoor} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1511]/75 to-[#1c1511]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
            Our Menu
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Flame &amp; <span className="text-primary">Spice</span>
          </h1>
          <div className="rule-gold mx-auto my-5 max-w-[10rem]" />
          <p className="text-sm leading-relaxed text-[#f2ebe3]/70 sm:text-base">
            Authentic North Indian dishes — browse by category below.
          </p>
        </div>
      </section>

      {/* Category nav */}
      <div className="sticky top-[4.25rem] z-40 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl justify-center gap-1.5 overflow-x-auto px-4 py-2.5 scrollbar-none sm:gap-2 sm:px-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] transition sm:px-4 sm:py-2 sm:tracking-[0.18em] ${
                activeId === s.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {s.short}
            </a>
          ))}
        </div>
      </div>

      {/* Menu */}
      <section className="bg-secondary/30 py-10 sm:py-14">
        <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6">
          {sections.map((s, i) => (
            <ScrollReveal
              key={s.id}
              as="article"
              id={s.id}
              delay={i * 60}
              variant="fade-up"
              className="scroll-mt-32 overflow-hidden rounded-xl border border-border bg-card shadow-[0_2px_16px_-6px_rgba(28,21,17,0.08)]"
            >
              {/* Category header */}
              <div className="relative h-20 overflow-hidden sm:h-24">
                <img
                  src={s.cover}
                  alt=""
                  className="size-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1c1511]/90 via-[#1c1511]/75 to-[#1c1511]/50" />
                <div className="absolute inset-0 flex items-center justify-between px-5 sm:px-6">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-primary sm:text-[10px]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                      {s.name}
                    </h2>
                    {s.note && (
                      <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                        {s.note}
                      </p>
                    )}
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold text-white/80 backdrop-blur-sm">
                    {s.items.length}
                  </span>
                </div>
              </div>

              {/* Items grid */}
              <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
                {s.items.map((item) => (
                  <MenuItemRow key={item.n} item={item} />
                ))}
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal variant="scale" className="rounded-xl border border-border bg-card px-6 py-10 text-center sm:py-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
              Ready to Dine?
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Book your table today
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-xs text-muted-foreground sm:text-sm">
              Vegetarian options available. Ask about spice level and dietary needs.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              <Link
                to="/reserve"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition hover:brightness-110 sm:text-[11px]"
              >
                Reserve
                <ArrowRight size={13} />
              </Link>
              <Link
                to="/order"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground transition hover:border-primary hover:text-primary sm:text-[11px]"
              >
                Order Online
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
