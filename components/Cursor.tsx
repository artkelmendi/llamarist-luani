"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MoveHorizontal } from "lucide-react";

type Variant = "default" | "link" | "drag";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Two springs at different stiffness give the trailing-ring / snappy-dot feel.
  const ringX = useSpring(x, { stiffness: 320, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 320, damping: 26, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 1400, damping: 60, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 1400, damping: 60, mass: 0.3 });

  // Centering is baked into the transform so it never fights Tailwind's translate
  // utilities — this is what was causing the jitter/offset before.
  const ringTransform = useMotionTemplate`translate3d(calc(${ringX}px - 50%), calc(${ringY}px - 50%), 0)`;
  const dotTransform = useMotionTemplate`translate3d(calc(${dotX}px - 50%), calc(${dotY}px - 50%), 0)`;

  const [variant, setVariant] = useState<Variant>("default");
  const [down, setDown] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const varRef = useRef<Variant>("default");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      let next: Variant = "default";
      if (t?.closest("[data-cursor]")) next = "drag";
      else if (t?.closest("a, button, input, textarea, select, [role='button']"))
        next = "link";
      // Only re-render when the variant actually changes (no per-move churn).
      if (next !== varRef.current) {
        varRef.current = next;
        setVariant(next);
      }
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = variant === "drag" ? 76 : variant === "link" ? 58 : 34;

  return (
    <div className="pointer-events-none fixed inset-0 z-[120] hidden lg:block">
      {/* Outer ring */}
      <motion.div
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border will-change-transform"
        style={{ transform: ringTransform }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor:
            variant === "default"
              ? "rgba(224,195,137,0.55)"
              : "rgba(224,195,137,0.9)",
          backgroundColor:
            variant === "default"
              ? "rgba(216,175,106,0)"
              : "rgba(216,175,106,0.10)",
          scale: down ? 0.82 : 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      >
        <AnimatePresence>
          {variant === "drag" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              className="text-gold-200"
            >
              <MoveHorizontal className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner dot — hidden while showing the drag icon */}
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-gold-200 will-change-transform"
        style={{ transform: dotTransform }}
        animate={{ opacity: variant === "drag" ? 0 : 1, scale: down ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Soft glow */}
      <motion.div
        className="absolute left-0 top-0 h-10 w-10 rounded-full bg-gold-400/20 blur-xl will-change-transform"
        style={{ transform: ringTransform }}
      />
    </div>
  );
}
