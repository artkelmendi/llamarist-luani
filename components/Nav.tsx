"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "#sherbimet", label: "Shërbimet" },
  { href: "#para-pas", label: "Para / Pas" },
  { href: "#galeria", label: "Galeria" },
  { href: "#atelier", label: "Atelieri" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-coal-950/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-5">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-serif text-xl font-medium tracking-tight text-cream">
            Auto Llamarist
          </span>
          <span className="font-serif text-xl font-medium italic text-gold-gradient">Luani</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-cream/70 transition-colors hover:text-cream"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href={site.phoneHref} className="btn-gold hidden !px-6 !py-3 lg:inline-flex">
          <Phone className="h-4 w-4" />
          Telefono
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/30 text-gold-200 lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gold-400/10 bg-coal-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-serif text-lg text-cream/85 hover:bg-gold-400/5"
                >
                  {l.label}
                </a>
              ))}
              <a href={site.phoneHref} className="btn-gold mt-2">
                <Phone className="h-4 w-4" /> Telefono tani
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
