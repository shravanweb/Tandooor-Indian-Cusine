import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { modalOffer } from "../data/offers";
import { useAppLoad } from "../context/app-load";

const ORDER_URL =
  "https://fromtherestaurant.com/tandoor-indian-cuisine-provo/menu/1600-N-Freedom-Blvd/";

export function OfferModal() {
  const { initialLoadComplete } = useAppLoad();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!initialLoadComplete) return;
    const timer = window.setTimeout(() => setOpen(true), 350);
    return () => window.clearTimeout(timer);
  }, [initialLoadComplete]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="offer-modal-backdrop fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Tandoori special offer"
      onClick={close}
    >
      <div
        className="offer-modal-panel offer-poster relative aspect-[3/4] w-full max-w-[380px] select-none overflow-hidden rounded-2xl shadow-[0_28px_72px_-16px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="offer-poster-bg absolute inset-0" aria-hidden />

        <div
          className="pointer-events-none absolute -right-10 top-16 size-44 rounded-full bg-orange-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-8 bottom-24 size-36 rounded-full bg-red-600/15 blur-2xl"
          aria-hidden
        />

        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-30 grid size-8 place-items-center rounded-full bg-black/45 text-white/90 backdrop-blur-sm transition hover:bg-black/65"
          aria-label="Close offer"
        >
          <X size={16} />
        </button>

        <div className="relative z-10 px-6 pt-8">
          <p className="offer-poster-script text-[2.5rem] leading-none text-white">
            {modalOffer.scriptLine}
          </p>
          <p className="offer-poster-headline text-[3rem] leading-[0.88] tracking-tight">
            {modalOffer.headline}
          </p>
        </div>

        <div className="offer-poster-badge absolute right-5 top-[40%] z-20 flex size-[5.25rem] flex-col items-center justify-center rounded-full border-[3px] border-orange-200/50 bg-gradient-to-br from-[#fb923c] via-[#ea580c] to-[#c2410c] shadow-[0_10px_28px_rgba(234,88,12,0.5)]">
          <span className="font-display text-[1.65rem] font-black leading-none text-white">
            {modalOffer.badge}
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
            {modalOffer.badgeLabel}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-[4.25rem] z-10 flex justify-center px-3">
          <img
            src={modalOffer.img}
            alt=""
            className="offer-poster-food w-[94%] max-w-[340px] object-contain"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 bg-gradient-to-t from-[#0a0706] via-[#0a0706]/95 to-transparent px-5 pb-5 pt-12">
          <a
            href={`tel:${modalOffer.phone.replace(/\s/g, "")}`}
            className="flex min-w-0 items-center gap-2 text-white"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white shadow-md">
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                <path d="M6.6 10.8c1.5 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </span>
            <span className="truncate text-[11px] font-bold sm:text-xs">{modalOffer.phone}</span>
          </a>

          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="shrink-0 rounded-lg bg-gradient-to-r from-[#f97316] to-[#ea580c] px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_4px_18px_rgba(234,88,12,0.45)] transition hover:brightness-110"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}
