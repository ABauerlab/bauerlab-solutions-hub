"use client";

import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Monitor, ShoppingBag, Layers, Rocket } from "lucide-react";
import Link from "next/link";

import jbnEmpreendimentosImg from "@/assets/projects/jbnempreendimentos.webp";
import jbnConsultoriaImg from "@/assets/projects/jbnconsultoria.webp";
import deiSolucoesImg from "@/assets/projects/Deisolucoes.webp";
import gfProdImg from "@/assets/projects/GFPROD.webp";
import carDreamsImg from "@/assets/projects/cardreams.webp";
import recantoImg from "@/assets/projects/recantodafloresta.webp";
import astroImg from "@/assets/projects/astrowebatlas.webp";
import contaLabImg from "@/assets/projects/contalab.webp";
import soulGuettoImg from "@/assets/projects/soulguetto.webp";
import misterBarbosaImg from "@/assets/projects/misterbarbosa.webp";
import elizeteTavaresImg from "@/assets/projects/elizetetavares.webp";
import vistaKodaraImg from "@/assets/projects/vistakodara.webp";

type Category = "Sites & Sistemas" | "E-commerce" | "Tráfego Pago" | "Produto Próprio";

interface Project {
  title: string;
  category: Category;
  url: string;
  icon: React.ReactNode;
  image?: string;
  tier: "destaque" | "produto" | "volume";
  note?: string;
}

const projects: Project[] = [
  // Destaques — cases com contexto mais completo
  {
    title: "Vista Kodara",
    category: "E-commerce",
    url: "vistakodara.com.br",
    icon: <ShoppingBag size={18} />,
    image: vistaKodaraImg.src,
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
    image: astroImg.src,
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
    image: contaLabImg.src,
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

  // Produtos próprios — sistemas construídos e operados pela BauerLab
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

  // Volume — grid simples
  { title: "JBN Empreendimentos", category: "Sites & Sistemas", url: "jbnempreendimentos.com.br", icon: <Globe size={18} />, image: jbnEmpreendimentosImg.src, tier: "volume" },
  { title: "JBN Consultoria", category: "Sites & Sistemas", url: "jbnconsultoria.com.br", icon: <Globe size={18} />, image: jbnConsultoriaImg.src, tier: "volume" },
  { title: "DEI Soluções", category: "Sites & Sistemas", url: "deisolucoes.com.br", icon: <Globe size={18} />, image: deiSolucoesImg.src, tier: "volume" },
  { title: "GF Prod", category: "Sites & Sistemas", url: "gfprod.me", icon: <Globe size={18} />, image: gfProdImg.src, tier: "volume" },
  { title: "Car Dreams Pampulha", category: "Sites & Sistemas", url: "cardreamspampulha.com.br", icon: <Globe size={18} />, image: carDreamsImg.src, tier: "volume" },
  { title: "O Recanto da Floresta", category: "Sites & Sistemas", url: "orecantodafloresta.com.br", icon: <Globe size={18} />, image: recantoImg.src, tier: "volume" },
  { title: "Grupo Soul Guetto", category: "Sites & Sistemas", url: "gruposoulguetto.com.br", icon: <Globe size={18} />, image: soulGuettoImg.src, tier: "volume" },
  { title: "Mister Barbosa", category: "Sites & Sistemas", url: "misterbarbosa.com.br", icon: <Globe size={18} />, image: misterBarbosaImg.src, tier: "volume" },
  { title: "Espacio Elizete Tavares", category: "Sites & Sistemas", url: "espacioelizetetavares.com", icon: <Globe size={18} />, image: elizeteTavaresImg.src, tier: "volume" },
  { title: "Parapente Arraial da Ajuda", category: "Sites & Sistemas", url: "parapentearraialdajuda.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "Oftalmomed", category: "Sites & Sistemas", url: "oftalmomed2.com.br", icon: <Globe size={18} />, tier: "volume" },
];

const categories: Category[] = ["Sites & Sistemas", "E-commerce", "Tráfego Pago", "Produto Próprio"];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
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
      className="block glass rounded-2xl overflow-hidden glass-hover transition-all duration-500 h-full flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/5">
            <div className="text-primary/20">{project.icon}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <ExternalLink size={18} />
        </div>
        {project.note && (
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span className="text-xs text-white/90 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {project.note}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            {project.category}
          </span>
          <h3 className="font-heading font-bold text-xl md:text-2xl group-hover:text-primary transition-colors mb-1 mt-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground font-mono tracking-tight">{project.url}</p>
        </div>
      </div>
    </a>
  </motion.div>
);

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
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setFilter("Todos")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              filter === "Todos" ? "bg-primary text-primary-foreground" : "glass hover:bg-white/10"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === cat ? "bg-primary text-primary-foreground" : "glass hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {destaques.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <Layers size={16} />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Cases em destaque</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {destaques.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {produtos.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <Rocket size={16} />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Produtos próprios BauerLab</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Sistemas que não são cliente — são construídos e operados pela própria agência.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {produtos.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {volume.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6 text-primary">
              <Globe size={16} />
              <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Mais projetos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {volume.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </Section>

      <section className="py-20 md:py-32 border-t border-border">
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
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-bold hover:bg-primary/90 transition-all hover:scale-105"
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
