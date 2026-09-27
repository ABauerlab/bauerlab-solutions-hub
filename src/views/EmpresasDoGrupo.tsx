"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const companies = [
  {
    name: "Vista Kodara",
    domain: "vistakodara.com.br",
    url: "https://vistakodara.com.br",
    description: "Streetwear com e-commerce próprio, operado como produto do grupo BauerLab.",
  },
  {
    name: "Asari",
    domain: "asari.com.br",
    url: "https://asari.com.br",
    description: "E-commerce de peças artesanais, bolsas, miçanga e crochê, sediado em Belo Horizonte.",
  },
  {
    name: "Mambaia",
    domain: "mambaiabh.com.br",
    url: "https://mambaiabh.com.br",
    description: "Estúdio fotográfico, coworking criativo e locação de espaço na Praça Sete, BH. Parceiro oficial de audiovisual da BauerLab.",
  },
];

const EmpresasDoGrupo = () => {
  return (
    <Layout>
      <PageHero
        tag="Empresas do Grupo"
        title="Um ecossistema de marcas próprias."
        description="Além de atender clientes, a BauerLab constrói e opera suas próprias marcas. Elas servem como prova prática de tudo o que aplicamos para os nossos clientes."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {companies.map((company, index) => (
            <motion.a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block border border-border bg-card/40 p-8 rounded-2xl hover:border-primary/40 transition-colors duration-500 h-full"
            >
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Marca do Grupo BauerLab
              </span>
              <h3 className="font-heading font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                {company.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {company.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-primary">
                {company.domain} <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      <CTASection
        title="Quer construir uma marca própria assim?"
        description="Aplicamos na BauerLab e no grupo o mesmo processo que estruturamos para os nossos clientes. Fale com a gente."
      />
    </Layout>
  );
};

export default EmpresasDoGrupo;
