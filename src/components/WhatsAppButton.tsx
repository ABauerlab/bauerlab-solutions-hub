"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/contact";

const WhatsAppButton = () => {
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 group"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={
        nearFooter
          ? { opacity: 0, scale: 0.8, y: 20, pointerEvents: "none" }
          : { opacity: 1, scale: 1, y: 0, pointerEvents: "auto", transition: { delay: 1, duration: 0.5 } }
      }
      transition={{ duration: 0.3 }}
      aria-label="Fale pelo WhatsApp"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="hidden sm:inline text-sm font-heading font-bold">
        Falar com Especialista
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
