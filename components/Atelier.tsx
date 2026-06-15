"use client";

import { PhoneCall, ClipboardCheck, Hammer, Car } from "lucide-react";
import { Reveal, TextReveal } from "./Reveal";

const steps = [
  { icon: PhoneCall, title: "Kontakti", desc: "Na telefono ose dërgo foto të dëmtimit për një vlerësim fillestar." },
  { icon: ClipboardCheck, title: "Vlerësimi", desc: "Shqyrtim nga afër dhe një ofertë e qartë, pa surpriza." },
  { icon: Hammer, title: "Riparimi", desc: "Punim me kujdes maksimal nga mjeshtër me përvojë." },
  { icon: Car, title: "Dorëzimi", desc: "E merr veturën si të re, me garanci në punim." },
];

export default function Atelier() {
  return (
    <section id="atelier" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400/60" /> 04 — Atelieri
            </span>
            <h2 className="serif-display mt-6 text-5xl leading-[1.05] sm:text-6xl">
              <TextReveal text="Më shumë se" className="block text-cream" />
              <TextReveal text="një punëtori." delay={0.15} className="block italic" gradient />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/60">
                Auto Llamarist Luani lindi nga dashuria për veturat dhe respekti për punën e bërë mirë.
                Këtu çdo veturë merr kohën që meriton — dhe largohet ashtu siç duhet të ishte gjithmonë.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <p className="serif-display text-4xl text-gold-gradient">15+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cream/45">Vite mjeshtëri</p>
                </div>
                <div>
                  <p className="serif-display text-4xl text-gold-gradient">100%</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cream/45">Përkushtim</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center">
            <div className="hairline mb-2" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="flex items-start gap-6 border-b border-gold-400/10 py-7">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-400/20 text-gold-300">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-cream">
                      <span className="mr-2 text-gold-400/70">0{i + 1}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1 text-cream/55">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
