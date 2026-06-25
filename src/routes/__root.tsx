import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";

import appCss from "../styles.css?url";
import heroDosa from "../assets/hero-dosa.jpg";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { UtensilLoader } from "../components/utensil-loader";
import { OfferModal } from "../components/offer-modal";
import { AppLoadProvider } from "../context/app-load";

const INITIAL_LOADER_MIN_MS = 1400;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The dish you’re looking for isn’t on today’s menu.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:opacity-90"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">This page didn’t load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong in the kitchen. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-sm bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-sm border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tandoor Indian Cuisine — Authentic Indian Restaurant in Provo, UT" },
      {
        name: "description",
        content:
          "Tandoor Indian Cuisine serves authentic Indian food in Provo, Utah. Dine-in, takeout, catering and online ordering.",
      },
      { property: "og:title", content: "Tandoor Indian Cuisine — Provo, UT" },
      { property: "og:description", content: "Authentic Indian restaurant in Provo. Reservations, menu and online ordering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tandoor Indian Cuisine — Provo, UT" },
      { name: "twitter:description", content: "Authentic Indian restaurant in Provo. Reservations, menu and online ordering." },
      { property: "og:image", content: heroDosa },
      { name: "twitter:image", content: heroDosa },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,600&family=Dancing+Script:wght@700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const isNavigating = useRouterState({ select: (s) => s.status === "pending" });
  const isHome = useRouterState({ select: (s) => s.location.pathname === "/" });
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [showNavLoader, setShowNavLoader] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();

    const finishInitialLoad = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, INITIAL_LOADER_MIN_MS - elapsed);
      window.setTimeout(() => setInitialLoadComplete(true), remaining);
    };

    if (document.readyState === "complete") {
      finishInitialLoad();
    } else {
      window.addEventListener("load", finishInitialLoad, { once: true });
      return () => window.removeEventListener("load", finishInitialLoad);
    }
  }, []);

  useEffect(() => {
    if (!initialLoadComplete) return;

    if (isNavigating) {
      setShowNavLoader(true);
      return;
    }

    const timer = window.setTimeout(() => setShowNavLoader(false), 400);
    return () => window.clearTimeout(timer);
  }, [isNavigating, initialLoadComplete]);

  const showLoader = !initialLoadComplete || showNavLoader;

  return (
    <QueryClientProvider client={queryClient}>
      <AppLoadProvider initialLoadComplete={initialLoadComplete}>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <SiteHeader />
          {showLoader && (
            <UtensilLoader
              message={
                initialLoadComplete
                  ? "Warming up the kitchen…"
                  : "Welcome to Tandoor…"
              }
            />
          )}
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
          {isHome && <OfferModal />}
        </div>
      </AppLoadProvider>
    </QueryClientProvider>
  );
}
