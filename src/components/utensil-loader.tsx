import { Sparkles, UtensilsCrossed } from "lucide-react";

type UtensilLoaderProps = {
  message?: string;
  fullScreen?: boolean;
};

export function UtensilLoader({
  message = "Preparing your experience…",
  fullScreen = true,
}: UtensilLoaderProps) {
  return (
    <div
      className={
        fullScreen
          ? "fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm"
          : "flex min-h-[50vh] items-center justify-center py-24"
      }
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className="relative flex flex-col items-center">
        {/* Sparks */}
        <Sparkles
          size={14}
          className="loader-spark loader-spark-1 absolute -left-10 top-2 text-primary"
          strokeWidth={2}
        />
        <Sparkles
          size={12}
          className="loader-spark loader-spark-2 absolute -right-9 top-6 text-primary/80"
          strokeWidth={2}
        />
        <Sparkles
          size={10}
          className="loader-spark loader-spark-3 absolute -left-6 bottom-10 text-primary/70"
          strokeWidth={2}
        />
        <Sparkles
          size={13}
          className="loader-spark loader-spark-4 absolute -right-7 bottom-6 text-primary"
          strokeWidth={2}
        />
        <Sparkles
          size={9}
          className="loader-spark loader-spark-5 absolute left-1/2 -top-8 -translate-x-1/2 text-primary/60"
          strokeWidth={2}
        />

        <div className="loader-utensils-ring relative grid size-24 place-items-center rounded-full border border-primary/20 bg-card shadow-[0_8px_32px_-8px_rgba(197,92,38,0.25)]">
          <div className="loader-utensils-glow absolute inset-2 rounded-full bg-primary/5" />
          <UtensilsCrossed
            size={36}
            className="loader-utensils-icon relative text-primary"
            strokeWidth={1.75}
          />
        </div>

        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
          Tandoor Indian Cuisine
        </p>
        <p className="mt-2 text-sm font-medium text-muted-foreground">{message}</p>

        <div className="mt-6 flex gap-1.5">
          <span className="loader-dot size-1.5 rounded-full bg-primary" />
          <span className="loader-dot loader-dot-2 size-1.5 rounded-full bg-primary" />
          <span className="loader-dot loader-dot-3 size-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
