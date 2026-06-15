"use client";

import { motion } from "framer-motion";
import { Hammer, CarFront, Sparkles, Flame, Gauge, Wrench } from "lucide-react";
import { Reveal, TextReveal } from "./Reveal";

const services = [
  {
    icon: Hammer,
    title: "Riparim Llamarine",
    desc: "Rrafshim i gungave dhe deformimeve me precizion milimetrik, deri te rikthimi i formës origjinale.",
  },
  {
    icon: CarFront,
    title: "Riparim pas Aksidenti",
    desc: "Nga dëmtimet e lehta te ato të rënda — strukturë dhe karoceri si para përplasjes.",
  },
  {
    icon: Sparkles,
    title: "Heqje Gungash & Gërvishtjesh",
    desc: "Heqje gungash pa gjurmë (PDR) dhe largim deformimesh, shpejt e pa kompromis.",
  },
  {
    icon: Flame,
    title: "Saldim & Punime Metalike",
    desc: "Saldim profesional dhe punime metalike për çdo pjesë të dëmtuar të karocerisë.",
  },
  {
    icon: Gauge,
    title: "Drejtim Shasie",
    desc: "Drejtim dhe rikthim i shasisë e trupit me kontroll të saktë të masave.",
  },
  {
    icon: Wrench,
    title: "Pjesë të Jashtme",
    desc: "Zëvendësim dhe montim — parakolp, fenerë, dyer, kapakë e më shumë.",
  },
];

export default function Services() {
  return (
    <section id="sherbimet" className="relative scroll-mt-24 py-24">
      <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400/60" /> 01 — Shërbimet
            </span>
          </Reveal>
          <h2 className="serif-display mt-6 text-5xl leading-[1.02] sm:text-6xl">
            <TextReveal text="Zanati i" className="block text-cream" />
            <TextReveal text="karocerisë." delay={0.15} className="block italic" gradient />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-cream/60">
              Çdo veturë trajtohet me kujdesin e një atelieri — pa nxitim, me materiale cilësore
              dhe garanci në çdo punim. BMW, Audi, VW, Mercedes e çdo markë tjetër.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 hairline" />
            <p className="mt-6 font-serif text-2xl italic text-cream/80">
              “Detaji i fundit bën dallimin.”
            </p>
          </Reveal>
        </div>

        {/* Service list */}
        <div className="flex flex-col">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.05}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex items-start gap-6 border-b border-gold-400/10 py-8"
              >
                <span className="font-serif text-sm text-gold-400/70">
                  0{i + 1}
                </span>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-400/20 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-coal-950">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-cream">{s.title}</h3>
                  <p className="mt-2 max-w-md text-cream/55">{s.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
