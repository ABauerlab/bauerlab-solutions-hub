"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import audiovisualImg from "@/assets/audiovisual.webp";

const items = [
  { title: "Fotografia profissional", description: "Imagens que comunicam a essência da sua marca com qualidade e intenção. Fotografia de produtos, ambientes, equipe e eventos, com direção de arte e pós-produção profissional." },
  { title: "Vídeos institucionais", description: "Apresente sua empresa com autoridade. Vídeos que contam a história da sua marca, mostram sua estrutura e transmitem confiança para clientes e parceiros." },
  { title: "Conteúdo para redes sociais", description: "Criação visual e audiovisual estratégica para alimentar seus canais com consistência. Reels, stories, fotos, carrosséis, tudo alinhado ao posicionamento da marca." },
  { title: "Captação de eventos", description: "Registro profissional de eventos corporativos, lançamentos, inaugurações e ativações. Fotos e vídeos que documentam e valorizam cada momento." },
  { title: "Vídeos promocionais", description: "Conteúdo com foco em conversão para campanhas e lançamentos. Vídeos curtos, diretos e impactantes que geram resultado, para anúncios, redes sociais e apresentações comerciais." },
  { title: "Drone e captação aérea", description: "Imagens aéreas que mostram a dimensão do seu negócio. Ideal para empresas com sede física, eventos de grande porte e projetos arquitetônicos." },
];

const Audiovisual = () => {
  return (
    <Layout>
      <PageHero
        tag="Audiovisual"
        title="Audiovisual estratégico. Cada imagem tem um propósito."
        description="Não fazemos vídeos e fotos por estética. Cada captação, cada edição, cada frame é pensado para comunicar com impacto e gerar resultado para a sua marca."
      />

      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <img src={audiovisualImg.src} alt="Produção audiovisual profissional" className="w-full h-[300px] md:h-[500px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O que entregamos</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Nosso audiovisual não é genérico. É planejado com base no posicionamento da marca e nos objetivos de comunicação do negócio.
          </p>
        </div>
        <ServiceDetailList items={items} />
      </Section>

      {/* Seção de Parceria com o Estúdio Mambaia */}
      <Section className="border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Estúdio Parceiro</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Produzido em parceria com a Mambaia.</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa produção audiovisual é realizada em parceria com a <strong>Mambaia</strong>, estúdio fotográfico e de coworking criativo
              na Praça Sete, em Belo Horizonte, marca do grupo BauerLab. Estrutura completa de estúdio, equipamento e equipe
              para garantir um padrão técnico e estético de nível internacional.
            </p>
            <a
              href="https://mambaiabh.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-bold text-base hover:bg-primary/90 transition-all hover:scale-105"
            >
              Conhecer a Mambaia <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Seção de Preços */}
      <Section className="border-t border-border bg-primary/5">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Investimento</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pacotes de Produção</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estrutura completa de conteúdo para sua marca manter consistência e autoridade no digital.
          </p>
        </div>
        <PricingSection />
      </Section>

      {/* Seção Técnica */}
      <Section className="border-t border-border">
        <div className="mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Infraestrutura Técnica</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Equipamento e Processo</h2>
          <p className="text-muted-foreground max-w-2xl">
            Utilizamos o que há de mais moderno em tecnologia de imagem e som para garantir que sua marca seja vista com a máxima qualidade possível.
          </p>
        </div>
        <TechnicalSpecs />
      </Section>

      <CTASection
        title="Sua marca precisa de conteúdo visual profissional?"
        description="Converse com a BauerLab. Planejamos e executamos toda a produção audiovisual que sua marca precisa, com estratégia e qualidade."
      />
    </Layout>
  );
};

export default Audiovisual;