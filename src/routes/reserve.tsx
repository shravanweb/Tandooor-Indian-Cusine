import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import heroKebab from "../assets/hero-kebab.jpg";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Saaral South Indian Kitchen, Provo" },
      { name: "description", content: "Book a table at Saaral, Provo. Dine-in reservations for 1–20 guests, seven days a week." },
      { property: "og:title", content: "Reserve a Table at Saaral" },
      { property: "og:description", content: "Book a table at Saaral South Indian Kitchen in Provo, Utah." },
    ],
  }),
  component: ReservePage,
});

function ReservePage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="relative overflow-hidden">
      <img src={heroKebab} alt="" width={1600} height={900} className="absolute inset-0 size-full object-cover opacity-15" loading="lazy" />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">Reservations</p>
          <h1 className="mt-4 font-display text-6xl leading-[1] text-foreground">Save your seat at <span className="italic text-primary">the leaf</span>.</h1>
          <p className="mt-6 max-w-md text-foreground/75">
            Our dining room seats 24. We hold tables for 15 minutes past your reservation time — for parties over 8, please call us directly.
          </p>

          <div className="mt-10 space-y-5 border-t border-border pt-8 text-sm">
            <Row label="Address" value="1600 N Freedom Blvd, Provo, UT 84604" />
            <Row label="Phone" value="+1 801-960-9048" />
            <Row label="Hours · Mon–Sat" value="11 AM – 10 PM" />
            <Row label="Hours · Sunday" value="11 AM – 9 PM" />
          </div>
        </div>

        <div className="rounded-sm border border-border bg-card p-8 md:p-10">
          {sent ? (
            <div className="flex flex-col items-center py-16 text-center">
              <div className="grid size-14 place-items-center rounded-full bg-primary/15 text-primary"><Check size={26} /></div>
              <h2 className="mt-6 font-display text-3xl text-foreground">Reservation requested</h2>
              <p className="mt-3 max-w-sm text-sm text-foreground/70">
                Thank you — we’ll confirm your table by phone or email within the hour.
              </p>
              <button onClick={() => setSent(false)} className="mt-8 text-[10px] uppercase tracking-[0.25em] text-primary hover:underline">
                Make another reservation
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl text-foreground">Book a table</h2>

              <Field label="Full name"><input required type="text" className={inputCls} placeholder="Your name" /></Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Phone"><input required type="tel" className={inputCls} placeholder="(801) 555-0100" /></Field>
                <Field label="Email"><input required type="email" className={inputCls} placeholder="you@example.com" /></Field>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Field label="Date"><input required type="date" className={inputCls} /></Field>
                <Field label="Time">
                  <select required defaultValue="" className={inputCls}>
                    <option value="" disabled>Select</option>
                    {["11:30","12:00","12:30","13:00","18:00","18:30","19:00","19:30","20:00","20:30"].map(t => <option key={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Guests">
                  <select required defaultValue="2" className={inputCls}>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Special requests (optional)">
                <textarea rows={3} className={inputCls} placeholder="Allergies, occasion, seating preference…" />
              </Field>

              <button type="submit" className="w-full rounded-sm bg-primary py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition hover:opacity-90">
                Request Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <span className="font-display text-lg text-foreground">{value}</span>
    </div>
  );
}
