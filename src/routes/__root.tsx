import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

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
      { title: "Saaral — Authentic South Indian Cuisine in Provo, UT" },
      {
        name: "description",
        content:
          "Saaral serves authentic South Indian cuisine — dosa, idli, biryani, filter coffee — in Provo, Utah. Reservations, catering and daily specials.",
      },
      { property: "og:title", content: "Saaral — Authentic South Indian Cuisine in Provo, UT" },
      { property: "og:description", content: "Tandoor Provo Online is a website for an Indian restaurant offering online reservations and menu access." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Saaral — Authentic South Indian Cuisine in Provo, UT" },
      { name: "description", content: "Tandoor Provo Online is a website for an Indian restaurant offering online reservations and menu access." },
      { name: "twitter:description", content: "Tandoor Provo Online is a website for an Indian restaurant offering online reservations and menu access." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5f0eb460-8871-4103-9272-a87eaefa0d0c/id-preview-07bd54ed--3b37dfe8-0281-44c2-ad5a-9ab79cebf94a.lovable.app-1782366078133.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5f0eb460-8871-4103-9272-a87eaefa0d0c/id-preview-07bd54ed--3b37dfe8-0281-44c2-ad5a-9ab79cebf94a.lovable.app-1782366078133.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
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
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
