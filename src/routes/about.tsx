import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Leaf, Users } from "lucide-react";
import heroKebab from "../assets/hero-kebab.jpg";
import dishBiryani from "../assets/dish-biryani.jpg";
import dishButterChicken from "../assets/dish-butter-chicken.jpg";
import tandoor from "../assets/tandoor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tandoor Indian Cuisine, Provo UT" },
      {
        name: "description",
        content:
          "Our story — authentic North Indian recipes, clay-oven tandoori and warm hospitality in Provo, Utah.",
      },
      { property: "og:title", content: "About Tandoor Indian Cuisine" },
      {
        property: "og:description",
        content:
          "From Delhi kitchens to Utah Valley — flame-roasted kebabs, biryanis and curries made with care.",
      },
      { property: "og:image", content: heroKebab },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Flame,
    title: "Clay Tandoor",
    desc: "Chicken, naan and kebabs are fired in our traditional clay oven — the heart of every tandoori dish we serve.",
  },
  {
    icon: Leaf,
    title: "Fresh Masalas",
    desc: "Spices are stone-ground in small batches so each curry carries depth, warmth and balanced flavor.",
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    desc: "Every guest is welcomed like family — generous portions, attentive service and a table that feels like home.",
  },
] as const;

const milestones = [
  { value: "North", label: "Indian roots" },
  { value: "Daily", label: "Fresh prep" },
  { value: "Provo", label: "Utah Valley" },
] as const;

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-[#1c1511] text-[#f2ebe3]">
        <div className="absolute inset-0" aria-hidden>
          <img
            src={tandoor}
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1511]/80 via-[#1c1511]/90 to-[#1c1511]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,92,38,0.2),transparent_60%)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
            Our Story
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            About{" "}
            <span className="text-primary">Tandoor</span> Indian Cuisine
          </h1>
          <div className="rule-gold mx-auto my-8 max-w-[12rem]" />
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-[#f2ebe3]/75 sm:text-lg">
            Welcome to Tandoor — where flame, spice and tradition come together on every
            plate. We bring the soul of North Indian cooking to Provo with tandoori grills,
            fragrant biryanis and curries crafted with patience and pride.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
            Provo, Utah
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            From Delhi kitchens to Utah Valley.
          </h2>
          <div className="my-8 h-px max-w-[14rem] bg-gradient-to-r from-primary/80 to-transparent" />
          <p className="text-base font-medium leading-relaxed text-foreground/80 sm:text-lg">
            Tandoor Indian Cuisine was built on family recipes passed through generations —
            marinades rubbed by hand, biryanis layered with care and naan pulled fresh from
            a blazing clay oven.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether you are here for a quick lunch, a family dinner or a celebration with
            friends, we cook the way our mothers and grandmothers did — generously, with
            authentic spice and genuine warmth.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-8">
            {milestones.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-extrabold text-primary">{s.value}</p>
                <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/menu"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground shadow-md shadow-primary/15 transition hover:brightness-110"
          >
            View Our Menu
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="relative mx-auto mb-16 w-full max-w-md lg:mb-0 lg:max-w-none">
          <div
            className="pointer-events-none absolute -right-3 -top-3 z-10 h-20 w-20 border-r-2 border-t-2 border-primary/70 lg:-right-4 lg:-top-4 lg:h-24 lg:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-3 -left-3 z-10 h-20 w-20 border-b-2 border-l-2 border-primary/40 lg:-bottom-4 lg:-left-4 lg:h-24 lg:w-24"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-xl shadow-[0_24px_48px_-16px_rgba(28,21,17,0.2)]">
            <img
              src={heroKebab}
              alt="Tandoori kebabs roasting in a clay oven"
              loading="lazy"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-md border border-white/15 bg-black/40 px-4 py-2 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                Flame-roasted daily
              </p>
              <p className="mt-0.5 text-sm font-semibold text-white">Authentic tandoori</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-secondary/50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
              What We Stand For
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              The craft behind every plate
            </h2>
            <div className="rule-gold mx-auto my-6 max-w-[12rem]" />
            <p className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              Three principles guide everything we cook — from the first marinade to the
              final garnish on your table.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {values.map((v) => (
              <article
                key={v.title}
                className="group rounded-xl border border-border bg-card p-8 shadow-[0_4px_20px_-8px_rgba(28,21,17,0.08)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_40px_-12px_rgba(28,21,17,0.12)]"
              >
                <span className="grid size-12 place-items-center rounded-lg border border-border bg-secondary text-primary transition group-hover:border-primary/30 group-hover:bg-primary/5">
                  <v.icon size={22} strokeWidth={2} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine showcase */}
      <section className="relative overflow-hidden bg-[#1c1511] py-24 text-[#f2ebe3] lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(197,92,38,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-[0_20px_48px_-16px_rgba(0,0,0,0.45)] sm:row-span-2">
              <img
                src={dishBiryani}
                alt="Hyderabadi biryani"
                loading="lazy"
                width={600}
                height={800}
                className="aspect-[3/4] w-full object-cover sm:h-full sm:min-h-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.4)]">
              <img
                src={dishButterChicken}
                alt="Butter chicken curry"
                loading="lazy"
                width={600}
                height={400}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="font-display text-lg font-bold leading-snug text-white">
                &ldquo;Every spice chosen with care, every recipe honoring the regions
                that inspired it.&rdquo;
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f2ebe3]/50">
                Our kitchen philosophy
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
              Our Cuisine
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              A symphony of spice &amp; fire
            </h2>
            <div className="my-8 h-px max-w-[14rem] bg-gradient-to-r from-primary/80 to-transparent" />
            <p className="text-base font-medium leading-relaxed text-[#f2ebe3]/80 sm:text-lg">
              From sizzling tandoor specialties to rich, creamy curries and oven-fresh naan,
              our menu celebrates the full breadth of North Indian cooking.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#f2ebe3]/65">
              We source quality ingredients, prepare marinades daily and plate every dish
              with the same attention you would find in a fine family kitchen — bold
              flavors, balanced heat and portions meant to be shared.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/reserve"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition hover:brightness-110"
              >
                Reserve a Table
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#f2ebe3] transition hover:border-primary/50 hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
