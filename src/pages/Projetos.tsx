import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Monitor, Video } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { title: "JBN Empreendimentos", category: "Sites", url: "jbnempreendimentos.com.br", icon: <Globe size={18} /> },
  { title: "JBN Consultoria", category: "Sites", url: "jbnconsultoria.com.br", icon: <Globe size={18} /> },
  { title: "DEI Soluções", category: "Sites", url: "deisolucoes.com.br", icon: <Globe size={18} /> },
  { title: "GF Prod", category: "Sites", url: "gfprod.com.br", icon: <Globe size={18} /> },
  { title: "Car Dreams Pampulha", category: "Sites", url: "cardreamspampulha.com.br", icon: <Globe size={18} /> },
  { title: "Mister Barbosa", category: "Sites", url: "misterbarbosa.com.br", icon: <Globe size={18} /> },
  { title: "O Recanto da Floresta", category: "Sites", url: "orecantodafloresta.com.br", icon: <Globe size={18} /> },
  { title: "Grupo Soul Guetto", category: "Sites", url: "gruposoulguetto.com.br", icon: <Globe size={18} /> },
  { title: "Espacio Elizete Tavares", category: "Sites", url: "espacioelizetetavares.com", icon: <Globe size={18} /> },
  { title: "Astroweb Atlas", category: "Sistemas", url: "astrowebatlas.com.br", icon: <Monitor size={18} /> },
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
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 glass rounded-2xl glass-hover transition-all duration-500"
              >
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-heading font-bold text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.partner && (
                        <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                          Dir. {project.partner}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground font-mono tracking-tight">
                      {project.url}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500">
                    <ExternalLink size={18} />
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