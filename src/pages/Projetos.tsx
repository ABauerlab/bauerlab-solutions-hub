import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Monitor, Video } from "lucide-react";
import { Link } from "react-router-dom";

// Importando as imagens dos projetos
import jbnEmpreendimentosImg from "@/assets/projects/jbnempreendimentos.png";
import jbnConsultoriaImg from "@/assets/projects/jbnconsultoria.png";
import deiSolucoesImg from "@/assets/projects/Deisolucoes.png";
import gfProdImg from "@/assets/projects/GFPROD.png";
import carDreamsImg from "@/assets/projects/cardreams.png";
import recantoImg from "@/assets/projects/recantodafloresta.png";
import astroImg from "@/assets/projects/astrowebatlas.png";
import contaLabImg from "@/assets/projects/contalab.png";

const projects = [
  { 
    title: "ContaLab Digital", 
    category: "Sites", 
    url: "contalabdigital.com.br", 
    icon: <Globe size={18} />, 
    image: contaLabImg 
  },
  { 
    title: "Astroweb Atlas", 
    category: "Sistemas", 
    url: "astrowebatlas.com.br", 
    icon: <Monitor size={18} />, 
    image: astroImg 
  },
  { 
    title: "JBN Empreendimentos", 
    category: "Sites", 
    url: "jbnempreendimentos.com.br", 
    icon: <Globe size={18} />, 
    image: jbnEmpreendimentosImg 
  },
  { 
    title: "JBN Consultoria", 
    category: "Sites", 
    url: "jbnconsultoria.com.br", 
    icon: <Globe size={18} />, 
    image: jbnConsultoriaImg 
  },
  { 
    title: "DEI Soluções", 
    category: "Sites", 
    url: "deisolucoes.com.br", 
    icon: <Globe size={18} />, 
    image: deiSolucoesImg 
  },
  { 
    title: "GF Prod", 
    category: "Sites", 
    url: "gfprod.com.br", 
    icon: <Globe size={18} />, 
    image: gfProdImg 
  },
  { 
    title: "Car Dreams Pampulha", 
    category: "Sites", 
    url: "cardreamspampulha.com.br", 
    icon: <Globe size={18} />, 
    image: carDreamsImg 
  },
  { 
    title: "O Recanto da Floresta", 
    category: "Sites", 
    url: "orecantodafloresta.com.br", 
    icon: <Globe size={18} />, 
    image: recantoImg 
  },
  { title: "Mister Barbosa", category: "Sites", url: "misterbarbosa.com.br", icon: <Globe size={18} /> },
  { title: "Grupo Soul Guetto", category: "Sites", url: "gruposoulguetto.com.br", icon: <Globe size={18} /> },
  { title: "Espacio Elizete Tavares", category: "Sites", url: "espacioelizetetavares.com", icon: <Globe size={18} /> },
  { title: "Produção Audiovisual", category: "Audiovisual", url: "edfaria.com.br", icon: <Video size={18} />, partner: "Ed Faria" },
];

const Projetos = () => {
  return (
    <Layout>
      <PageHero
        tag="Portfólio"
        title={<>Resultados reais. <br /> Sem distrações.</>}
        description="Nossa entrega fala por si. Abaixo, uma seleção de infraestruturas digitais e audiovisuais que construímos para marcas que dominam seus nichos."
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass rounded-2xl overflow-hidden glass-hover transition-all duration-500 h-full flex flex-col"
              >
                {/* Preview da Imagem */}
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
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        {project.category}
                      </span>
                      {project.partner && (
                        <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                          Dir. {project.partner}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl group-hover:text-primary transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono tracking-tight">
                      {project.url}
                    </p>
                  </div>
                </div>
              </a>
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
              Sua marca merece uma <span className="text-gradient">infraestrutura de elite.</span>
            </p>
            <p className="text-muted-foreground mb-8">
              Não entregamos apenas projetos. Entregamos o alicerce para o seu próximo nível de faturamento.
            </p>
            <Link
              to="/contato"
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