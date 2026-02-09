import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Palette, Video, Sparkles, Package, Zap, Target, ShieldCheck, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    title: "Branding que Vende",
    description: "Não é só um logo bonito. É posicionamento que gera autoridade e faz seu cliente escolher você, não o seu preço.",
    path: "/posicionamento-marca",
    icon: <Palette size={24} />,
  },
  {
    title: "Sistemas & Sites de Alta Conversão",
    description: "Sites rápidos, seguros e focados em transformar visitantes em clientes. Tecnologia que trabalha para o seu comercial.",
    path: "/sistemas-digital",
    icon: <Monitor size={24} />,
  },
  {
    title: "Audiovisual Estratégico",
    description: "Vídeos e fotos que comunicam valor instantâneo. Conteúdo profissional para anúncios e redes sociais que convertem.",
    path: "/audiovisual",
    icon: <Video size={24} />,
  },
  {
    title: "Ativação de Marca",
    description: "Sua marca fora da tela. Experiências presenciais que criam conexão real e geram vendas imediatas.",
    path: "/ativacao-de-marca",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Materiais Premium",
    description: "A primeira impressão física conta. Materiais gráficos que reforçam a qualidade do seu serviço no mundo real.",
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
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <Layout>
      {/* Hero Section - Foco em Venda Imediata */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Direto ao ponto: Resultados Reais
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Sua marca não precisa de estética. <br />
              <span className="text-gradient">Precisa de estrutura que vende.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Paramos de enrolar com "curtidas" e focamos no que importa: 
              posicionamento, tecnologia e audiovisual integrados para escalar seu faturamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5531998021169"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-primary/90 transition-all hover:scale-[1.02]"
              >
                Quero Estruturar Minha Marca <ArrowRight size={20} />
              </a>
              <Link
                to="/projetos"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card/50 px-8 py-4 rounded-md font-heading font-bold text-lg hover:bg-card transition-all"
              >
                Ver Resultados
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prova Social Rápida */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-heading font-bold text-xl">JBN</span>
            <span className="font-heading font-bold text-xl">DEI SOLUÇÕES</span>
            <span className="font-heading font-bold text-xl">GF PROD</span>
            <span className="font-heading font-bold text-xl">CAR DREAMS</span>
            <span className="font-heading font-bold text-xl">ASTROWEB</span>
          </div>
        </div>
      </section>

      {/* Por que nós? - Foco em Dor e Solução */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Chega de agências que só entregam "posts".
            </h2>
            <div className="space-y-6">
              {[
                { icon: <Zap className="text-primary" />, title: "Velocidade de Execução", desc: "Seu projeto não fica parado. Entregamos com agilidade porque sabemos que tempo é dinheiro." },
                { icon: <Target className="text-primary" />, title: "Foco em Conversão", desc: "Tudo o que criamos tem um objetivo: fazer o seu cliente dizer 'sim'." },
                { icon: <ShieldCheck className="text-primary" />, title: "Estrutura Profissional", desc: "Do site ao audiovisual, sua empresa passa a imagem de líder de mercado." },
                { icon: <TrendingUp className="text-primary" />, title: "Escalabilidade", desc: "Soluções que crescem com você. Sem precisar refazer tudo daqui a 6 meses." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative bg-card border border-border p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">O que resolvemos hoje?</h3>
              <div className="grid grid-cols-1 gap-4">
                {services.map((s, i) => (
                  <Link 
                    key={i} 
                    to={s.path}
                    className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:border-primary transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{s.icon}</div>
                      <span className="font-bold">{s.title}</span>
                    </div>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final - Sem Burocracia */}
      <CTASection 
        title="Pare de perder vendas por falta de estrutura."
        description="Clique no botão abaixo para um diagnóstico gratuito. Vamos analisar sua marca e dizer exatamente onde você está perdendo dinheiro."
      />
    </Layout>
  );
};

export default Index;