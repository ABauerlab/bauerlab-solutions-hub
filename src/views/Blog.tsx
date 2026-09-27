"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { Rss } from "lucide-react";

const Blog = () => {
  return (
    <Layout>
      <PageHero
        tag="Blog"
        title="Insights sobre marca, tecnologia e performance."
        description="Conteúdo autoral da BauerLab sobre estratégia digital, branding, audiovisual e tráfego pago. Publicações mensais, direto da nossa experiência de campo."
      />

      <Section>
        <div className="max-w-xl mx-auto text-center py-12">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            <Rss size={24} />
          </div>
          <h2 className="text-xl font-bold mb-3">Primeiro artigo em preparação</h2>
          <p className="text-muted-foreground leading-relaxed">
            Estamos estruturando a publicação mensal de conteúdo. Em breve, artigos reais sobre os bastidores dos
            nossos projetos — sem enrolação e sem conteúdo genérico.
          </p>
        </div>
      </Section>

      <CTASection
        title="Quer receber os próximos artigos?"
        description="Fale com a gente e entre na nossa lista de contatos para ser avisado sobre novos conteúdos."
      />
    </Layout>
  );
};

export default Blog;
