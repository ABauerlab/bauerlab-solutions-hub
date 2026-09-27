import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { Monitor, Palette, Video, Sparkles, Package, TrendingUp } from "lucide-react";

const services = [
  { title: "Posicionamento & Marca", description: "Branding, identidade visual, rebranding e posicionamento estratégico. Marcas que comunicam com clareza e se diferenciam no mercado.", path: "/posicionamento-marca", icon: <Palette size={24} /> },
  { title: "Sistemas & Digital", description: "Sites institucionais, sistemas web, plataformas sob medida e estruturação digital completa. Tecnologia que resolve problemas reais.", path: "/sistemas-digital", icon: <Monitor size={24} /> },
  { title: "Tráfego Pago & Performance", description: "Campanhas de geração de leads e conversas com números reais de CTR, CPC e custo por resultado. Sem projeção genérica.", path: "/trafego-pago", icon: <TrendingUp size={24} /> },
  { title: "Audiovisual", description: "Fotografia profissional, vídeos institucionais, conteúdo para redes sociais e captação de eventos. Imagem com propósito.", path: "/audiovisual", icon: <Video size={24} /> },
  { title: "Ativação de Marca", description: "Experiências presenciais, ações promocionais, fotos instantâneas e conexão do físico com o digital. Marca que sai da tela.", path: "/ativacao-de-marca", icon: <Sparkles size={24} /> },
  { title: "Materiais Físicos", description: "Cartões, adesivos, displays e materiais promocionais com qualidade premium. Extensão da marca no mundo real.", path: "/materiais-fisicos", icon: <Package size={24} /> },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        tag="Serviços"
        title="Soluções completas para marcas que precisam de estrutura."
        description="Cada área funciona de forma independente, mas integrada. Escolha o que sua marca precisa agora — e escale depois. Tudo com o mesmo padrão de qualidade, processo e profissionalismo."
      />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.path} {...service} index={index} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Como funciona</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Você pode contratar um serviço isolado ou combinar vários. O processo é o mesmo: 
              escutamos, planejamos, executamos e entregamos — com prazo, qualidade e acompanhamento profissional.
            </p>
            <p>
              Cada projeto começa com um diagnóstico gratuito. Entendemos o que sua marca precisa 
              e apresentamos a solução ideal — sem enrolação e sem vendas agressivas.
            </p>
            <p>
              Se você não sabe por onde começar, a gente ajuda. Muitos dos nossos clientes chegam 
              com uma necessidade específica e descobrem que a solução integrada traz muito mais resultado.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Qual serviço sua marca precisa agora?"
        description="Converse com a BauerLab e descubra. Diagnóstico gratuito, sem compromisso."
      />
    </Layout>
  );
};

export default Services;