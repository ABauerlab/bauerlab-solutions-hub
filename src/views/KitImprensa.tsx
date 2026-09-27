"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { Download, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { BUSINESS } from "@/lib/site";

const KitImprensa = () => {
  return (
    <Layout>
      <PageHero
        tag="Kit de Imprensa"
        title="Material de referência para imprensa e parceiros."
        description="Logo em alta resolução, bio institucional e dados de contato — tudo o que você precisa para citar ou apresentar a BauerLab."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">Logo</h2>
            <div className="glass rounded-2xl p-8 flex items-center justify-center mb-4">
              <img src={logo.src} alt="Logo BauerLab" className="w-32 h-32 rounded-xl object-cover" />
            </div>
            <a
              href={logo.src}
              download="bauerlab-logo.jpeg"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
            >
              <Download size={16} /> Baixar logo
            </a>
            <p className="text-xs text-muted-foreground/70 italic mt-3">
              {"{{PENDENTE: logo em alta resolução e manual de marca completo, quando disponíveis}}"}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Bio institucional</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              A BauerLab é uma empresa criativa e tecnológica fundada por João Victor Bauer, que une estratégia,
              design, tecnologia, audiovisual e experiência física em um único ecossistema. Atua com desenvolvimento
              de sites e sistemas, marketing digital e tráfego pago, identidade visual, consultoria digital e
              produção audiovisual — inclusive através de marcas próprias do grupo (Vista Kodara, Asari, Mambaia).
            </p>

            <h3 className="font-heading font-semibold text-sm mb-3">Dados institucionais</h3>
            <div className="text-sm text-muted-foreground space-y-1.5 mb-6">
              <p>CNPJ: {BUSINESS.cnpj}</p>
              <p>{BUSINESS.address.street}</p>
              <p>{BUSINESS.address.city} - {BUSINESS.address.state}, {BUSINESS.address.zip}</p>
            </div>

            <a
              href={`mailto:${BUSINESS.email}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
            >
              <Mail size={16} /> {BUSINESS.email}
            </a>
          </div>
        </div>
      </Section>

      <CTASection
        title="É jornalista ou parceiro e precisa de mais informações?"
        description="Entre em contato direto pelo e-mail institucional acima."
      />
    </Layout>
  );
};

export default KitImprensa;
