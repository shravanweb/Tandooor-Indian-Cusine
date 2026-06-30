import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin, PartyPopper, Percent, Phone, UtensilsCrossed } from "lucide-react";
import { HeroSection } from "../components/hero-section";
import { ScrollReveal } from "../components/scroll-reveal";
import { offers } from "../data/offers";
import heroKebab from "../assets/hero-kebab.jpg";
import dishBiryani from "../assets/dish-biryani.jpg";
import dishButterChicken from "../assets/dish-butter-chicken.jpg";
import dishGarlicNaan from "../assets/dish-garlic-naan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tandoor Indian Cuisine — Authentic Indian Restaurant, Provo UT" },
      { name: "description", content: "Tandoori kebabs, fragrant biryani and authentic Indian cuisine. Dine-in, takeout and catering in Provo, Utah." },
      { property: "og:title", content: "Tandoor Indian Cuisine — Provo, UT" },
      { property: "og:description", content: "Tandoori kebabs, biryani and authentic Indian food in Provo, Utah." },
      { property: "og:image", content: heroKebab },
      { name: "twitter:image", content: heroKebab },
    ],
  }),
  component: HomePage,
});

const signatures = [
  { name: "Tandoori Chicken", subtitle: "Tandoor Special", price: "$16", img: heroKebab, desc: "Yogurt-marinated chicken roasted in our clay tandoor with mint chutney." },
  { name: "Hyderabadi Biryani", subtitle: "Chef's Pick", price: "$17", img: dishBiryani, desc: "Fragrant basmati, saffron and slow-cooked spices — layered to perfection." },
  { name: "Butter Chicken", subtitle: "House Classic", price: "$15", img: dishButterChicken, desc: "Tender chicken in a rich, creamy tomato sauce with warm naan." },
  { name: "Garlic Naan", subtitle: "Fresh Baked", price: "$4", img: dishGarlicNaan, desc: "Soft clay-oven naan brushed with garlic butter, served warm." },
];

const offerIcons = {
  "lunch-combo": UtensilsCrossed,
  "family-biryani": Calendar,
  catering: PartyPopper,
  "student-special": Percent,
} as const;

const featuredOffers = offers.filter((o) => o.id !== "student-special");

function HomePage() {
  return (
    <>
      <HeroSection />

      {/* SIGNATURE DISHES */}
      <section className="border-y border-border bg-secondary/60 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
              From Our Kitchen
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              House Favorites
            </h2>
            <div className="rule-gold mx-auto my-6 max-w-[12rem]" />
            <p className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              Tandoori grills, fragrant biryanis and oven-fresh naan — crafted with authentic
              spices and time-honored recipes.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {signatures.map((d, i) => (
              <ScrollReveal
                key={d.name}
                as="article"
                delay={i * 90}
                variant="fade-up"
                className="group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-[0_4px_24px_-8px_rgba(28,21,17,0.1)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_40px_-12px_rgba(28,21,17,0.18)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 grid size-9 place-items-center rounded-full border border-white/20 bg-black/40 text-[10px] font-bold text-white backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-md bg-primary px-3 py-1.5 text-sm font-bold text-primary-foreground shadow-md">
                    {d.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                    {d.subtitle}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-bold leading-tight text-foreground">
                    {d.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {d.desc}
                  </p>
                  <Link
                    to="/menu"
                    className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground transition group-hover:text-primary"
                  >
                    View on Menu
                    <ArrowRight size={12} className="transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-14 text-center" delay={120}>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-foreground shadow-sm transition hover:border-primary hover:text-primary"
            >
              Explore Full Menu
              <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="relative overflow-hidden bg-[#1c1511] py-24 text-[#f2ebe3] lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(197,92,38,0.14),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_100%,rgba(197,92,38,0.08),transparent_50%)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal variant="fade-right">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
              Our Story
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              A tradition of tandoor, spice &amp; hospitality.
            </h2>
            <div className="my-8 h-px max-w-[14rem] bg-gradient-to-r from-primary/80 to-transparent" />

            <p className="text-base font-medium leading-relaxed text-[#f2ebe3]/80 sm:text-lg">
              Tandoor Indian Cuisine brings the warmth of North India to Provo — from
              flame-roasted kebabs and slow-cooked biryanis to hand-rolled naan fresh from
              our clay oven.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#f2ebe3]/65">
              Our recipes are rooted in family kitchens across Delhi and Hyderabad,
              stone-ground masalas and marinades prepared daily. Every plate is served
              with the generosity and care of a home-cooked meal.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-white/10 py-8">
              {[
                { value: "Clay", label: "Tandoor oven" },
                { value: "Daily", label: "Fresh masalas" },
                { value: "Provo", label: "Utah Valley" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-extrabold text-primary">{s.value}</p>
                  <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2ebe3]/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition hover:brightness-110"
            >
              Discover Our Journey
              <ArrowRight size={14} />
            </Link>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={100}>
          <div className="relative mx-auto mb-16 w-full max-w-md lg:mb-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -right-3 -top-3 z-10 h-20 w-20 border-r-2 border-t-2 border-primary/70 lg:-right-4 lg:-top-4 lg:h-24 lg:w-24"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-3 -left-3 z-10 h-20 w-20 border-b-2 border-l-2 border-primary/40 lg:-bottom-4 lg:-left-4 lg:h-24 lg:w-24"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.55)]">
              <img
                src={heroKebab}
                alt="Tandoori kebabs roasting in a clay oven"
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-md border border-white/15 bg-black/40 px-4 py-2 backdrop-blur-sm">
                {/* <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                  Since opening in Provo
                </p> */}
                <p className="mt-0.5 text-sm font-semibold text-white">Authentic Indian dining</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 max-w-[240px] rounded-xl border border-white/10 bg-card p-6 shadow-2xl lg:-left-8">
              <p className="font-display text-lg font-bold leading-snug text-foreground">
                &ldquo;The finest Indian flavors in Utah Valley.&rdquo;
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                — Happy Guest
              </p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OFFERS & SPECIALS */}
      <section className="border-y border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
              Special Offers
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Dine, Celebrate &amp; Save
            </h2>
            <div className="rule-gold mx-auto my-5 max-w-[10rem]" />
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">
              Lunch, weekends and special occasions — always cooked fresh.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredOffers.map((o, i) => {
              const Icon = offerIcons[o.id];
              return (
              <ScrollReveal
                key={o.id}
                as="article"
                delay={i * 80}
                variant="scale"
                className={`group flex flex-col overflow-hidden rounded-lg border bg-card transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(28,21,17,0.12)] ${
                  o.featured
                    ? "border-primary/35 shadow-[0_4px_20px_-8px_rgba(197,92,38,0.15)]"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={o.img}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                  {o.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[8px] font-bold uppercase text-primary-foreground">
                      Popular
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="grid size-8 place-items-center rounded-md border border-border bg-secondary text-primary">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <p className="font-display text-lg font-extrabold text-primary">{o.price}</p>
                  </div>

                  <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.2em] text-primary">
                    {o.tag}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                    {o.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {o.desc}
                  </p>

                  <Link
                    to="/offers"
                    className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.16em] text-foreground transition group-hover:text-primary"
                  >
                    Details
                    <ArrowRight size={10} className="transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </ScrollReveal>
            );
            })}
          </div>

          <ScrollReveal className="mt-8 flex flex-wrap justify-center gap-3" delay={100}>
            <Link
              to="/offers"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground shadow-md shadow-primary/20 transition hover:brightness-110"
            >
              View All Offers
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/order"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-foreground shadow-sm transition hover:border-primary hover:text-primary"
            >
              Order Online
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="relative overflow-hidden bg-[#1c1511] text-[#f2ebe3]">
        <div className="absolute inset-0" aria-hidden>
          <img
            src={dishBiryani}
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1511] via-[#1c1511]/92 to-[#1c1511]/75" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(197,92,38,0.18),transparent_55%)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-28">
          <ScrollReveal variant="fade-right">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
              Visit Us
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Your table is waiting — tandoor-fired flavors tonight.
            </h2>
            <div className="my-8 h-px max-w-[14rem] bg-gradient-to-r from-primary/80 to-transparent" />
            <p className="max-w-lg text-base font-medium leading-relaxed text-[#f2ebe3]/75 sm:text-lg">
              Dine in with family, pick up after work, or reserve for a special evening.
              Weekends fill quickly — book ahead and let us take care of the rest.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" strokeWidth={2} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2ebe3]/50">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#f2ebe3]/90">
                    1600 N Freedom Blvd, Provo, UT 84604
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <Phone size={18} className="mt-0.5 shrink-0 text-primary" strokeWidth={2} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2ebe3]/50">
                    Call Us
                  </p>
                  <a
                    href="tel:+18019609048"
                    className="mt-1 block text-sm font-medium text-[#f2ebe3]/90 transition hover:text-primary"
                  >
                    +1 801-960-9048
                  </a>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={120}>
          <div className="rounded-xl border border-white/10 bg-[#241c17]/80 p-8 shadow-[0_24px_64px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-10">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-lg bg-primary/15 text-primary">
                <Calendar size={22} strokeWidth={2} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                  Reservations
                </p>
                <p className="mt-1 font-display text-xl font-bold text-white">
                  Secure your spot today
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[#f2ebe3]/65">
              Lunch, dinner and weekend gatherings — we welcome walk-ins when space allows,
              but reserving guarantees your preferred time.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/reserve"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-110"
              >
                Reserve a Table
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+18019609048"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#f2ebe3] transition hover:border-primary/50 hover:text-primary"
              >
                <Phone size={14} />
                Call 801-960-9048
              </a>
              <Link
                to="/order"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2ebe3]/70 transition hover:border-primary/40 hover:text-primary"
              >
                Order Takeout Online
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
