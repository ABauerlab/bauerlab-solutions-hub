"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import ativacaoImg from "@/assets/ativacao.webp";

const items = [
  { title: "Ativações de marca para empresas", description: "Experiências presenciais que conectam o público à sua marca de forma memorável e impactante. Planejamos e executamos ativações para lançamentos, inaugurações, feiras, eventos corporativos e ações promocionais." },
  { title: "Experiências presenciais imersivas", description: "Momentos que saem da tela e viram vivência real. Cenários instagramáveis, espaços interativos, experiências sensoriais. Tudo planejado para gerar engajamento e lembrança de marca." },
  { title: "Ações promocionais estratégicas", description: "Promoções e campanhas presenciais com estratégia, não improviso. Distribuição de brindes, sampling, ações de guerrilha e experiências que criam vínculo entre a marca e o público." },
  { title: "Fotos instantâneas (Polaroid)", description: "Ativação com fotos instantâneas personalizadas com a identidade da marca. O público leva uma lembrança física da experiência, e a marca ganha visibilidade orgânica nas redes sociais." },
  { title: "Conexão do físico com o digital", description: "Integramos a experiência presencial ao digital: QR codes, hashtags, compartilhamento em tempo real, captação de leads e análise de dados. Tudo conectado para maximizar o resultado." },
  { title: "Cenografia e ambientação", description: "Criação de espaços de marca com cenografia profissional. Stands, lounges, vitrines e ambientes que traduzem a identidade visual da empresa em experiência física." },
];

const AtivacaoMarca = () => {
  return (
    <Layout>
      <PageHero
        tag="Ativação de Marca"
        title="Sua marca fora da tela. Na mão, no olho, na experiência."
        description="Criamos experiências presenciais que conectam pessoas à sua marca de forma real, tangível e memorável. A marca sai da tela e vira momento. Planejado, executado e documentado com profissionalismo."
      />

      <section className="pb-8 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <img src={ativacaoImg.src} alt="Ativação de marca" className="w-full h-[220px] md:h-[500px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O que entregamos</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Ativação de marca não é evento genérico. É estratégia de conexão. Cada detalhe é pensado 
            para gerar lembrança, engajamento e vínculo real entre o público e a sua marca.
          </p>
        </div>
        <ServiceDetailList items={items} highlightFirst />
      </Section>

      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A marca que as pessoas tocam é a marca que lembram.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No digital, o público rola o feed e esquece. No presencial, ele vive, sente e leva para casa. 
              Uma ativação de marca bem feita gera mais impacto do que semanas de anúncio online, 
              porque a experiência é real.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na BauerLab, planejamos cada ativação com estratégia. Definimos o objetivo (awareness, engajamento, 
              captação de leads), criamos a experiência, executamos com profissionalismo e documentamos tudo 
              com audiovisual de alta qualidade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              E o melhor: conectamos o físico ao digital. A experiência presencial gera conteúdo para as redes, 
              dados para o CRM e memória para o público. Tudo integrado. Tudo medido. Tudo com resultado.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: "Planejamento completo", desc: "Da ideia à execução: definimos conceito, logística, equipe, cronograma e fornecedores." },
              { title: "Produção profissional", desc: "Montagem, cenografia, materiais de marca e equipe treinada para cada tipo de ativação." },
              { title: "Registro audiovisual", desc: "Fotos e vídeos profissionais da ativação para uso em redes sociais e comunicação institucional." },
              { title: "Relatório de resultados", desc: "Dados de alcance, engajamento, leads captados e análise de performance da ativação." },
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
        title="Quer ativar sua marca com experiências reais?"
        description="Converse com a BauerLab. Planejamos e executamos ativações que fazem sua marca sair da tela e virar experiência."
      />
    </Layout>
  );
};

export default AtivacaoMarca;
