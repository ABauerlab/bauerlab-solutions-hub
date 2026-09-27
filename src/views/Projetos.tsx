"use client";

import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Monitor, ShoppingBag, Layers, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import imgVistaKodara from "@/assets/portfolio/vistakodara-com-br.webp";
import imgLucenaParquet from "@/assets/portfolio/lucenaparquetarima-com.webp";
import imgMindra from "@/assets/portfolio/mindraperformance-com-br.webp";
import imgAstroweb from "@/assets/portfolio/astrowebatlas-com-br.webp";
import imgFluxo from "@/assets/portfolio/fluxodosmercados-com-br.webp";
import imgContaLab from "@/assets/portfolio/contalabdigital-com-br.webp";
import imgQuiz from "@/assets/portfolio/quiz-vistakodara-com-br.webp";
import imgSuaLoja from "@/assets/portfolio/sualoja-bauerlab-com-br.webp";
import imgReserva from "@/assets/portfolio/reserva-bauerlab-com-br.webp";
import imgJbnEmp from "@/assets/portfolio/jbnempreendimentos-com-br.webp";
import imgJbnCons from "@/assets/portfolio/jbnconsultoria-com-br.webp";
import imgDei from "@/assets/portfolio/deisolucoes-com-br.webp";
import imgGfProd from "@/assets/portfolio/gfprod-me.webp";
import imgCarDreams from "@/assets/portfolio/cardreamspampulha-com-br.webp";
import imgRecanto from "@/assets/portfolio/orecantodafloresta-com-br.webp";
import imgSoulGuetto from "@/assets/portfolio/gruposoulguetto-com-br.webp";
import imgMisterBarbosa from "@/assets/portfolio/misterbarbosa-com-br.webp";
import imgEspacioElizete from "@/assets/portfolio/espacioelizetetavares-com.webp";
import imgParapente from "@/assets/portfolio/parapentearraialdajuda-com-br.webp";

const projectImages: Record<string, typeof imgVistaKodara> = {
  "vistakodara.com.br": imgVistaKodara,
  "lucenaparquetarima.com": imgLucenaParquet,
  "mindraperformance.com.br": imgMindra,
  "astrowebatlas.com.br": imgAstroweb,
  "fluxodosmercados.com.br": imgFluxo,
  "contalabdigital.com.br": imgContaLab,
  "quiz.vistakodara.com.br": imgQuiz,
  "sualoja.bauerlab.com.br": imgSuaLoja,
  "reserva.bauerlab.com.br": imgReserva,
  "jbnempreendimentos.com.br": imgJbnEmp,
  "jbnconsultoria.com.br": imgJbnCons,
  "deisolucoes.com.br": imgDei,
  "gfprod.me": imgGfProd,
  "cardreamspampulha.com.br": imgCarDreams,
  "orecantodafloresta.com.br": imgRecanto,
  "gruposoulguetto.com.br": imgSoulGuetto,
  "misterbarbosa.com.br": imgMisterBarbosa,
  "espacioelizetetavares.com": imgEspacioElizete,
  "parapentearraialdajuda.com.br": imgParapente,
};

type Category = "Sites & Sistemas" | "E-commerce" | "Tráfego Pago" | "Produto Próprio";

interface Project {
  title: string;
  category: Category;
  url: string;
  icon: React.ReactNode;
  tier: "destaque" | "produto" | "volume";
  note?: string;
}

const projects: Project[] = [
  // Destaques, cases com contexto mais completo
  {
    title: "Vista Kodara",
    category: "E-commerce",
    url: "vistakodara.com.br",
    icon: <ShoppingBag size={18} />,
    tier: "destaque",
    note: "Marca do grupo BauerLab",
  },
  {
    title: "Lucena Parquet",
    category: "Sites & Sistemas",
    url: "lucenaparquetarima.com",
    icon: <Globe size={18} />,
    tier: "destaque",
    note: "Cliente internacional (Espanha)",
  },
  {
    title: "Mindra Performance",
    category: "Tráfego Pago",
    url: "mindraperformance.com.br",
    icon: <Globe size={18} />,
    tier: "destaque",
    note: "Cliente da Espanha anunciando no Brasil",
  },
  {
    title: "Astroweb Atlas",
    category: "Sites & Sistemas",
    url: "astrowebatlas.com.br",
    icon: <Monitor size={18} />,
    tier: "destaque",
    note: "Projeto Node.js",
  },
  {
    title: "Fluxo dos Mercados",
    category: "Sites & Sistemas",
    url: "fluxodosmercados.com.br",
    icon: <Monitor size={18} />,
    tier: "destaque",
    note: "Projeto Node.js",
  },
  {
    title: "ContaLab Digital",
    category: "Sites & Sistemas",
    url: "contalabdigital.com.br",
    icon: <Globe size={18} />,
    tier: "destaque",
    note: "Arquitetura com 5 subdomínios de conversão",
  },
  {
    title: "Quiz Vista Kodara",
    category: "Tráfego Pago",
    url: "quiz.vistakodara.com.br",
    icon: <Globe size={18} />,
    tier: "destaque",
    note: "Qualificação de lead para tráfego pago",
  },

  // Produtos próprios, sistemas construídos e operados pela BauerLab
  {
    title: "Sua Loja",
    category: "Produto Próprio",
    url: "sualoja.bauerlab.com.br",
    icon: <Rocket size={18} />,
    tier: "produto",
    note: "Produto próprio BauerLab",
  },
  {
    title: "Reserva",
    category: "Produto Próprio",
    url: "reserva.bauerlab.com.br",
    icon: <Rocket size={18} />,
    tier: "produto",
    note: "Produto próprio BauerLab",
  },

  // Volume, grid simples
  { title: "JBN Empreendimentos", category: "Sites & Sistemas", url: "jbnempreendimentos.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "JBN Consultoria", category: "Sites & Sistemas", url: "jbnconsultoria.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "DEI Soluções", category: "Sites & Sistemas", url: "deisolucoes.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "GF Prod", category: "Sites & Sistemas", url: "gfprod.me", icon: <Globe size={18} />, tier: "volume" },
  { title: "Car Dreams Pampulha", category: "Sites & Sistemas", url: "cardreamspampulha.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "O Recanto da Floresta", category: "Sites & Sistemas", url: "orecantodafloresta.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "Grupo Soul Guetto", category: "Sites & Sistemas", url: "gruposoulguetto.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "Mister Barbosa", category: "Sites & Sistemas", url: "misterbarbosa.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "Espacio Elizete Tavares", category: "Sites & Sistemas", url: "espacioelizetetavares.com", icon: <Globe size={18} />, tier: "volume" },
  { title: "Parapente Arraial da Ajuda", category: "Sites & Sistemas", url: "parapentearraialdajuda.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "Oftalmomed", category: "Sites & Sistemas", url: "oftalmomed2.com.br", icon: <Globe size={18} />, tier: "volume" },
];

const categories: Category[] = ["Sites & Sistemas", "E-commerce", "Tráfego Pago", "Produto Próprio"];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const image = projectImages[project.url];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      viewport={{ once: true }}
      className="group"
    >
      <a
        href={`https://${project.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-border bg-card/40 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 h-full flex flex-col"
      >
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
            <Image
              src={image}
              alt={`Captura de tela do site ${project.title}`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        )}
        <div className="p-4 md:p-8 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2 md:mb-4">
              <div className="w-8 h-8 md:w-11 md:h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>
              <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              {project.category}
            </span>
            <h3 className="font-heading font-bold text-base md:text-2xl group-hover:text-primary transition-colors mb-1 mt-1 md:mt-2">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground font-mono tracking-tight mb-1 md:mb-2">{project.url}</p>
            {project.note && <p className="text-[11px] md:text-xs text-muted-foreground/70">{project.note}</p>}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Projetos = () => {
  const [filter, setFilter] = useState<Category | "Todos">("Todos");

  const filtered = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const destaques = filtered.filter((p) => p.tier === "destaque");
  const produtos = filtered.filter((p) => p.tier === "produto");
  const volume = filtered.filter((p) => p.tier === "volume");

  return (
    <Layout>
      <PageHero
        tag="Portfólio"
        title={<>Resultados reais. <br /> Sem distrações.</>}
        description="Nossa entrega fala por si. Abaixo, uma seleção de infraestruturas digitais e audiovisuais que construímos para marcas que dominam seus nichos."
      />

      <Section className="pt-0">
        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-10">
          <button
            onClick={() => setFilter("Todos")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              filter === "Todos" ? "bg-primary text-primary-foreground" : "border border-border hover:bg-white/5"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === cat ? "bg-primary text-primary-foreground" : "border border-border hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {destaques.length > 0 && (
          <div className="mb-8 md:mb-16">
            <div className="flex items-center gap-2 mb-4 md:mb-6 text-primary">
              <Layers size={16} />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Cases em destaque</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-8">
              {destaques.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {produtos.length > 0 && (
          <div className="mb-8 md:mb-16">
            <div className="flex items-center gap-2 mb-4 md:mb-6 text-primary">
              <Rocket size={16} />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Produtos próprios BauerLab</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4 md:mb-6 max-w-2xl">
              Sistemas que não são cliente, são construídos e operados pela própria agência.
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-8">
              {produtos.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {volume.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4 md:mb-6 text-primary">
              <Globe size={16} />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Mais projetos</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-8">
              {volume.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </Section>

      <section className="py-12 md:py-32 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-6">
              Sua marca merece uma <span className="text-gradient">infraestrutura de elite.</span>
            </p>
            <p className="text-muted-foreground mb-8">
              Não entregamos apenas projetos. Entregamos o alicerce para o seu próximo nível de faturamento.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-lime text-lime-foreground px-8 py-4 rounded-full font-heading font-extrabold hover:scale-105 transition-all"
            >
              Iniciar meu projeto <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projetos;
