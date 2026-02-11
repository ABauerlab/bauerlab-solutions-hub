import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import audiovisualImg from "@/assets/audiovisual.jpg";
import edFariaPortfolioImg from "@/assets/projects/edfaria.png";

const items = [
  { title: "Fotografia profissional", description: "Imagens que comunicam a essência da sua marca com qualidade e intenção. Fotografia de produtos, ambientes, equipe e eventos — com direção de arte e pós-produção profissional." },
  { title: "Vídeos institucionais", description: "Apresente sua empresa com autoridade. Vídeos que contam a história da sua marca, mostram sua estrutura e transmitem confiança para clientes e parceiros." },
  { title: "Conteúdo para redes sociais", description: "Criação visual e audiovisual estratégica para alimentar seus canais com consistência. Reels, stories, fotos, carrosséis — tudo alinhado ao posicionamento da marca." },
  { title: "Captação de eventos", description: "Registro profissional de eventos corporativos, lançamentos, inaugurações e ativações. Fotos e vídeos que documentam e valorizam cada momento." },
  { title: "Vídeos promocionais", description: "Conteúdo com foco em conversão para campanhas e lançamentos. Vídeos curtos, diretos e impactantes que geram resultado — para anúncios, redes sociais e apresentações comerciais." },
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
            <img src={audiovisualImg} alt="Produção audiovisual profissional" className="w-full h-[300px] md:h-[500px] object-cover" loading="lazy" />
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

      {/* Seção de Direção Criativa / Portfólio Ed Faria */}
      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">Direção Criativa</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A assinatura visual da BauerLab.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Toda a nossa produção audiovisual é dirigida por <strong>Ed Faria</strong>, garantindo um padrão estético e técnico de nível internacional. 
              Não entregamos apenas arquivos; entregamos narrativas visuais que posicionam sua marca como autoridade.
            </p>
            <a 
              href="https://edfaria.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-bold text-sm hover:bg-primary/90 transition-all"
            >
              Ver Portfólio Completo <ExternalLink size={16} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden border border-border shadow-2xl"
          >
            <img 
              src={edFariaPortfolioImg} 
              alt="Portfólio Ed Faria" 
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <p className="text-white font-bold">edfaria.com.br</p>
            </div>
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
        description="Converse com a BauerLab. Planejamos e executamos toda a produção audiovisual que sua marca precisa — com estratégia e qualidade."
      />
    </Layout>
  );
};

export default Audiovisual;