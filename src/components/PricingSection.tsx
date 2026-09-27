"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/contact";

const packages = [
  {
    name: "Presença Essencial",
    price: "950",
    description: "Pensado para 2 publicações por semana.",
    features: [
      "Até 2 horas de captação",
      "5 fotos profissionais",
      "4 vídeos curtos (até 30–45s)",
      "4 artes para Instagram",
      "Edição profissional objetiva",
      "Pronto para feed e reels"
    ]
  },
  {
    name: "Conteúdo que Vende",
    price: "1.690",
    description: "Pensado para 3 publicações por semana.",
    popular: true,
    features: [
      "Até 4 horas de captação",
      "10 fotos profissionais",
      "12 conteúdos no total",
      "6 vídeos curtos (até 60s)",
      "6 artes para Instagram",
      "Roteirização dos vídeos",
      "Conteúdos com legenda",
      "Edição dinâmica"
    ]
  },
  {
    name: "Presença Premium",
    price: "2.790",
    description: "Pensado para 4 publicações por semana.",
    features: [
      "Até 8 horas de captação",
      "20 fotos profissionais",
      "16 conteúdos no total",
      "10 vídeos curtos (até 1min30)",
      "6 artes para Instagram",
      "Roteirização dos vídeos",
      "Postagem pela nossa equipe",
      "Edição avançada com motion",
      "Conteúdo organizado para o mês",
      "Prioridade na entrega"
    ]
  }
];

const PricingSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {packages.map((pkg, index) => (
        <motion.div
          key={pkg.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative p-5 md:p-8 rounded-2xl ${
            pkg.popular
              ? "bg-primary"
              : "bg-card border border-border"
          } flex flex-col h-full`}
        >
          {pkg.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime text-lime-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
              <Zap size={10} /> Mais Procurado
            </div>
          )}

          <div className="mb-5 md:mb-8">
            <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-primary-foreground" : ""}`}>{pkg.name}</h3>
            <p className={`text-sm mb-4 md:mb-6 ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{pkg.description}</p>
            <div className="flex items-baseline gap-1">
              <span className={`text-sm font-bold ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>R$</span>
              <span className={`text-4xl font-bold ${pkg.popular ? "text-primary-foreground" : ""}`}>{pkg.price}</span>
              <span className={`text-xs ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/mês</span>
            </div>
          </div>

          <ul className="space-y-2.5 md:space-y-4 mb-5 md:mb-8 flex-1">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <Check size={16} className={`shrink-0 mt-0.5 ${pkg.popular ? "text-lime" : "text-primary"}`} />
                <span className={pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={getWhatsAppUrl(`Olá, tenho interesse no pacote ${pkg.name} de Audiovisual.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-4 rounded-xl font-heading font-bold text-sm text-center transition-all ${
              pkg.popular
                ? "bg-lime text-lime-foreground hover:scale-[1.02]"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            Selecionar Plano
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingSection;