import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Sistema de Gestão Interno", category: "Sistemas & Digital", description: "Plataforma web sob medida para controle de operações, estoque e equipe." },
  { title: "Identidade Visual — Marca Premium", category: "Posicionamento & Marca", description: "Branding completo para empresa do setor de luxo, com manual de marca e aplicações." },
  { title: "Vídeo Institucional Corporativo", category: "Audiovisual", description: "Produção audiovisual para apresentação institucional com captação e edição profissional." },
  { title: "Ativação de Lançamento", category: "Ativação de Marca", description: "Experiência presencial com fotos instantâneas e integração digital para lançamento de produto." },
  { title: "Site Institucional Responsivo", category: "Sistemas & Digital", description: "Site otimizado para SEO e conversão, com design premium e carregamento rápido." },
  { title: "Kit de Materiais de Marca", category: "Materiais Físicos", description: "Cartões, envelopes, pastas e displays alinhados à nova identidade visual." },
];

const Projetos = () => {
  return (
    <Layout>
      <PageHero
        tag="Projetos"
        title="Resultados reais. Sem enrolação."
        description="Uma seleção de projetos que mostram como a BauerLab resolve — do conceito à entrega final."
      />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-heading">{project.category}</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      <CTASection title="Quer ver sua marca aqui?" description="Converse com a BauerLab e descubra como podemos estruturar o seu próximo projeto." />
    </Layout>
  );
};

export default Projetos;
