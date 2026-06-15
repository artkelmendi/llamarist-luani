"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Reveal, TextReveal } from "./Reveal";

const reviews = [
  { name: "Arben K.", car: "BMW Seria 5", text: "Pata një gungë e gërvishtje të madhe në derë. Luani e riparoi aq mirë sa s'e gjen dot ku ishte. Punë perfekte!" },
  { name: "Fatlinda M.", car: "Audi A3", text: "Shërbim i shpejtë dhe profesional. Çmim korrekt dhe rezultat mbi pritshmëritë. E rekomandoj me sytë mbyllur." },
  { name: "Gentian B.", car: "VW Passat", text: "Pas një aksidenti vetura dukej e shkatërruar. Ma kthyen si të re. Mjeshtëri e vërtetë në llamarinë." },
  { name: "Drilon S.", car: "Mercedes C-Class", text: "Cilësi e nivelit të lartë dhe kujdes ndaj detajeve. Komunikim i shkëlqyer gjatë gjithë procesit." },
];

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400/60" /> 05 — Klientët
          </span>
          <h2 className="serif-display mt-6 text-5xl leading-[1.05] sm:text-6xl">
            <TextReveal text="Besimi i tyre," className="block text-cream" />
            <span className="italic text-gold-gradient">
              <TextReveal text="krenaria jonë." delay={0.15} />
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative h-full rounded-2xl border border-coal-700 bg-white p-8 shadow-card"
              >
                <Quote className="absolute right-7 top-7 h-9 w-9 text-gold-400/10" />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mt-5 font-serif text-lg italic leading-relaxed text-cream/85">“{r.text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-gold-400/30 font-serif text-gold-300">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-cream">{r.name}</p>
                    <p className="text-xs text-cream/45">{r.car}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
