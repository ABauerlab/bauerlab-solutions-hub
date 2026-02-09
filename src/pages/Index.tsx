import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Palette, Video, Sparkles, Package, Eye, Layers, Zap, Target, Users } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";

const services = [
  {
    title: "Posicionamento & Marca",
    description: "Branding, identidade visual, rebranding e posicionamento estratégico para marcas fortes e coerentes.",
    path: "/posicionamento-marca",
    icon: <Palette size={24} />,
  },
  {
    title: "Sistemas & Digital",
    description: "Sites, sistemas web, plataformas sob medida e estruturação digital completa.",
    path: "/sistemas-digital",
    icon: <Monitor size={24} />,
  },
  {
    title: "Audiovisual",
    description: "Fotografia, vídeos institucionais, conteúdo para redes sociais e captação de eventos.",
    path: "/audiovisual",
    icon: <Video size={24} />,
  },
  {
    title: "Ativação de Marca",
    description: "Experiências presenciais, ações promocionais e conexão do físico com o digital.",
    path: "/ativacao-de-marca",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Materiais Físicos",
    description: "Materiais gráficos impressos, cartões, displays e produção com foco em marca.",
    path: "/materiais-fisicos",
    icon: <Package size={24} />,
  },
];

const differentials = [
  { icon: <Eye size={20} />, title: "Visão de negócio", description: "Entendemos que marca é business. Cada decisão criativa tem impacto no resultado." },
  { icon: <Layers size={20} />, title: "Estrutura", description: "Processos claros, entregas organizadas e comunicação profissional do início ao fim." },
  { icon: <Zap size={20} />, title: "Execução profissional", description: "Sem improviso. Cada etapa é planejada e executada com precisão." },
  { icon: <Target size={20} />, title: "Integração total", description: "Digital, físico e audiovisual trabalhando juntos em uma estratégia unificada." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="line-accent mb-8" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Estruturamos marcas para crescer no{" "}
              <span className="text-gradient">digital</span>, no{" "}
              <span className="text-gradient">físico</span> e na{" "}
              <span className="text-gradient">experiência</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Estratégia, design, tecnologia e audiovisual integrados em um só lugar. 
              Nada genérico. Tudo resolvido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-semibold text-base hover:bg-primary/90 transition-colors"
              >
                Falar com a BauerLab <ArrowRight size={16} />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-8 py-4 rounded-md font-heading font-medium text-base hover:border-primary hover:text-primary transition-all duration-300"
              >
                Solicitar diagnóstico
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O que fazemos */}
      <Section>
        <div className="mb-12">
          <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
            Nossos pilares
          </span>
          <h2 className="text-2xl md:text-4xl font-bold">O que fazemos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.path} {...service} index={index} />
          ))}
        </div>
      </Section>

      {/* Por que a BauerLab */}
      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
              Diferenciais
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Por que a BauerLab?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Não somos uma agência genérica. Somos uma empresa que resolve, estrutura e ativa marcas. 
              Cada projeto é tratado como um sistema — com começo, meio e resultado.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-5 border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <div className="text-primary mb-3">{item.icon}</div>
                <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
};

export default Index;
