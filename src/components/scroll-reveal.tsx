import { useEffect, useRef, type CSSProperties, type ElementType, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../lib/utils";

export type ScrollRevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "fade";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  delay?: number;
  duration?: number;
  as?: ElementType;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  as: Tag = "div",
  once = true,
  threshold = 0.12,
  rootMargin = "0px 0px -48px 0px",
  style,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("scroll-reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll-reveal-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("scroll-reveal-visible");
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return (
    <Tag
      ref={ref as never}
      className={cn("scroll-reveal", `scroll-reveal--${variant}`, className)}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-duration": `${duration}ms`,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}
