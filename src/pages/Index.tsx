import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Palette, Video, Sparkles, Package, Eye, Layers, Zap, Target, ChevronRight, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import audiovisualImg from "@/assets/audiovisual.jpg";
import ativacaoImg from "@/assets/ativacao.jpg";
import digitalImg from "@/assets/digital.jpg";
import brandingImg from "@/assets/branding.jpg";

const services = [
  {
    title: "Posicionamento & Marca",
    description: "Construímos marcas fortes e coerentes. Branding, identidade visual, rebranding e posicionamento estratégico que fazem sua empresa ser percebida com seriedade pelo mercado.",
    path: "/posicionamento-marca",
    icon: <Palette size={24} />,
  },
  {
    title: "Sistemas & Digital",
    description: "Sites institucionais, sistemas web, plataformas sob medida e estruturação digital completa. Não é site bonito. É sistema funcional que gera resultado.",
    path: "/sistemas-digital",
    icon: <Monitor size={24} />,
  },
  {
    title: "Audiovisual",
    description: "Fotografia profissional, vídeos institucionais, conteúdo para redes sociais e captação de eventos. Audiovisual estratégico, não só estético.",
    path: "/audiovisual",
    icon: <Video size={24} />,
  },
  {
    title: "Ativação de Marca",
    description: "Experiências presenciais que conectam o público à sua marca. Ações promocionais, fotos instantâneas e conexão do físico com o digital.",
    path: "/ativacao-de-marca",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Materiais Físicos",
    description: "Cartões, adesivos, displays e materiais promocionais. Cada peça impressa é uma extensão da sua marca, com qualidade e coerência visual.",
    path: "/materiais-fisicos",
    icon: <Package size={24} />,
  },
];

const differentials = [
  { icon: <Eye size={22} />, title: "Visão de negócio", description: "Entendemos que marca é business. Cada decisão criativa tem impacto direto no resultado financeiro e na percepção do mercado. Não criamos por estética. Criamos para gerar valor." },
  { icon: <Layers size={22} />, title: "Estrutura profissional", description: "Processos claros, entregas organizadas e comunicação profissional do início ao fim. Cada etapa é documentada, validada e entregue dentro do prazo combinado." },
  { icon: <Zap size={22} />, title: "Execução sem improviso", description: "Nada aqui é feito de última hora. Cada projeto é planejado com precisão, executado com método e entregue com a qualidade que sua marca merece." },
  { icon: <Target size={22} />, title: "Integração total", description: "Digital, físico e audiovisual trabalhando juntos em uma estratégia unificada. Sua marca comunica a mesma coisa em todos os canais e pontos de contato." },
];

const stats = [
  { number: "100+", label: "Projetos entregues" },
  { number: "5", label: "Pilares de atuação" },
  { number: "360°", label: "Visão de marca" },
  { number: "100%", label: "Foco em resultado" },
];

const processSteps = [
  { step: "01", title: "Diagnóstico", description: "Entendemos seu negócio, mercado, público e objetivos. Escutamos antes de propor. Analisamos antes de criar." },
  { step: "02", title: "Estratégia", description: "Definimos o plano de ação com escopo, prazos e entregas claras. Você sabe exatamente o que vai receber e quando." },
  { step: "03", title: "Execução", description: "Colocamos tudo em prática com qualidade e precisão. Design, código, captação, produção — tudo integrado." },
  { step: "04", title: "Entrega & Evolução", description: "Entregamos o projeto finalizado e acompanhamos o resultado. Sua marca não para — e nós também não." },
];

const showcaseItems = [
  { title: "Audiovisual", image: audiovisualImg, path: "/audiovisual", description: "Vídeos e fotografias que comunicam com impacto" },
  { title: "Ativação de Marca", image: ativacaoImg, path: "/ativacao-de-marca", description: "Experiências que conectam pessoas à sua marca" },
  { title: "Sistemas & Digital", image: digitalImg, path: "/sistemas-digital", description: "Plataformas que fazem seu negócio funcionar" },
  { title: "Posicionamento & Marca", image: brandingImg, path: "/posicionamento-marca", description: "Marcas fortes, coerentes e memoráveis" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const showcaseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: showcaseProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  });
  const showcaseX = useTransform(showcaseProgress, [0, 1], ["5%", "-5%"]);

  return (
    <Layout>
      {/* Hero com Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-background/70" />
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container mx-auto px-4 md:px-8 relative pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <motion.div
              className="line-accent mb-8"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8">
              Estruturamos marcas{" "}
              <br className="hidden md:block" />
              para crescer no{" "}
              <span className="text-gradient">digital</span>,{" "}
              <br className="hidden lg:block" />
              no <span className="text-gradient">físico</span> e na{" "}
              <span className="text-gradient">experiência</span>.
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-12"
            >
              Estratégia, design, tecnologia, audiovisual e experiência física. Tudo integrado em um só lugar. 
              Nada genérico. Nada inflado. Tudo resolvido.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-semibold text-base hover:bg-primary/90 transition-all duration-300 hover:gap-3"
              >
                Falar com a BauerLab <ArrowRight size={18} />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground px-8 py-4 rounded-md font-heading font-medium text-base hover:border-primary hover:text-primary transition-all duration-300"
              >
                Solicitar diagnóstico gratuito
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Stats Banner */}
      <section className="border-y border-border bg-card/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="py-10 md:py-14 text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O que fazemos — Serviços */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-14">
          <div className="lg:col-span-1">
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
              Nossos pilares
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              O que fazemos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cinco áreas que funcionam de forma independente, mas integradas. Cada uma resolve uma parte 
              do seu negócio. E juntas, constroem uma marca completa.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.path} {...service} index={index} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.slice(4).map((service, index) => (
            <ServiceCard key={service.path} {...service} index={index + 4} />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/servicos"
              className="flex items-center justify-center h-full min-h-[200px] border border-dashed border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Ver todos os serviços</span>
                <ArrowRight size={16} className="mx-auto mt-2 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Showcase visual com parallax horizontal */}
      <section className="py-20 md:py-32 border-t border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
              Nosso trabalho
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Veja na prática o que entregamos.
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Cada projeto é uma combinação de estratégia, design e execução. 
              Clique em uma área para conhecer o que podemos fazer pela sua marca.
            </p>
          </motion.div>
        </div>
        <motion.div ref={showcaseRef} style={{ x: showcaseX }} className="flex gap-5 px-4 md:px-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="shrink-0 w-[80vw] md:w-[45vw] lg:w-[30vw]"
            >
              <Link to={item.path} className="group block relative rounded-lg overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <ArrowUpRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Por que a BauerLab */}
      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
              Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Por que escolher a BauerLab?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Não somos uma agência genérica. Não vendemos pacotes prontos. 
              Somos uma empresa que resolve problemas reais de marca e posicionamento, 
              usando todas as ferramentas disponíveis: digital, audiovisual, físico e experiencial.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada projeto é tratado como um sistema, com começo, meio e resultado mensurável. 
              Trabalhamos com método, não com improviso. E entregamos com a qualidade que sua marca merece.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              Conheça a BauerLab <ChevronRight size={16} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="p-6 border border-border rounded-lg hover:border-primary/30 hover:glow-primary transition-all duration-500 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-heading font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Nosso processo */}
      <section className="py-20 md:py-32 border-t border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
              Nosso processo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Do diagnóstico ao resultado.
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Cada projeto segue um processo claro e organizado. Você sabe exatamente o que esperar em cada etapa. 
              Sem surpresas, sem mudanças de última hora, sem promessas vazias.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-5xl font-heading font-bold text-primary/15 mb-4">{item.step}</div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2">
                    <ChevronRight size={20} className="text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frase de impacto */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              "Não criamos marcas bonitas.{" "}
              <span className="text-gradient">Criamos marcas que funcionam.</span>"
            </p>
            <p className="mt-6 text-muted-foreground">BauerLab</p>
          </motion.div>
        </div>
      </section>

      {/* Quem precisa da BauerLab */}
      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
              Para quem é
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A BauerLab é para empresas que levam a sério a própria marca.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Se você precisa de uma presença digital profissional, uma identidade visual forte, 
              conteúdo audiovisual estratégico ou experiências presenciais que conectem pessoas à sua marca: 
              a BauerLab resolve.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Empresas que estão começando e precisam de estrutura desde o primeiro dia.",
              "Negócios que já existem, mas cuja marca não comunica o que deveriam.",
              "Empresas que precisam de sistema digital funcional, não só um site bonito.",
              "Marcas que querem ativar experiências presenciais e sair da tela.",
              "Empresas que valorizam profissionalismo, prazo e qualidade.",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 items-start p-4 border border-border rounded-lg"
              >
                <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-1.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Sua marca merece estrutura."
        description="Converse com a BauerLab e descubra como podemos organizar, posicionar e ativar sua marca no digital, no físico e na experiência. Sem promessas vazias. Só resultado."
      />
    </Layout>
  );
};

export default Index;
