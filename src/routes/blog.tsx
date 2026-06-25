import { createFileRoute, Link } from "@tanstack/react-router";
import heroDosa from "../assets/hero-dosa.jpg";
import filterCoffee from "../assets/filter-coffee.jpg";
import bananaLeaf from "../assets/banana-leaf.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Saaral South Indian Kitchen" },
      { name: "description", content: "Stories, recipes and traditions from Saaral — tandoor cooking, filter coffee, sadhya feasts and South Indian cuisine." },
      { property: "og:title", content: "Saaral Blog" },
      { property: "og:description", content: "Discover the history and flavors behind our kitchen." },
      { property: "og:image", content: heroDosa },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    slug: "essence-of-tandoor-cooking",
    date: "May 23, 2024",
    title: "Exploring the Essence of Tandoor Cooking",
    excerpt: "Discover the secrets of authentic tandoori cuisine — from the traditional clay oven to the aromatic spices that define this culinary art.",
    img: heroDosa,
  },
  {
    slug: "filter-coffee-ritual",
    date: "April 12, 2024",
    title: "The Madras Filter Coffee Ritual",
    excerpt: "Why we brew decoction in a brass filter, pour between tumbler and davara, and never rush the foam.",
    img: filterCoffee,
  },
  {
    slug: "banana-leaf-sadhya",
    date: "March 8, 2024",
    title: "A Guide to the Banana-Leaf Sadhya",
    excerpt: "Twelve dishes, one leaf, and the Kerala feast that turns Sunday brunch into a celebration.",
    img: bananaLeaf,
  },
];

function BlogPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">From Our Kitchen</p>
          <h1 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">Blog</h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
            Stories, traditions and the flavors that inspire our menu — stay updated with new dishes, events and exclusive offers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="group overflow-hidden rounded-sm border border-border bg-card/40">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.img} alt={post.title} loading="lazy" width={1200} height={750} className="size-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <time className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">{post.date}</time>
                <h2 className="mt-3 font-display text-2xl text-foreground">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{post.excerpt}</p>
                <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.25em] text-foreground/80 group-hover:text-primary">Read more →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-display text-4xl text-foreground">Hungry after reading?</h2>
          <p className="max-w-xl text-foreground/70">Book a table or order online for pickup and delivery across Provo.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/order" className="rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground">Order Online</Link>
            <Link to="/reserve" className="rounded-sm border border-border px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary">Reserve a Table</Link>
          </div>
        </div>
      </section>
    </>
  );
}
