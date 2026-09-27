"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

import bauerlabPost from "@/assets/design-grafico/bauerlab-post.webp";
import bauerlabBanner from "@/assets/design-grafico/bauerlab-banner.webp";
import kodaraPost from "@/assets/design-grafico/kodara-post.webp";
import asariPost from "@/assets/design-grafico/asari-post.webp";
import mambaiaPost from "@/assets/design-grafico/mambaia-post.webp";

const pieces = [
  {
    image: bauerlabPost.src,
    title: "Post institucional — BauerLab",
    caption: "Criado para a própria BauerLab, objetivo: comunicar o posicionamento de infraestrutura de marca em post de Instagram.",
  },
  {
    image: bauerlabBanner.src,
    title: "Banner de campanha — BauerLab",
    caption: "Criado para a BauerLab, objetivo: banner de campanha institucional em formato widescreen para site e mídia paga.",
  },
  {
    image: kodaraPost.src,
    title: "Post de campanha — Vista Kodara",
    caption: "Criado para a Vista Kodara (marca do grupo), objetivo: comunicar a estética streetwear urbana da coleção em post de Instagram.",
  },
  {
    image: asariPost.src,
    title: "Post de produto — Asari",
    caption: "Criado para a Asari (marca do grupo), objetivo: apresentar a linha de peças artesanais (bolsas, miçanga, crochê) com identidade boho-artesanal.",
  },
  {
    image: mambaiaPost.src,
    title: "Post institucional — Mambaia",
    caption: "Criado para a Mambaia (marca do grupo), objetivo: divulgar o estúdio fotográfico e a estrutura de captação disponível para locação.",
  },
];

const DesignGrafico = () => {
  return (
    <Layout>
      <PageHero
        tag="Design & Gráfico"
        title="Peças que sustentam a identidade da marca."
        description="Posts, banners de campanha, identidade visual aplicada e mockups — cada peça acompanhada do contexto real em que foi criada."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pieces.map((piece, index) => (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden glass-hover"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-base mb-1.5">{piece.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{piece.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/70 italic mt-10 max-w-2xl">
          Peças geradas com ferramentas de design (Recraft) a partir da identidade real de cada marca. Galeria em
          expansão contínua — novas peças entram conforme novos projetos são produzidos.
        </p>
      </Section>

      <CTASection
        title="Precisa de material gráfico para sua marca?"
        description="Conte pra gente o que sua empresa precisa. Produzimos peças originais alinhadas ao seu posicionamento."
      />
    </Layout>
  );
};

export default DesignGrafico;
