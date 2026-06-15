"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Pointer-driven 3D tilt wrapper.
 * Perspective lives on the outer element; the inner element rotates so the
 * effect actually applies. Disabled on coarse pointers (touch) and when the
 * user prefers reduced motion.
 */
export default function Tilt({
  children,
  className = "",
  max = 9,
  glare = true,
  lift = 10,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
  lift?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 160, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 160, damping: 18, mass: 0.6 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const gx = useTransform(sx, [0, 1], ["0%", "100%"]);
  const gy = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(246,236,216,0.22), transparent 50%)`;

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setActive(fine && !reduce);
  }, []);

  function onMove(e: React.PointerEvent) {
    if (!active) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  if (!active) return <div className={className}>{children}</div>;

  return (
    <div className={`[perspective:1200px] ${className}`}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        whileHover={{ y: -lift }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative h-full w-full rounded-[inherit] [transform-style:preserve-3d]"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] mix-blend-soft-light"
          />
        )}
      </motion.div>
    </div>
  );
}
