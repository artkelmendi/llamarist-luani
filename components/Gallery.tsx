"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, TextReveal } from "./Reveal";
import CarMark from "./CarMark";
import { gallery } from "@/lib/site";

function Shot({ src, fallback }: { src: string; fallback: "before" | "after" }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <CarMark
        variant={fallback}
        className="h-full w-full transition-transform duration-[1.2s] group-hover:scale-105"
      />
    );
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
      draggable={false}
    />
  );
}

export default function Gallery() {
  return (
    <section id="galeria" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400/60" /> 03 — Galeria
            </span>
            <h2 className="serif-display mt-6 text-5xl leading-[1.02] sm:text-6xl">
              <TextReveal text="Punime me" className="text-cream" />{" "}
              <span className="italic text-gold-gradient">
                <TextReveal text="nënshkrim." delay={0.15} />
              </span>
            </h2>
          </div>
          <Reveal delay={0.1}>
            <a href="#kontakt" className="btn-outline">
              Sjell veturën tënde
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((it, i) => (
            <Reveal key={it.tag} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-2xl border border-gold-400/12 shadow-card ${
                  i % 5 === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/5]"
                }`}
              >
                <Shot src={it.src} fallback={i % 2 === 0 ? "after" : "before"} />
                <div className="absolute inset-0 bg-gradient-to-t from-coal-950 via-coal-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-serif text-xl text-cream">{it.tag}</p>
                  <p className="text-sm text-gold-200/80">{it.note}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-cream/30">
          * Imazhet janë ilustruese — do të zëvendësohen me foto reale të punimeve.
        </p>
      </div>
    </section>
  );
}
