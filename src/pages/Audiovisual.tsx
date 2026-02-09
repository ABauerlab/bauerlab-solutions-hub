import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import audiovisualImg from "@/assets/audiovisual.jpg";

const items = [
  { title: "Fotografia profissional", description: "Imagens que comunicam a essência da sua marca com qualidade e intenção. Fotografia de produtos, ambientes, equipe e eventos — com direção de arte e pós-produção profissional." },
  { title: "Vídeos institucionais", description: "Apresente sua empresa com autoridade. Vídeos que contam a história da sua marca, mostram sua estrutura e transmitem confiança para clientes e parceiros." },
  { title: "Conteúdo para redes sociais", description: "Criação visual e audiovisual estratégica para alimentar seus canais com consistência. Reels, stories, fotos, carrosséis — tudo alinhado ao posicionamento da marca." },
  { title: "Captação de eventos", description: "Registro profissional de eventos corporativos, lançamentos, inaugurações e ativações. Fotos e vídeos que documentam e valorizam cada momento." },
  { title: "Vídeos promocionais", description: "Conteúdo com foco em conversão para campanhas e lançamentos. Vídeos curtos, diretos e impactantes que geram resultado — para anúncios, redes sociais e apresentações comerciais." },
  { title: "Drone e captação aérea", description: "Imagens aéreas que mostram a dimensão do seu negócio. Ideal para empresas com sede física, eventos de grande porte e projetos arquitetônicos." },
];

const Audiovisual = () => {
  return (
    <Layout>
      <PageHero
        tag="Audiovisual"
        title="Audiovisual estratégico. Cada imagem tem um propósito."
        description="Não fazemos vídeos e fotos por estética. Cada captação, cada edição, cada frame é pensado para comunicar com impacto e gerar resultado para a sua marca."
      />

      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <img src={audiovisualImg} alt="Produção audiovisual profissional" className="w-full h-[300px] md:h-[500px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O que entregamos</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Nosso audiovisual não é genérico. É planejado com base no posicionamento da marca e nos objetivos de comunicação do negócio.
          </p>
        </div>
        <ServiceDetailList items={items} />
      </Section>

      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Imagem é linguagem. E precisa ser precisa.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vivemos na era do visual. A primeira impressão que o cliente tem da sua empresa é uma imagem. 
              Um vídeo. Uma foto. Se esse conteúdo é amador, a percepção da marca é amadora.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O audiovisual da BauerLab é ferramenta de comunicação estratégica. Cada foto, cada frame, 
              cada edição é pensada para transmitir exatamente o que sua marca precisa dizer — com qualidade 
              que gera credibilidade e impacto que gera resultado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desde a pré-produção (roteiro, direção de arte, planejamento) até a pós-produção 
              (edição, color grading, entrega final), cuidamos de cada detalhe para que o resultado 
              seja impecável e alinhado à identidade da sua marca.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: "Pré-produção completa", desc: "Roteiro, storyboard, direção de arte e planejamento detalhado antes de qualquer captação." },
              { title: "Equipamento profissional", desc: "Câmeras, lentes, iluminação, microfones e drones de alta qualidade para cada projeto." },
              { title: "Pós-produção impecável", desc: "Edição, color grading, motion graphics e trilha sonora que elevam o resultado final." },
              { title: "Entrega otimizada", desc: "Formatos otimizados para cada plataforma — site, Instagram, YouTube, TikTok, apresentações." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-heading font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Sua marca precisa de conteúdo visual profissional?"
        description="Converse com a BauerLab. Planejamos e executamos toda a produção audiovisual que sua marca precisa — com estratégia e qualidade."
      />
    </Layout>
  );
};

export default Audiovisual;
