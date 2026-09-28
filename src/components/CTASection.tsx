"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

const CTASection = ({
  title = "Pronto para parar de amadorismo?",
  description = "Sua marca merece uma estrutura profissional que converte. Sem enrolação, sem contratos infinitos. Vamos direto ao resultado.",
}: CTASectionProps) => {
  return (
    <section className="py-12 md:py-28 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl px-6 py-10 md:px-16 md:py-16 text-center"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold mb-3 md:mb-6 leading-tight text-primary-foreground max-w-2xl mx-auto">{title}</h2>
          <p className="text-base md:text-lg text-primary-foreground/70 mb-6 md:mb-10 max-w-xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://wa.me/5531998021169"
              className="inline-flex items-center justify-center gap-2 bg-lime text-lime-foreground px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-extrabold text-base md:text-lg hover:scale-105 transition-all"
            >
              Falar com Especialista <ArrowRight size={20} />
            </a>
            <a
              href="https://wa.me/5531998021169"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-bold text-base md:text-lg hover:bg-primary-foreground/10 transition-all"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
          <p className="mt-5 md:mt-8 text-sm text-primary-foreground/60">
            Resposta em menos de 15 minutos em horário comercial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;