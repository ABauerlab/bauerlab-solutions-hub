"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { ImageOff } from "lucide-react";

const DesignGrafico = () => {
  return (
    <Layout>
      <PageHero
        tag="Design & Gráfico"
        title="Peças que sustentam a identidade da marca."
        description="Posts, banners de campanha, identidade visual aplicada e mockups — cada peça acompanhada do contexto real em que foi criada."
      />

      <Section>
        <div className="max-w-xl mx-auto text-center py-12">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            <ImageOff size={24} />
          </div>
          <h2 className="text-xl font-bold mb-3">{"{{PENDENTE: galeria de peças reais}}"}</h2>
          <p className="text-muted-foreground leading-relaxed">
            Esta galeria vai reunir artes originais criadas para a BauerLab e para as marcas do grupo (Vista Kodara,
            Asari, Mambaia). Nenhuma peça é publicada aqui até ser gerada e aprovada — sem placeholder genérico de
            template.
          </p>
        </div>
      </Section>

      <CTASection
        title="Precisa de material gráfico para sua marca?"
        description="Conte pra gente o que sua empresa precisa. Produzimos peças originais alinhadas ao seu posicionamento."
      />
    </Layout>
  );
};

export default DesignGrafico;
