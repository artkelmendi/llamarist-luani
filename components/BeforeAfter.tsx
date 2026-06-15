"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type AnimationPlaybackControls,
} from "framer-motion";
import { MoveHorizontal, Sparkles } from "lucide-react";
import CarMark from "./CarMark";

/**
 * Reveal logic (new): the divider FOLLOWS the cursor while hovering — no click or
 * drag needed. On scroll-in it plays a one-time intro sweep to advertise the
 * interaction, and the whole panel tilts in 3D with layered depth. Touch devices
 * fall back to drag.
 */
export default function BeforeAfter({
  src,
  className = "",
}: {
  src?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [beforeFailed, setBeforeFailed] = useState(false);
  const [afterFailed, setAfterFailed] = useState(false);

  const coarse = useRef(false);
  const reduce = useRef(false);
  const introCtrl = useRef<AnimationPlaybackControls | null>(null);
  const userTook = useRef(false);
  const dragging = useRef(false);

  // Divider position (0..100) — % of the panel revealed as "after".
  const pos = useMotionValue(52);
  const posSpring = useSpring(pos, { stiffness: 240, damping: 32, mass: 0.4 });
  const clip = useTransform(posSpring, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(posSpring, (v) => `${v}%`);

  // 3D tilt
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rxs = useSpring(rx, { stiffness: 150, damping: 18, mass: 0.6 });
  const rys = useSpring(ry, { stiffness: 150, damping: 18, mass: 0.6 });
  const gx = useTransform(rys, [-6, 6], ["18%", "82%"]);
  const glare = useMotionTemplate`linear-gradient(105deg, transparent, rgba(246,236,216,0.10) ${gx}, transparent)`;

  useEffect(() => {
    coarse.current = !window.matchMedia("(pointer: fine)").matches;
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // One-time intro sweep when the panel enters the viewport.
  useEffect(() => {
    if (!inView || reduce.current) return;
    introCtrl.current = animate(pos, [52, 82, 20, 52], {
      duration: 2.8,
      ease: [0.16, 1, 0.3, 1],
      times: [0, 0.34, 0.72, 1],
    });
    return () => introCtrl.current?.stop();
  }, [inView, pos]);

  function setFromClientX(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    pos.set(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }

  function onPointerMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;

    if (!coarse.current) {
      rx.set((0.5 - ny) * 8);
      ry.set((nx - 0.5) * 10);
      if (!reduce.current) {
        if (!userTook.current) {
          userTook.current = true;
          introCtrl.current?.stop();
        }
        pos.set(Math.min(100, Math.max(0, nx * 100))); // follow cursor
      }
    }
  }

  function onPointerLeave() {
    rx.set(0);
    ry.set(0);
    dragging.current = false;
  }

  return (
    <div className={`[perspective:1300px] ${className}`}>
      <motion.div
        ref={ref}
        data-cursor
        style={{ rotateX: rxs, rotateY: rys, transformStyle: "preserve-3d" }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onTouchStart={(e) => {
          dragging.current = true;
          introCtrl.current?.stop();
          setFromClientX(e.touches[0].clientX);
        }}
        onTouchMove={(e) => dragging.current && setFromClientX(e.touches[0].clientX)}
        onTouchEnd={() => (dragging.current = false)}
        className="group relative aspect-[16/11] w-full select-none overflow-hidden rounded-[1.6rem] border border-gold-400/20 bg-coal-900 shadow-card [transform-style:preserve-3d]"
      >
        {/* BEFORE — full background (damaged) */}
        <div className="absolute inset-0" style={{ transform: "translateZ(0px)" }}>
          {src && !beforeFailed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt="Para riparimit"
              className="h-full w-full object-cover [filter:grayscale(0.92)_brightness(0.55)_contrast(1.08)]"
              onError={() => setBeforeFailed(true)}
              draggable={false}
            />
          ) : (
            <CarMark variant="before" className="h-full w-full" />
          )}
          <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-coal-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-luxe text-cream/70 backdrop-blur">
            Para
          </span>
        </div>

        {/* AFTER — revealed from the left following the divider (repaired) */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: clip, transform: "translateZ(40px)" }}
        >
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
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-coal-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-luxe text-gold-200 backdrop-blur">
            <Sparkles className="h-3 w-3" /> Pas
          </span>
        </motion.div>

        {/* Specular glare that shifts with the tilt */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light"
          style={{ background: glare, transform: "translateZ(60px)" }}
        />

        {/* Divider + handle (lifted toward the viewer) */}
        <motion.div
          className="absolute inset-y-0 z-20 w-[2px] bg-gold-300/90 shadow-[0_0_28px_rgba(255,106,61,0.75)]"
          style={{ left: handleLeft, transform: "translateZ(70px)" }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-300 text-coal-950 shadow-gold ring-4 ring-gold-400/25 transition-transform duration-300 group-hover:scale-110">
            <MoveHorizontal className="h-5 w-5" />
          </div>
        </motion.div>

        {/* Hint */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-coal-950/65 px-4 py-1.5 text-[11px] font-medium uppercase tracking-luxe text-cream/75 backdrop-blur transition-opacity duration-500 group-hover:opacity-0">
          Lëviz kursorin ←→
        </div>
      </motion.div>
    </div>
  );
}
