"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Mail, MessageCircle, Send, Check } from "lucide-react";
import { Reveal, TextReveal } from "./Reveal";
import { site } from "@/lib/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="relative scroll-mt-24 py-24">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[360px] w-[360px] rounded-full bg-gold-500/8 blur-[130px]" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold-400/60" /> 06 — Kontakt
            </span>
            <h2 className="serif-display mt-6 text-5xl leading-[1.05] sm:text-6xl">
              <TextReveal text="Ta kthejmë" className="block text-cream" />
              <span className="italic text-gold-gradient">
                <TextReveal text="si të re?" delay={0.15} />
              </span>
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/60">
                Na shkruaj ose telefono për një vlerësim falas. Përgjigjemi shpejt çdo ditë pune.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-3">
              {[
                { icon: Phone, label: "Telefoni", value: site.phone, href: site.phoneHref },
                { icon: MessageCircle, label: "WhatsApp", value: "Shkruaj në WhatsApp", href: site.whatsapp },
                { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                { icon: MapPin, label: "Adresa", value: site.address },
                { icon: Clock, label: "Orari", value: site.hours },
              ].map((c) => (
                <Reveal key={c.label} delay={0.1}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-4 border-b border-gold-400/10 py-4 transition-colors hover:border-gold-400/30"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-400/20 text-gold-300">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-luxe text-cream/40">{c.label}</span>
                      <span className="block text-cream">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-[1.5rem] border border-coal-700 bg-white p-8 sm:p-10 shadow-card">
              {sent ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gold-400/15 text-gold-300">
                    <Check className="h-8 w-8" />
                  </span>
                  <h3 className="serif-display mt-5 text-3xl text-cream">Faleminderit!</h3>
                  <p className="mt-2 max-w-xs text-cream/55">
                    Kërkesa u regjistrua. Do t&apos;ju kontaktojmë sa më shpejt. Për urgjencë, telefononi direkt.
                  </p>
                  <a href={site.phoneHref} className="btn-gold mt-6">
                    <Phone className="h-4 w-4" /> {site.phone}
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="grid gap-5"
                >
                  <h3 className="font-serif text-2xl text-cream">Cakto një takim</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Emri" name="name" placeholder="Emri juaj" required />
                    <Field label="Telefoni" name="phone" placeholder="+383 4_ ___ ___" required />
                  </div>
                  <Field label="Marka / Modeli" name="car" placeholder="p.sh. BMW Seria 3" />
                  <div>
                    <label className="mb-2 block text-[11px] uppercase tracking-luxe text-cream/45">
                      Përshkrimi i dëmtimit
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Trego shkurt çfarë i ka ndodhur veturës..."
                      className="w-full resize-none rounded-xl border border-coal-700 bg-coal-850 px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold-400/60"
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full">
                    <Send className="h-4 w-4" /> Dërgo kërkesën
                  </button>
                  <p className="text-center text-xs text-cream/40">
                    Ose telefono direkt:{" "}
                    <a href={site.phoneHref} className="text-gold-300 hover:underline">
                      {site.phone}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-luxe text-cream/45">{label}</label>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-coal-700 bg-coal-850 px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold-400/60"
      />
    </div>
  );
}
