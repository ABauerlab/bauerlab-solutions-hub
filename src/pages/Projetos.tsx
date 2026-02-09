import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import digitalImg from "@/assets/digital.jpg";
import brandingImg from "@/assets/branding.jpg";
import audiovisualImg from "@/assets/audiovisual.jpg";
import ativacaoImg from "@/assets/ativacao.jpg";
import materiaisImg from "@/assets/materiais.jpg";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { title: "Sistema de Gestão Interno", category: "Sistemas & Digital", description: "Plataforma web sob medida para controle completo de operações, estoque e equipe. Interface intuitiva, painel administrativo e relatórios automatizados.", image: digitalImg },
  { title: "Identidade Visual — Marca Premium", category: "Posicionamento & Marca", description: "Branding completo para empresa do setor de luxo. Logo, paleta, tipografia, manual de marca e aplicação em todos os materiais.", image: brandingImg },
  { title: "Vídeo Institucional Corporativo", category: "Audiovisual", description: "Produção audiovisual completa — roteiro, captação, edição e color grading — para apresentação institucional de alto impacto.", image: audiovisualImg },
  { title: "Ativação de Lançamento de Produto", category: "Ativação de Marca", description: "Experiência presencial com cenografia, fotos instantâneas personalizadas e integração digital. +500 interações em um único dia.", image: ativacaoImg },
  { title: "Site Institucional de Alta Conversão", category: "Sistemas & Digital", description: "Site responsivo otimizado para SEO e conversão, com design premium, carregamento rápido e painel administrativo.", image: digitalImg },
  { title: "Kit Completo de Materiais de Marca", category: "Materiais Físicos", description: "Cartões, envelopes, pastas, displays e adesivos — todos alinhados à nova identidade visual com acabamento premium.", image: materiaisImg },
];

const Projetos = () => {
  return (
    <Layout>
      <PageHero
        tag="Projetos"
        title="Resultados reais. Sem enrolação."
        description="Uma seleção de projetos que mostram como a BauerLab resolve — do conceito à entrega final. Cada projeto é uma combinação de estratégia, design e execução com foco em resultado."
      />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
              Cada projeto que entregamos é a prova de que{" "}
              <span className="text-gradient">método e criatividade geram resultado.</span>
            </p>
            <p className="text-muted-foreground mb-8">
              Quer ver sua marca aqui? Converse com a BauerLab e descubra como podemos estruturar o seu próximo projeto.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-heading font-semibold hover:bg-primary/90 transition-colors"
            >
              Começar um projeto <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projetos;
