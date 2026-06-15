"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowDown, Star } from "lucide-react";
import { site, showcase } from "@/lib/site";
import BeforeAfter from "./BeforeAfter";
import { TextReveal } from "./Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[140px]" />
        <div className="absolute inset-x-0 top-24 mx-auto h-px max-w-[1240px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      </div>

      <div className="container-x relative">
        {/* Top eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-10 flex items-center justify-between"
        >
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-400/60" />
            {site.estbar}
          </span>
          <span className="hidden text-[11px] uppercase tracking-luxe text-cream/40 sm:block">
            Prishtinë · Kosovë
          </span>
        </motion.div>

        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div style={{ y: yText, opacity }}>
            <h1 className="serif-display leading-[0.98] text-[clamp(2.75rem,8vw,6rem)]">
              <TextReveal text="Vetura juaj," className="block text-cream" />
              <span className="block pb-[0.12em]">
                <span className="italic text-gold-gradient">
                  <TextReveal text="e ringjallur." delay={0.2} />
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
              className="mt-8 max-w-md text-lg leading-relaxed text-cream/60"
            >
              Te <span className="text-cream">Auto Llamarist Luani</span>, llamarina trajtohet si zanat.
              Riparim, rrafshim dhe rikthim i formës origjinale — me një saktësi që e ndien në çdo detaj.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.62, ease }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href={site.phoneHref} className="btn-gold">
                <Phone className="h-4 w-4" /> Cakto një takim
              </a>
              <a href="#para-pas" className="btn-outline">
                Shiko transformimet
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.85 }}
              className="mt-10 flex items-center gap-3 text-sm text-cream/50"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span>
                <span className="text-cream">15+ vite</span> mjeshtëri · <span className="text-cream">2500+</span> vetura
              </span>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: yImg }} className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[1.8rem] border border-gold-400/15" />
            <BeforeAfter src={showcase[1].src} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 flex items-center gap-3 text-[11px] uppercase tracking-luxe text-cream/40"
        >
          <ArrowDown className="h-4 w-4 animate-bounce text-gold-400" />
          Lëviz për të zbuluar
        </motion.div>
      </div>
    </section>
  );
}
