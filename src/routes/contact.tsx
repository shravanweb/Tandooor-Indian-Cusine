import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Check, ArrowRight, Calendar } from "lucide-react";
import { ScrollReveal } from "../components/scroll-reveal";
import heroKebab from "../assets/hero-kebab.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tandoor Indian Cuisine, Provo UT" },
      {
        name: "description",
        content:
          "Send a message to Tandoor Indian Cuisine in Provo, Utah. Reservations, catering inquiries and general questions.",
      },
      { property: "og:title", content: "Contact Tandoor Indian Cuisine" },
      {
        property: "og:description",
        content: "Get in touch with Tandoor Indian Cuisine — reservations, catering and enquiries.",
      },
      { property: "og:image", content: heroKebab },
    ],
  }),
  component: ContactPage,
});

const inputCls =
  "w-full rounded-lg border border-border/80 bg-secondary/40 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/80 transition focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/10";

function ContactPage() {
  const [sent, setSent] = useState(false);

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
            Get in Touch
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Come <span className="text-primary">say hello</span>
          </h1>
          <div className="rule-gold mx-auto my-7 max-w-[12rem]" />
          <p className="text-base font-medium leading-relaxed text-[#f2ebe3]/75 sm:text-lg">
            Questions about the menu, reservations or catering — we&apos;ll get back
            to you the same day.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+18019609048"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition hover:brightness-110"
            >
              <Phone size={14} />
              Call Us
            </a>
            <Link
              to="/reserve"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f2ebe3] transition hover:border-primary/50 hover:text-primary"
            >
              <Calendar size={14} />
              Reserve
            </Link>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-background py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            <ScrollReveal variant="fade-right" className="rounded-2xl border border-border bg-card p-8 shadow-[0_12px_48px_-16px_rgba(28,21,17,0.12)] sm:p-10">
              {sent ? (
                <div className="flex min-h-[24rem] flex-col items-center justify-center py-12 text-center lg:min-h-full">
                  <div className="grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check size={28} strokeWidth={2} />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-extrabold text-foreground">
                    Message sent
                  </h2>
                  <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                    Thank you — we&apos;ll write back within a few hours.
                  </p>
                  <Link
                    to="/menu"
                    className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary"
                  >
                    Browse our menu
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="flex h-full flex-col"
                >
                  <div className="mb-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
                      Send a Message
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                      How can we help?
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Fill out the form and our team will get back to you shortly.
                    </p>
                  </div>

                  <div className="flex-1 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      <Field label="Name">
                        <input required className={inputCls} placeholder="Your name" />
                      </Field>
                      <Field label="Email">
                        <input
                          required
                          type="email"
                          className={inputCls}
                          placeholder="you@example.com"
                        />
                      </Field>
                    </div>

                    <Field label="Subject">
                      <select className={inputCls} defaultValue="general">
                        <option value="general">General enquiry</option>
                        <option value="reservation">Reservation</option>
                        <option value="catering">Catering</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </Field>

                    <Field label="Message">
                      <textarea
                        required
                        rows={5}
                        className={`${inputCls} min-h-[7.5rem] resize-y`}
                        placeholder="Tell us about your event, question or feedback…"
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground shadow-md shadow-primary/20 transition hover:brightness-110"
                  >
                    Send Message
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={100} className="flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_12px_48px_-16px_rgba(28,21,17,0.12)] lg:min-h-0">
              <div className="flex items-end justify-between gap-4 border-b border-border px-6 py-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
                    Directions
                  </p>
                  <h2 className="mt-1 font-display text-xl font-extrabold text-foreground sm:text-2xl">
                    Find us in Provo
                  </h2>
                </div>
                <a
                  href="https://maps.google.com/?q=1600+N+Freedom+Blvd,+Provo,+UT+84604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary transition hover:opacity-80"
                >
                  Open Maps
                  <ArrowRight size={12} />
                </a>
              </div>
              <iframe
                title="Tandoor Indian Cuisine location"
                src="https://www.google.com/maps?q=1600+N+Freedom+Blvd,+Provo,+UT+84604&output=embed"
                className="min-h-[18rem] w-full flex-1 border-0"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
