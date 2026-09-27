"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import brandingImg from "@/assets/branding.webp";

const items = [
  { title: "Branding completo", description: "Construção de marca do zero, da estratégia à execução. Definimos posicionamento, tom de voz, valores, arquitetura de marca e toda a base para que sua empresa comunique com clareza e autoridade." },
  { title: "Identidade visual", description: "Logo, paleta de cores, tipografia, ícones, padrões visuais e manual de marca. Tudo pensado para funcionar em qualquer aplicação, digital, impresso, sinalização e redes sociais." },
  { title: "Rebranding", description: "Sua marca cresceu, mas a identidade ficou para trás? Atualizamos marcas que precisam evoluir sem perder sua essência. Modernização visual e estratégica com coerência." },
  { title: "Copywriting institucional", description: "Textos que comunicam com clareza e profissionalismo. Desde o slogan até os textos do site, redes sociais e materiais impressos, tudo com tom de voz consistente e alinhado ao posicionamento." },
  { title: "Posicionamento estratégico", description: "Como sua empresa quer ser percebida pelo mercado? Definimos a posição da sua marca, seus diferenciais, público-alvo e a narrativa que vai guiar toda a comunicação." },
];

const PosicionamentoMarca = () => {
  return (
    <Layout>
      <PageHero
        tag="Posicionamento & Marca"
        title="Marca forte é marca coerente. E marca coerente vende."
        description="Construímos marcas que comunicam com clareza, transmitem confiança e se diferenciam no mercado. Do conceito à aplicação, cada detalhe é pensado para gerar percepção de valor."
      />

      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <img src={brandingImg.src} alt="Branding e identidade visual" className="w-full h-[300px] md:h-[500px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O que entregamos</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Cada elemento da sua marca é uma oportunidade de comunicar valor. 
            Nós garantimos que todas essas oportunidades sejam aproveitadas com consistência e profissionalismo.
          </p>
        </div>
        <ServiceDetailList items={items} />
      </Section>

      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Sua marca precisa falar uma língua só.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Posicionamento não é logotipo. É a forma como sua empresa é percebida em cada ponto de contato: 
              no site, nas redes sociais, no cartão de visita, no atendimento e na experiência.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quando todos esses pontos comunicam a mesma mensagem, a confiança aumenta. 
              Quando a marca é coerente, o cliente reconhece, lembra e recomenda.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Na BauerLab, não criamos marcas bonitas que ficam na gaveta. Criamos marcas que funcionam no mundo real. 
              Que vendem, que posicionam e que fazem a diferença no dia a dia do negócio.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: "Pesquisa e análise de mercado", desc: "Entendemos o cenário antes de criar. Analisamos concorrentes, público e tendências." },
              { title: "Naming e tagline", desc: "Nome e slogan que comunicam a essência da marca com impacto e memorabilidade." },
              { title: "Aplicações completas", desc: "Sua marca aplicada em todos os materiais, digital, impresso, uniformes, sinalização." },
              { title: "Manual de marca", desc: "Documento completo com todas as regras de uso, garantindo coerência em qualquer aplicação." },
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
        title="Sua marca transmite o que deveria?"
        description="Converse com a BauerLab. Fazemos um diagnóstico gratuito da sua marca e mostramos como ela pode comunicar melhor, e vender mais."
      />
    </Layout>
  );
};

export default PosicionamentoMarca;
