import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Monitor, Palette, Video, Sparkles, Package, 
  Zap, Target, ShieldCheck, TrendingUp, ChevronRight, 
  Cpu, Camera
} from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    title: "Branding",
    description: "Estratégia e identidade visual para marcas que buscam liderança e percepção de valor.",
    path: "/posicionamento-marca",
    icon: <Palette size={22} />,
  },
  {
    title: "Sistemas",
    description: "Engenharia digital de alta performance. Sites e plataformas que escalam seu negócio.",
    path: "/sistemas-digital",
    icon: <Monitor size={22} />,
  },
  {
    title: "Audiovisual",
    description: "Produção cinematográfica que tangibiliza autoridade e acelera o processo de venda.",
    path: "/audiovisual",
    icon: <Video size={22} />,
  },
  {
    title: "Ativação",
    description: "Experiências presenciais que conectam o digital ao mundo real de forma memorável.",
    path: "/ativacao-de-marca",
    icon: <Sparkles size={22} />,
  },
  {
    title: "Materiais",
    description: "Tangibilização premium da marca em materiais físicos que reforçam sua autoridade.",
    path: "/materiais-fisicos",
    icon: <Package size={22} />,
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      {/* Hero Compacto e Visual */}
      <section ref={heroRef} className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[1px]" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-6 glow">
              <Cpu size={12} /> Infraestrutura de Marca
            </span>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.1] md:leading-[0.95] mb-6 text-gradient">
              Estruturamos marcas <br className="hidden md:block" /> para o próximo nível.
            </h1>
            
            <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-4">
              Estratégia, tecnologia e audiovisual integrados em um ecossistema único para sua empresa escalar com autoridade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5531998021169"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-bold text-base hover:scale-105 transition-all duration-500 glow"
              >
                Iniciar Projeto <ArrowRight size={18} />
              </a>
              <Link
                to="/projetos"
                className="w-full sm:w-auto glass px-8 py-4 rounded-full font-heading font-bold text-base hover:bg-white/10 transition-all duration-500"
              >
                Portfólio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pilares com Scroll Horizontal no Mobile */}
      <section className="py-12 md:py-20 border-y border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-8 md:mb-12">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">O que entregamos</h2>
              <p className="text-xs md:text-sm text-muted-foreground">Soluções integradas que eliminam a fragmentação da sua marca.</p>
            </div>
            <div className="hidden md:block">
               <Link to="/servicos" className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                  Ver todos <ChevronRight size={14} />
               </Link>
            </div>
          </div>
          
          <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto no-scrollbar pb-4 md:pb-0 snap-x snap-mandatory">
            {services.map((service, index) => (
              <div key={service.title} className="snap-center">
                <ServiceCard {...service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiovisual - Mais Visual, Menos Texto */}
      <Section className="bg-primary/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-3">
              <Camera size={14} /> Produção de Elite
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Audiovisual Cinematográfico</h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-6">
              Sob a direção de Ed Faria, produzimos conteúdo que tangibiliza a autoridade da sua marca e acelera o processo de venda.
            </p>
            <Link to="/audiovisual" className="inline-flex items-center gap-2 font-bold text-primary text-sm hover:gap-3 transition-all">
              Conhecer produção <ArrowRight size={16} />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-video glass rounded-2xl overflow-hidden flex items-center justify-center group">
             <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
             <Video size={40} className="text-primary opacity-40 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </Section>

      {/* Ecossistema Compacto */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Um só ecossistema.</h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            O fim da fragmentação. Na BauerLab, tudo nasce do mesmo DNA estratégico.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: <Zap size={20} />, title: "Agilidade", desc: "Foco total em execução." },
            { icon: <Target size={20} />, title: "ROI", desc: "Foco em conversão." },
            { icon: <ShieldCheck size={20} />, title: "Premium", desc: "Padrão internacional." },
            { icon: <TrendingUp size={20} />, title: "Escala", desc: "Pronto para crescer." },
          ].map((item, i) => (
            <div key={i} className="p-4 md:p-6 glass rounded-xl text-center">
              <div className="text-primary mb-3 flex justify-center">{item.icon}</div>
              <h3 className="font-bold text-sm md:text-lg mb-1">{item.title}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection 
        title="Pronto para 2026?"
        description="Construa hoje a infraestrutura que vai garantir sua liderança amanhã."
      />
    </Layout>
  );
};

export default Index;