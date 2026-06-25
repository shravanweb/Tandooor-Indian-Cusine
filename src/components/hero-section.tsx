import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import heroKebab from "../assets/hero-kebab.jpg";
import dishBiryani from "../assets/dish-biryani.jpg";
import heroDosa from "../assets/hero-dosa.jpg";

const slides = [
  {
    image: heroKebab,
    label: "Tandoori",
    alt: "Tandoori kebabs fresh from the clay oven",
    eyebrow: "Tandoor Specialties",
    title: "Flame-kissed",
    accent: "kebabs",
    rest: "from our clay oven.",
    desc: "Succulent seekh kebabs and tandoori platters, marinated overnight and roasted at blazing heat.",
  },
  {
    image: dishBiryani,
    label: "Biryani",
    alt: "Fragrant Hyderabadi biryani",
    eyebrow: "Signature Biryani",
    title: "Aromatic",
    accent: "biryani",
    rest: "layer by layer.",
    desc: "Long-grain basmati, saffron and slow-cooked spices — every grain tells a story.",
  },
  {
    image: heroDosa,
    label: "Classics",
    alt: "Crispy dosa on a banana leaf",
    eyebrow: "Now Open · Provo, UT",
    title: "Authentic",
    accent: "Indian",
    rest: "flavors in Provo.",
    desc: "From tandoori grills to rich curries and fresh naan — a true taste of India in Utah Valley.",
  },
] as const;

const INTERVAL_MS = 5500;

const stats = [
  { value: "Clay", label: "Tandoor oven" },
  { value: "Fresh", label: "Hand-ground spices" },
  { value: "Veg+", label: "Non-veg menu" },
] as const;

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (dir: -1 | 1) =>
    setActive((i) => (i + dir + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [paused]);

  const slide = slides[active];

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-width slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <img
            key={s.alt}
            src={s.image}
            alt={s.alt}
            width={1920}
            height={1080}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-out ${
              i === active ? "opacity-100" : "opacity-0"
            } ${i === active ? "hero-ken-burns" : ""}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />
      </div>

      {/* Side navigation arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition hover:border-primary hover:bg-primary/20 lg:left-8 lg:size-12"
      >
        <ChevronLeft size={22} strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm transition hover:border-primary hover:bg-primary/20 lg:right-8 lg:size-12"
      >
        <ChevronRight size={22} strokeWidth={2} />
      </button>

      {/* Vertical slide index — desktop */}
      <div className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-5 lg:flex xl:right-10">
        {slides.map((s, i) => (
          <button
            key={s.label}
            type="button"
            aria-label={`Go to ${s.label}`}
            onClick={() => setActive(i)}
            className="group flex items-center gap-3"
          >
            <span
              className={`h-px transition-all duration-500 ${
                i === active ? "w-10 bg-primary" : "w-5 bg-white/25 group-hover:bg-white/50"
              }`}
            />
            <span
              className={`min-w-[1.25rem] text-left text-[11px] font-bold tabular-nums transition-colors ${
                i === active ? "text-primary" : "text-white/35 group-hover:text-white/70"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[min(88vh,820px)] max-w-7xl flex-col justify-center px-6 pb-28 pt-24 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="max-w-2xl pr-4 lg:pr-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span
              key={slide.eyebrow}
              className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary"
            >
              {slide.eyebrow}
            </span>
          </div>

          <h1
            key={`h-${active}`}
            className="hero-text-in mt-4 font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            {slide.title}{" "}
            <span className="text-primary">{slide.accent}</span>
            {slide.rest ? (
              <>
                <br className="hidden sm:block" />
                <span className="text-white"> {slide.rest}</span>
              </>
            ) : null}
          </h1>

          <p
            key={`d-${active}`}
            className="hero-text-in mt-5 max-w-lg text-base font-medium leading-relaxed text-white/80 sm:text-lg"
          >
            {slide.desc}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/reserve"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground shadow-lg shadow-black/30 transition hover:brightness-110"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition hover:border-primary hover:bg-primary/20"
            >
              Explore Menu
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/15 pt-7">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-xl font-extrabold leading-none text-primary">
                  {s.value}
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal bottom slider controls */}
      <div className="absolute inset-x-0 bottom-0 z-30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 px-6 pb-5 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.label}
                type="button"
                aria-label={`View ${s.label}`}
                onClick={() => setActive(i)}
                className={`relative overflow-hidden rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  i === active
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-white/10 text-white/65 hover:bg-white/20 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:flex">
              <MapPin size={12} className="text-primary" />
              Provo, Utah
            </div>
            <span className="font-mono text-sm font-bold text-white/40">
              <span className="text-primary">{String(active + 1).padStart(2, "0")}</span>
              <span className="mx-1">/</span>
              <span>{String(slides.length).padStart(2, "0")}</span>
            </span>
          </div>
        </div>

        {/* Segmented progress bars */}
        <div className="flex h-1">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className="relative flex-1 bg-white/10 transition hover:bg-white/20"
            >
              {i === active && (
                <span
                  key={paused ? "paused" : active}
                  className="hero-progress absolute inset-y-0 left-0 bg-primary"
                  style={{ animationDuration: `${INTERVAL_MS}ms` }}
                />
              )}
              {i < active && <span className="absolute inset-0 bg-primary/80" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
