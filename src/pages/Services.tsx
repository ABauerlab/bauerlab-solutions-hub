import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Monitor, Palette, Video, Sparkles, Package } from "lucide-react";

const services = [
  { title: "Posicionamento & Marca", description: "Branding, identidade visual, rebranding e posicionamento estratégico.", path: "/posicionamento-marca", icon: <Palette size={24} /> },
  { title: "Sistemas & Digital", description: "Sites, sistemas web, plataformas sob medida e estruturação digital.", path: "/sistemas-digital", icon: <Monitor size={24} /> },
  { title: "Audiovisual", description: "Fotografia, vídeos institucionais, conteúdo e captação de eventos.", path: "/audiovisual", icon: <Video size={24} /> },
  { title: "Ativação de Marca", description: "Experiências presenciais, ações promocionais e ativações.", path: "/ativacao-de-marca", icon: <Sparkles size={24} /> },
  { title: "Materiais Físicos", description: "Materiais gráficos, cartões, displays e produção de marca.", path: "/materiais-fisicos", icon: <Package size={24} /> },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        tag="Serviços"
        title="Soluções completas para marcas que precisam de estrutura."
        description="Cada área funciona de forma independente, mas integrada. Escolha o que sua marca precisa agora — e escale depois."
      />
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <ServiceCard key={service.path} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default Services;
