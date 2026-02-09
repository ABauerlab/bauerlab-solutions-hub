import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Monitor, Palette, Video, Sparkles, Package, 
  Zap, Target, ShieldCheck, TrendingUp, ChevronRight, 
  Layers, Globe, Cpu, BarChart3, Camera
} from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    title: "Branding & Posicionamento",
    description: "Construímos a percepção de valor que permite cobrar mais caro. Identidade visual e estratégia de mercado para líderes.",
    path: "/posicionamento-marca",
    icon: <Palette size={24} />,
  },
  {
    title: "Sistemas & Engenharia Digital",
    description: "Sites e plataformas de alta performance. Não apenas presença online, mas uma máquina de vendas automatizada.",
    path: "/sistemas-digital",
    icon: <Monitor size={24} />,
  },
  {
    title: "Audiovisual de Alto Impacto",
    description: "Produção cinematográfica sob direção de Ed Faria. Vídeos que vendem antes mesmo da primeira reunião.",
    path: "/audiovisual",
    icon: <Video size={24} />,
  },
  {
    title: "Ativação & Experiência",
    description: "Conectamos o digital ao mundo real. Eventos e ativações que transformam curiosos em advogados da marca.",
    path: "/ativacao-de-marca",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Materiais & Tangibilização",
    description: "A qualidade que se toca. Materiais físicos premium que reforçam a autoridade da sua empresa no dia a dia.",
    path: "/materiais-fisicos",
    icon: <Package size={24} />,
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      {/* Hero 2026 - Ultra Impacto */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8 glow">
              <Cpu size={14} /> Infraestrutura de Marca 2026
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 text-gradient">
              Estruturamos marcas <br /> para dominar o mercado.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Unimos estratégia, tecnologia e audiovisual em um ecossistema único. 
              Não entregamos apenas design; entregamos a estrutura necessária para sua empresa escalar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://wa.me/5531998021169"
                className="group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-heading font-bold text-lg hover:scale-105 transition-all duration-500 glow"
              >
                Iniciar Estruturação <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/projetos"
                className="glass px-10 py-5 rounded-full font-heading font-bold text-lg hover:bg-white/10 transition-all duration-500"
              >
                Ver Portfólio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section - Logos */}
      <section className="py-16 border-y border-border glass">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-10">Marcas que confiam na nossa estrutura</p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {["JBN", "DEI SOLUÇÕES", "GF PROD", "CAR DREAMS", "ASTROWEB"].map((brand) => (
              <span key={brand} className="font-heading font-black text-2xl tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Audiovisual Highlight */}
      <Section className="bg-primary/5 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
              <Camera size={18} /> Produção de Elite
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Audiovisual Cinematográfico</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa entrega audiovisual é parte fundamental da nossa infraestrutura. 
              Sob a direção de Ed Faria, produzimos conteúdo de alto impacto que 
              tangibiliza a autoridade da sua marca e acelera o processo de venda.
            </p>
            <Link to="/audiovisual" className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
              Conhecer nossa produção <ArrowRight size={18} />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-video glass rounded-2xl overflow-hidden flex items-center justify-center">
             <div className="text-center p-8">
                <Video size={48} className="text-primary mx-auto mb-4 opacity-50" />
                <p className="font-heading font-bold text-xl">Produção Integrada</p>
             </div>
          </div>
        </div>
      </Section>

      {/* The Ecosystem */}
      <Section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              O fim da fragmentação. <br />
              <span className="text-primary">Um só ecossistema.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              O maior erro das empresas é contratar agências diferentes para cada serviço. 
              O resultado é uma marca sem alma e sem coerência. Na BauerLab, tudo nasce do mesmo DNA.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Zap />, title: "Agilidade Real", desc: "Sem reuniões inúteis. Foco total em execução e entrega." },
                { icon: <Target />, title: "Foco em ROI", desc: "Cada pixel e cada linha de código servem para vender." },
                { icon: <ShieldCheck />, title: "Qualidade Premium", desc: "Padrão internacional em cada entrega audiovisual e digital." },
                { icon: <TrendingUp />, title: "Escalabilidade", desc: "Sistemas preparados para suportar o crescimento do seu negócio." },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-primary">{item.icon}</div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} index={i} />
            ))}
          </div>
        </div>
      </Section>

      <CTASection 
        title="Sua empresa está pronta para 2026?"
        description="Não espere o mercado mudar para se adaptar. Construa hoje a infraestrutura que vai garantir sua liderança amanhã."
      />
    </Layout>
  );
};

export default Index;