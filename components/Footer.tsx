"use client";

import { Instagram, Facebook, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-400/10">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-baseline gap-2">
              <span className="font-serif text-2xl text-cream">Auto Llamarist</span>
              <span className="font-serif text-2xl italic text-gold-gradient">Luani</span>
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-cream/55">
              Atelier i llamarinës dhe karocerisë. Riparojmë çdo markë me përkushtimin e një zanati —
              dhe garanci në çdo punim.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: site.social.instagram },
                { icon: Facebook, href: site.social.facebook },
                { icon: Phone, href: site.phoneHref },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold-400/20 text-cream/70 transition-colors hover:border-gold-300 hover:text-gold-200"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-luxe text-gold-300">Shërbimet</h4>
            <ul className="mt-5 space-y-3 text-cream/55">
              {["Riparim llamarine", "Pas aksidenti", "Heqje gungash", "Saldim & punime", "Pjesë të jashtme"].map(
                (l) => (
                  <li key={l}>
                    <a href="#sherbimet" className="transition-colors hover:text-cream">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-luxe text-gold-300">Kontakt</h4>
            <ul className="mt-5 space-y-3 text-cream/55">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-cream">
                  {site.phone}
                </a>
              </li>
              <li>{site.address}</li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-gold-400/10 pt-7 text-xs text-cream/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Auto Llamarist Luani. Të gjitha të drejtat e rezervuara.</p>
          <p>Punuar me përkushtim · Prishtinë, Kosovë</p>
        </div>
      </div>
    </footer>
  );
}
