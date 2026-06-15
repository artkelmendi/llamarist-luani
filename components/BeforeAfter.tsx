"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import CarMark from "./CarMark";

export default function BeforeAfter({
  src,
  className = "",
}: {
  src?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(52);
  const [beforeFailed, setBeforeFailed] = useState(false);
  const [afterFailed, setAfterFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  return (
    <div
      ref={ref}
      data-cursor
      className={`group relative aspect-[16/11] w-full select-none overflow-hidden rounded-[1.5rem] border border-gold-400/15 shadow-card ${className}`}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
      onTouchStart={(e) => move(e.touches[0].clientX)}
    >
      {/* AFTER */}
      <div className="absolute inset-0">
        {src && !afterFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt="Pas riparimit"
            className="h-full w-full object-cover"
            onError={() => setAfterFailed(true)}
            draggable={false}
          />
        ) : (
          <CarMark variant="after" className="h-full w-full" />
        )}
        <span className="absolute right-4 top-4 rounded-full border border-gold-300/40 bg-coal-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-luxe text-gold-200 backdrop-blur">
          Pas
        </span>
      </div>

      {/* BEFORE */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {src && !beforeFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt="Para riparimit"
            className="h-full w-full object-cover [filter:grayscale(0.9)_brightness(0.6)_contrast(1.05)]"
            onError={() => setBeforeFailed(true)}
            draggable={false}
          />
        ) : (
          <CarMark variant="before" className="h-full w-full" />
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-coal-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-luxe text-cream/70 backdrop-blur">
          Para
        </span>
      </div>

      {/* Handle */}
      <div className="absolute inset-y-0 z-10 w-px bg-gold-300/90 shadow-[0_0_24px_rgba(216,175,106,0.7)]" style={{ left: `${pos}%` }}>
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-300 text-coal-950 shadow-gold ring-4 ring-gold-400/20"
        >
          <MoveHorizontal className="h-5 w-5" />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-coal-950/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-luxe text-cream/70 backdrop-blur transition-opacity duration-500 group-hover:opacity-0">
        Tërhiq ←→
      </div>
    </div>
  );
}
