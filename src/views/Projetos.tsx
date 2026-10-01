"use client";

import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Layers, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects, categories, projectImages, type Category, type Project } from "@/lib/projects";

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
