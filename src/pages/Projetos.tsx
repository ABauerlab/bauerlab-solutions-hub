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
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { title: "JBN Empreendimentos", category: "Sites", url: "jbnempreendimentos.com.br", image: digitalImg },
  { title: "JBN Consultoria", category: "Sites", url: "jbnconsultoria.com.br", image: digitalImg },
  { title: "DEI Soluções", category: "Sites", url: "deisolucoes.com.br", image: digitalImg },
  { title: "GF Prod", category: "Sites", url: "gfprod.com.br", image: digitalImg },
  { title: "Car Dreams Pampulha", category: "Sites", url: "cardreamspampulha.com.br", image: digitalImg },
  { title: "Mister Barbosa", category: "Sites", url: "misterbarbosa.com.br", image: digitalImg },
  { title: "O Recanto da Floresta", category: "Sites", url: "orecantodafloresta.com.br", image: digitalImg },
  { title: "Grupo Soul Guetto", category: "Sites", url: "gruposoulguetto.com.br", image: digitalImg },
  { title: "Espacio Elizete Tavares", category: "Sites", url: "espacioelizetetavares.com", image: digitalImg },
  { title: "Astroweb Atlas", category: "Sistemas", url: "astrowebatlas.com.br", image: ativacaoImg },
  { title: "Ed Faria", category: "Audiovisual", url: "edfaria.com.br", image: audiovisualImg },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={`https://${project.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-heading font-semibold tracking-widest uppercase text-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground font-mono">{project.url}</p>
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