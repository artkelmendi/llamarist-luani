"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-5 right-5 z-50 flex flex-col gap-3"
        >
          <a
            href={site.whatsapp}
            aria-label="WhatsApp"
            className="grid place-items-center rounded-full bg-emerald-500 p-3.5 text-white shadow-[0_12px_30px_-8px_rgba(16,185,129,0.7)] transition-transform hover:scale-110"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
          <a
            href={site.phoneHref}
            aria-label="Telefono"
            className="relative grid place-items-center rounded-full bg-gold-400 p-3.5 text-coal-950 shadow-gold transition-transform hover:scale-110"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-gold-400/40" />
            <Phone className="relative h-6 w-6" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
