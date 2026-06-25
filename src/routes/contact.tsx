import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Saaral South Indian Kitchen, Provo UT" },
      { name: "description", content: "Reach Saaral in Provo, Utah. Reservations, catering inquiries, phone, email, hours and directions." },
      { property: "og:title", content: "Contact Saaral" },
      { property: "og:description", content: "Address, phone, email and catering inquiries for Saaral South Indian Kitchen." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">Find Saaral</p>
          <h1 className="mt-4 font-display text-6xl text-foreground sm:text-7xl">Come <span className="italic text-primary">say hello</span>.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/75">
            We’d love to connect — questions about the menu, reservations, or catering for your next event. Reach out and we’ll be in touch the same day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-10">
          <Info icon={<MapPin size={18} />} label="Address" lines={["1600 N Freedom Blvd", "Provo, UT 84604, United States"]} />
          <Info icon={<Phone size={18} />} label="Phone" lines={["+1 801-960-9048"]} href="tel:+18019609048" />
          <Info icon={<Mail size={18} />} label="Email" lines={["saaralprovo@gmail.com"]} href="mailto:saaralprovo@gmail.com" />
          <Info icon={<Clock size={18} />} label="Hours" lines={["Mon – Sat · 11 AM – 10 PM", "Sunday · 11 AM – 9 PM"]} />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">Follow us</p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-border text-foreground/80 hover:text-primary"><Instagram size={16} /></a>
              <a href="#" aria-label="Facebook" className="grid size-10 place-items-center rounded-full border border-border text-foreground/80 hover:text-primary"><Facebook size={16} /></a>
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-border bg-card p-8 md:p-10">
          {sent ? (
            <div className="flex flex-col items-center py-16 text-center">
              <div className="grid size-14 place-items-center rounded-full bg-primary/15 text-primary"><Check size={26} /></div>
              <h2 className="mt-6 font-display text-3xl text-foreground">Message sent</h2>
              <p className="mt-3 max-w-sm text-sm text-foreground/70">We’ll write back within a few hours. Nandri — thank you.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
              <h2 className="font-display text-3xl text-foreground">Send us a message</h2>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Name"><input required className={inputCls} placeholder="Your name" /></Field>
                <Field label="Email"><input required type="email" className={inputCls} placeholder="you@example.com" /></Field>
              </div>
              <Field label="Subject">
                <select className={inputCls} defaultValue="general">
                  <option value="general">General enquiry</option>
                  <option value="reservation">Reservation</option>
                  <option value="catering">Catering</option>
                  <option value="feedback">Feedback</option>
                </select>
              </Field>
              <Field label="Message"><textarea required rows={5} className={inputCls} placeholder="Tell us about your event, question or feedback…" /></Field>
              <button type="submit" className="w-full rounded-sm bg-primary py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground hover:opacity-90">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="aspect-[16/8] overflow-hidden rounded-sm border border-border">
            <iframe
              title="Saaral location map"
              src="https://www.google.com/maps?q=1600+N+Freedom+Blvd,+Provo,+UT+84604&output=embed"
              className="size-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
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

function Info({ icon, label, lines, href }: { icon: React.ReactNode; label: string; lines: string[]; href?: string }) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">{icon}</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">{label}</span>
      </div>
      <div className="mt-4 space-y-1 pl-[52px] font-display text-xl text-foreground">
        {lines.map((l) => <p key={l}>{l}</p>)}
      </div>
    </>
  );
  return href ? <a href={href} className="block transition hover:text-primary">{content}</a> : <div>{content}</div>;
}
