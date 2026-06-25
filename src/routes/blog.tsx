import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { ScrollReveal } from "../components/scroll-reveal";
import heroKebab from "../assets/hero-kebab.jpg";
import dishBiryani from "../assets/dish-biryani.jpg";
import dishButterChicken from "../assets/dish-butter-chicken.jpg";
import tandoor from "../assets/tandoor.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Tandoor Indian Cuisine, Provo UT" },
      {
        name: "description",
        content:
          "Stories, recipes and traditions from Tandoor Indian Cuisine — tandoor cooking, biryani, curries and North Indian flavors.",
      },
      { property: "og:title", content: "Tandoor Indian Cuisine Blog" },
      {
        property: "og:description",
        content: "Discover the history and flavors behind our Provo kitchen.",
      },
      { property: "og:image", content: heroKebab },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    slug: "essence-of-tandoor-cooking",
    date: "May 23, 2024",
    category: "Tandoor",
    readTime: "5 min read",
    title: "The Essence of Tandoor Cooking",
    excerpt:
      "From clay-oven heat to yogurt marinades — how we fire kebabs, naan and tandoori chicken the authentic North Indian way.",
    img: tandoor,
    featured: true,
  },
  {
    slug: "hyderabadi-biryani-guide",
    date: "April 12, 2024",
    category: "Biryani",
    readTime: "4 min read",
    title: "A Guide to Hyderabadi Biryani",
    excerpt:
      "Layered basmati, saffron and slow dum cooking — the techniques behind our most fragrant rice dish.",
    img: dishBiryani,
  },
  {
    slug: "butter-chicken-story",
    date: "March 8, 2024",
    category: "Recipes",
    readTime: "6 min read",
    title: "Butter Chicken: A North Indian Classic",
    excerpt:
      "Tender chicken in a rich tomato-cream gravy — the story of a dish that became a global favorite.",
    img: dishButterChicken,
  },
  {
    slug: "naan-from-clay-oven",
    date: "February 14, 2024",
    category: "Kitchen",
    readTime: "3 min read",
    title: "Naan Fresh from the Clay Oven",
    excerpt:
      "Why hand-rolled naan pulled straight from a blazing tandoor makes all the difference at the table.",
    img: heroKebab,
  },
] as const;

const featured = posts.find((p) => p.featured) ?? posts[0];
const rest = posts.filter((p) => !p.featured);

function BlogCard({ post, index }: { post: (typeof posts)[number]; index: number }) {
  return (
    <ScrollReveal as="article" delay={index * 90} variant="fade-up" className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[0_4px_20px_-8px_rgba(28,21,17,0.08)] transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_40px_-12px_rgba(28,21,17,0.12)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={post.img}
          alt={post.title}
          loading="lazy"
          width={800}
          height={500}
          className="size-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span className="text-border">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock size={11} />
            {post.readTime}
          </span>
        </div>

        <h2 className="mt-3 font-display text-xl font-bold leading-snug text-foreground transition group-hover:text-primary sm:text-2xl">
          {post.title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground transition group-hover:text-primary">
          Read Article
          <ArrowRight size={12} className="transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </ScrollReveal>
  );
}

function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-[#1c1511] text-[#f2ebe3]">
        <div className="absolute inset-0" aria-hidden>
          <img src={heroKebab} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c1511]/80 via-[#1c1511]/92 to-[#1c1511]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,92,38,0.16),transparent_60%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:py-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
            From Our Kitchen
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Stories &amp; <span className="text-primary">Flavors</span>
          </h1>
          <div className="rule-gold mx-auto my-7 max-w-[12rem]" />
          <p className="text-base font-medium leading-relaxed text-[#f2ebe3]/75 sm:text-lg">
            Recipes, traditions and the craft behind every plate — insights from
            Tandoor Indian Cuisine in Provo.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <ScrollReveal>
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
          Featured
        </p>

        <article className="group mt-5 overflow-hidden rounded-xl border border-primary/25 bg-card shadow-[0_8px_32px_-12px_rgba(197,92,38,0.15)] lg:grid lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[22rem]">
            <img
              src={featured.img}
              alt={featured.title}
              loading="eager"
              width={1200}
              height={750}
              className="size-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
            <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary-foreground">
              Editor&apos;s Pick
            </span>
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-primary">{featured.category}</span>
              <span className="text-border">·</span>
              <time dateTime={featured.date}>{featured.date}</time>
              <span className="text-border">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={11} />
                {featured.readTime}
              </span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>

            <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-foreground transition group-hover:text-primary">
              Read Full Article
              <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
            </span>
          </div>
        </article>
        </ScrollReveal>
      </section>

      {/* Post grid */}
      <section className="border-t border-border bg-secondary/40 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
                Latest Articles
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                Recent from the blog
              </h2>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              {posts.length} articles
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#1c1511] py-16 text-[#f2ebe3] lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(197,92,38,0.12),transparent_55%)]"
          aria-hidden
        />
        <ScrollReveal className="relative mx-auto max-w-2xl px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
            Taste It Yourself
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            Hungry after reading?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#f2ebe3]/70 sm:text-base">
            Book a table or order online — experience the flavors from our kitchen
            in Provo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/order"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition hover:brightness-110"
            >
              Order Online
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/reserve"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#f2ebe3] transition hover:border-primary/50 hover:text-primary"
            >
              Reserve a Table
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
