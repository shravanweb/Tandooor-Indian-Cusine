import { createFileRoute, Link } from "@tanstack/react-router";
import bananaLeaf from "../assets/banana-leaf.jpg";
import dishBiryani from "../assets/dish-biryani.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Saaral South Indian Kitchen, Provo UT" },
      { name: "description", content: "Our story — authentic South Indian recipes, slow-fermented batters and family traditions brought to Provo, Utah." },
      { property: "og:title", content: "About Saaral" },
      { property: "og:description", content: "From Madras tiffin shops to a Provo banana leaf — our culinary journey." },
      { property: "og:image", content: bananaLeaf },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Slow fermentation", desc: "Dosa and idli batters rest for thirty-six hours — the patience that makes every crepe crisp and every idli pillowy." },
  { title: "Hand-ground masalas", desc: "Spices are stone-ground in small batches so each curry carries warmth without overwhelming the plate." },
  { title: "Banana-leaf service", desc: "Thalis and sadhyas arrive on fresh leaves, the way meals are served across Tamil Nadu and Kerala." },
  { title: "Filter coffee ritual", desc: "Brass tumbler, decoction brewed slow, milk frothed by hand — the Madras afternoon, every day." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">Our Story</p>
          <h1 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">About <span className="italic text-primary">Saaral</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
            Welcome to Saaral — where every bite tells a story of flavor and tradition. Our culinary journey invites you to savor authentic South Indian delicacies, crafted to transport you to the vibrant kitchens of India.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">Provo, Utah</p>
          <h2 className="mt-3 font-display text-5xl leading-tight text-foreground">From a Madras tiffin shop to Utah Valley.</h2>
          <div className="rule-gold my-8 max-w-xs" />
          <p className="text-base leading-relaxed text-foreground/80">
            Saaral — meaning a fine, gentle drizzle in Tamil — was born from family recipes passed down four generations. We ferment our batters patiently, stone-grind our masalas, and serve every thali on a fresh banana leaf, just as it is done back home.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/70">
            Whether it is a quick tiffin lunch or a twelve-course Onam sadhya, we cook the way grandmothers do — generously, patiently, and with a tumbler of filter coffee on the side.
          </p>
          <Link to="/menu" className="mt-8 inline-block rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground hover:opacity-90">
            View Our Menu
          </Link>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-border">
          <img src={bananaLeaf} alt="Traditional banana-leaf thali" loading="lazy" width={900} height={1100} className="size-full object-cover" />
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">What We Stand For</p>
            <h2 className="mt-3 font-display text-4xl text-foreground">The craft behind every plate</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-sm border border-border bg-background p-8">
                <h3 className="font-display text-2xl text-primary">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div className="aspect-[16/10] overflow-hidden rounded-sm ring-1 ring-border">
          <img src={dishBiryani} alt="Hyderabadi biryani" loading="lazy" width={1200} height={750} className="size-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-4xl text-foreground">A symphony of spices</h2>
          <p className="mt-4 text-foreground/75 leading-relaxed">
            From sizzling tandoor specialties to aromatic curries bursting with richness, our menu is a testament to the artistry of Indian cooking. Indulge in dishes where every spice is chosen with care and every recipe honors the regions that inspired it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/reserve" className="rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground">Reserve a Table</Link>
            <Link to="/contact" className="rounded-sm border border-border px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
