"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./Reveal";

const stats = [
  { value: 2500, suffix: "+", label: "Vetura të riparuara" },
  { value: 15, suffix: "", label: "Vite përvojë" },
  { value: 100, suffix: "%", label: "Formë e rikthyer" },
  { value: 48, suffix: "h", label: "Kohë mesatare" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1700;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20">
      <div className="container-x grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="border-l border-gold-400/15 px-6">
              <p className="serif-display text-5xl text-gold-gradient sm:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-cream/45">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
