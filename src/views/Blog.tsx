"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { Rss, Mail } from "lucide-react";
import { getEmail } from "@/lib/contact";

const Blog = () => {
  const email = getEmail();

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

      <Section className="border-t border-border bg-primary/5">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
            <Mail size={20} />
          </div>
          <h2 className="text-xl font-bold mb-3">Newsletter mensal</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Ainda não temos automação de inscrição — mas se quiser entrar na lista assim que a newsletter for ao
            ar, manda um e-mail e a gente te adiciona manualmente.
          </p>
          <a
            href={`mailto:${email}?subject=Quero entrar na newsletter da BauerLab`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            <Mail size={16} /> Quero receber
          </a>
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
