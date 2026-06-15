"use client";

import { Reveal, TextReveal } from "./Reveal";
import BeforeAfter from "./BeforeAfter";
import { Check } from "lucide-react";
import { showcase } from "@/lib/site";

const points = [
  "Rrafshim i saktë i gungave dhe deformimeve",
  "Formë origjinale e rikthyer, pa gjurmë",
  "Materiale dhe punim cilësor",
  "Garanci e shkruar në çdo punim",
];

export default function Showcase() {
  return (
    <section id="para-pas" className="relative scroll-mt-24 overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gold-500/8 blur-[150px]" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <BeforeAfter src={showcase[0].src} />
        </Reveal>

        <div>
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold-400/60" /> 02 — Para / Pas
          </span>
          <h2 className="serif-display mt-6 text-5xl leading-[1.02] sm:text-6xl">
            <TextReveal text="Diferenca që" className="block text-cream" />
            <span className="italic text-gold-gradient">
              <TextReveal text="flet vetë." delay={0.15} />
            </span>
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/60">
              Lëviz kursorin mbi foto dhe shiko transformimin — nga dëmtime e deformime, te një
              përfundim që duket sikur s&apos;ka ndodhur kurrë asgjë.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-cream/70">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-300">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="#kontakt" className="btn-gold mt-10">
              Merr vlerësim falas
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
