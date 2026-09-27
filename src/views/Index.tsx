"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Monitor, Palette, Video, Sparkles, Package,
  Zap, Target, ShieldCheck, TrendingUp, Check, X,
  Cpu, Camera, Calculator, ClipboardCheck
} from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import LogoMarquee from "@/components/LogoMarquee";
import heroBg from "@/assets/hero-bg.webp";

const stats = [
  { value: "20+", label: "Projetos entregues" },
  { value: "3", label: "Marcas do grupo" },
  { value: "7", label: "Áreas de atuação" },
  { value: "100%", label: "Dados reais no site" },
];

const services = [
  {
    title: "Branding",
    description: "Estratégia e identidade visual para marcas que buscam liderança e percepção de valor.",
    path: "/posicionamento-marca",
    icon: <Palette size={20} />,
    span: "lg:col-span-4",
  },
  {
    title: "Sistemas & Digital",
    description: "Engenharia digital de alta performance. Sites e plataformas que escalam seu negócio.",
    path: "/sistemas-digital",
    icon: <Monitor size={20} />,
    span: "lg:col-span-2",
  },
  {
    title: "Consultoria",
    description: "Diagnóstico honesto da presença digital antes de vender qualquer solução.",
    path: "/consultoria-digital",
    icon: <ClipboardCheck size={20} />,
    span: "lg:col-span-2",
  },
  {
    title: "Audiovisual",
    description: "Produção cinematográfica que tangibiliza autoridade e acelera o processo de venda.",
    path: "/audiovisual",
    icon: <Video size={20} />,
    span: "lg:col-span-4",
  },
  {
    title: "Ativação de Marca",
    description: "Experiências presenciais que conectam o digital ao mundo real de forma memorável.",
    path: "/ativacao-de-marca",
    icon: <Sparkles size={20} />,
    span: "lg:col-span-3",
  },
  {
    title: "Materiais Físicos",
    description: "Tangibilização premium da marca em materiais físicos que reforçam sua autoridade.",
    path: "/materiais-fisicos",
    icon: <Package size={20} />,
    span: "lg:col-span-3",
  },
  {
    title: "Contabilidade",
    description: "Soluções contábeis integradas através da ContaLab Digital.",
    path: "http://contalabdigital.com.br/",
    icon: <Calculator size={20} />,
    span: "lg:col-span-6",
  },
];

const ecosystemPoints = [
  { icon: <Zap size={18} />, title: "Agilidade", desc: "Foco total em execução." },
  { icon: <Target size={18} />, title: "ROI", desc: "Foco em conversão." },
  { icon: <ShieldCheck size={18} />, title: "Premium", desc: "Padrão internacional." },
  { icon: <TrendingUp size={18} />, title: "Escala", desc: "Pronto para crescer." },
];

const proofShots = [
  { url: "astrowebatlas.com.br", label: "Astroweb Atlas", note: "Sistema Node.js" },
  { url: "vistakodara.com.br", label: "Vista Kodara", note: "Marca do grupo" },
  { url: "contalabdigital.com.br", label: "ContaLab Digital", note: "5 subdomínios" },
];

const comparison = [
  { item: "Estratégia antes de execução", solo: false, generic: false, bauerlab: true },
  { item: "Design + tecnologia + audiovisual no mesmo time", solo: false, generic: false, bauerlab: true },
  { item: "Números reais de campanha, sem projeção genérica", solo: false, generic: false, bauerlab: true },
  { item: "Acompanhamento pós-entrega", solo: false, generic: true, bauerlab: true },
  { item: "Prazo e escopo definidos antes de começar", solo: true, generic: true, bauerlab: true },
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
      {/* Hero editorial, assimétrico, não centralizado */}
      <section ref={heroRef} className="relative min-h-0 md:min-h-screen flex items-center overflow-hidden bg-mesh">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY, opacity: heroOpacity }}>
          <img
            src={heroBg.src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-105"
            fetchPriority="high"
            loading="eager"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-[1px]" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-10 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-6 glow">
                <Cpu size={12} /> 01. Infraestrutura de Marca
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-gradient text-left">
                Estruturamos marcas para o próximo nível.
              </h1>

              <p className="text-sm md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed text-left">
                Estratégia, tecnologia e audiovisual integrados em um ecossistema único para sua empresa escalar
                com autoridade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="https://wa.me/5531998021169"
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-bold text-base hover:scale-105 transition-all duration-500 glow"
                >
                  Iniciar Projeto <ArrowRight size={18} />
                </a>
                <Link
                  href="/projetos"
                  className="w-full sm:w-auto glass px-8 py-4 rounded-full font-heading font-bold text-base hover:bg-white/10 transition-all duration-500 text-center"
                >
                  Portfólio
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="glass rounded-3xl p-6 md:p-8 grid grid-cols-2 gap-6 md:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-primary/40 pl-4">
                    <div className="text-2xl md:text-4xl font-bold text-gradient font-heading">{stat.value}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* Pilares, bento assimétrico, sem carrossel */}
      <section className="py-16 md:py-24 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-xl mb-10 md:mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">02. Pilares</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">O que entregamos</h2>
            <p className="text-xs md:text-sm text-muted-foreground">Soluções integradas que eliminam a fragmentação da sua marca.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
            {services.map((service, index) => {
              const isExternal = service.path.startsWith("http");
              const CardBody = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`group relative glass p-4 md:p-8 rounded-2xl glass-hover h-full overflow-hidden ${service.span}`}
                >
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="text-primary" size={20} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xs md:text-sm max-w-md">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );

              return isExternal ? (
                <a key={service.title} href={service.path} target="_blank" rel="noopener noreferrer" className={service.span}>
                  {CardBody}
                </a>
              ) : (
                <Link key={service.title} href={service.path} className={service.span}>
                  {CardBody}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audiovisual */}
      <Section className="bg-primary/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-3">
              <Camera size={14} /> 03. Produção de Elite
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Audiovisual Cinematográfico</h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-6">
              Em parceria com o estúdio Mambaia, produzimos conteúdo que tangibiliza a autoridade da sua marca e acelera o processo de venda.
            </p>
            <Link href="/audiovisual" className="inline-flex items-center gap-2 font-bold text-primary text-sm hover:gap-3 transition-all">
              Conhecer produção <ArrowRight size={16} />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative aspect-video glass rounded-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ktxhpmlbPvo?autoplay=1&mute=1&loop=1&playlist=ktxhpmlbPvo&controls=0&modestbranding=1&rel=0&playsinline=1&vq=hd1080"
              title="Produção audiovisual BauerLab"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Ecossistema, editorial, não mais grid de 4 caixas uniformes */}
      <Section>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6 block">04. Ecossistema</span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-4xl font-heading font-bold leading-tight">
              Um só ecossistema. O fim da fragmentação, na BauerLab, <span className="text-gradient">tudo nasce do mesmo DNA estratégico.</span>
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-5 lg:pl-6 lg:border-l border-border">
            {ecosystemPoints.map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="text-primary shrink-0">{item.icon}</div>
                <div>
                  <span className="font-bold text-sm mr-2">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Provas reais, link direto pro site ao vivo, sem print que fica desatualizado */}
      <Section className="border-t border-border bg-card/30">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6 block">05. Provas</span>
        <h2 className="text-2xl md:text-4xl font-bold mb-10 max-w-xl">Resultado que dá pra visitar agora, não só pra prometer.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {proofShots.map((shot, index) => (
            <motion.a
              key={shot.label}
              href={`https://${shot.url}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group glass p-6 rounded-2xl glass-hover flex flex-col justify-between h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div>
                <p className="font-heading font-bold text-lg group-hover:text-primary transition-colors">{shot.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{shot.note}</p>
                <p className="text-xs text-muted-foreground/60 font-mono mt-3">{shot.url}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Comparação honesta */}
      <Section className="border-t border-border">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6 block">06. Comparativo</span>
        <h2 className="text-2xl md:text-4xl font-bold mb-10 max-w-xl">Contra o que você provavelmente já tentou.</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-4 pr-4 text-muted-foreground font-normal">O que você recebe</th>
                <th className="py-4 px-4 text-muted-foreground font-normal text-center">Freelancer avulso</th>
                <th className="py-4 px-4 text-muted-foreground font-normal text-center">Agência genérica</th>
                <th className="py-4 pl-4 text-primary font-bold text-center">BauerLab</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.item} className="border-b border-border/50">
                  <td className="py-4 pr-4">{row.item}</td>
                  <td className="py-4 px-4 text-center">
                    {row.solo ? <Check size={16} className="text-primary mx-auto" /> : <X size={16} className="text-muted-foreground/30 mx-auto" />}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.generic ? <Check size={16} className="text-primary mx-auto" /> : <X size={16} className="text-muted-foreground/30 mx-auto" />}
                  </td>
                  <td className="py-4 pl-4 text-center bg-primary/5">
                    {row.bauerlab ? <Check size={16} className="text-primary mx-auto" /> : <X size={16} className="text-muted-foreground/30 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
