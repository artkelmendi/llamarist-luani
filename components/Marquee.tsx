"use client";

import { brands } from "@/lib/site";

export default function Marquee() {
  const row = [...brands, ...brands];
  return (
    <section className="relative border-y border-gold-400/10 py-7">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 px-6">
          {row.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap font-serif text-2xl italic text-cream/35 transition-colors hover:text-gold-300 sm:text-3xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
