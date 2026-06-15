"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Coral gradient applied per word. background-clip:text must live on the same
// inline-block element that paints the glyphs — a parent .text-gold-gradient
// does NOT fill inline-block word children (they render transparent).
const gradientStyle = {
  backgroundImage:
    "linear-gradient(100deg,#ff9472,#ff6a3d 45%,#e8542a 80%,#ff8159)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  // Extend the gradient's paint area below the baseline so the clip covers
  // italic descenders (g, j, y); the negative margin keeps layout unchanged.
  paddingBottom: "0.3em",
  marginBottom: "-0.3em",
} as const;

/** Word-by-word reveal for headlines, with a mount fallback so text always shows. */
export function TextReveal({
  text,
  className = "",
  delay = 0,
  gradient = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  // Safety: reveal after mount even if the in-view observer never fires.
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 900);
    return () => clearTimeout(t);
  }, []);

  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {words.map((w, i) => (
        <span key={i}>
          {/* No overflow mask — a gentle fade + slide so tall/italic glyphs and
              diacritics (j, g, y, ç, ë) are never clipped at any line-height. */}
          <motion.span
            style={{
              display: "inline-block",
              willChange: "transform, opacity",
              ...(gradient ? gradientStyle : {}),
            }}
            initial={{ y: "0.32em", opacity: 0 }}
            animate={show ? { y: 0, opacity: 1 } : { y: "0.32em", opacity: 0 }}
            transition={{ duration: 0.7, delay: delay + i * 0.07, ease }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
