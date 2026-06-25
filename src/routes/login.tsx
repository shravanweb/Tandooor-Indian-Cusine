import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import logo from "../assets/logo.png";
import tandoor from "../assets/tandoor.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Tandoor Indian Cuisine" },
      {
        name: "description",
        content: "Sign in to your Tandoor Indian Cuisine account.",
      },
    ],
  }),
  component: LoginPage,
});

const inputCls =
  "w-full rounded-lg border border-border/80 bg-secondary/30 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/10";

const perks = [
  { icon: CalendarCheck, label: "Manage reservations" },
  { icon: ShoppingBag, label: "Track online orders" },
  { icon: Sparkles, label: "Member-only offers" },
] as const;

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <section className="grid min-h-[calc(100dvh-4.25rem)] lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-[#1c1511] text-[#f2ebe3] lg:flex lg:flex-col">
        <img
          src={tandoor}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-35"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c1511]/95 via-[#1c1511]/88 to-[#1c1511]/75" />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(197,92,38,0.22),transparent_55%)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="relative flex flex-1 flex-col justify-center p-10 xl:p-14">
          <div className="max-w-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
              Member Portal
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight xl:text-5xl">
              Welcome back to{" "}
              <span className="text-primary">Tandoor</span>
            </h1>
            <div className="my-7 h-px max-w-[14rem] bg-gradient-to-r from-primary/80 to-transparent" />
            <p className="text-base leading-relaxed text-[#f2ebe3]/75">
              Sign in to manage reservations, review past orders and unlock
              exclusive dining offers in Provo.
            </p>

            <ul className="mt-10 space-y-4">
              {perks.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-primary backdrop-blur-sm">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-medium text-[#f2ebe3]/85">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-12 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f2ebe3]/40">
            Provo, Utah · Authentic Indian dining
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-secondary/30 px-6 py-12 sm:px-10 lg:py-16">
        <div className="w-full max-w-[420px]">
          <div className="mb-8 lg:hidden">
            <Link to="/" className="inline-flex items-center rounded-md bg-black px-2.5 py-1.5">
              <img
                src={logo}
                alt="Tandoor Indian Cuisine"
                className="h-8 w-auto object-contain"
                width={140}
                height={36}
              />
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_16px_56px_-20px_rgba(28,21,17,0.14)] sm:p-10">
            <div className="mb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
                Account Access
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground">
                Sign in
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Enter your credentials to continue to your account.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <Field label="Email address">
                <div className="relative">
                  <Mail
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                    strokeWidth={2}
                  />
                  <input
                    required
                    type="email"
                    className={inputCls}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </Field>

              <Field label="Password">
                <div className="relative">
                  <Lock
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                    strokeWidth={2}
                  />
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    className={`${inputCls} pr-11`}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </Field>

              <div className="flex items-center justify-between gap-4 pt-1">
                <label className="flex cursor-pointer items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="size-4 rounded border-border text-primary focus:ring-primary/30"
                  />
                  <span className="text-xs font-medium text-muted-foreground">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-xs font-semibold text-primary transition hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground shadow-md shadow-primary/20 transition hover:brightness-110"
              >
                Sign In
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center" aria-hidden>
                <div className="w-full border-t border-border" />
              </div>
              <p className="relative mx-auto w-fit bg-card px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                New here?
              </p>
            </div>

            <p className="text-center text-sm leading-relaxed text-muted-foreground">
              Don&apos;t have an account yet?{" "}
              <Link to="/contact" className="font-semibold text-primary transition hover:underline">
                Contact our team
              </Link>{" "}
              or{" "}
              <Link to="/reserve" className="font-semibold text-primary transition hover:underline">
                reserve a table
              </Link>
              .
            </p>
          </div>

          <p className="mt-6 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Secure sign-in · Your data is protected
          </p>
        </div>
      </div>
    </section>
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
