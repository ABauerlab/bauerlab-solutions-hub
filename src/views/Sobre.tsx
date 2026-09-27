"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about.webp";

const values = [
  { title: "Resolver", description: "Nosso trabalho começa no problema. Antes de criar qualquer coisa, entendemos o que precisa ser resolvido. Diagnóstico vem antes de execução." },
  { title: "Estruturar", description: "Organização é a base de tudo que fazemos. Marca, comunicação, processo, entrega, tudo tem sistema, cronograma e padrão de qualidade." },
  { title: "Ativar", description: "Tiramos do papel e colocamos no mundo. No digital, no físico e na experiência. Marca que fica na gaveta não gera resultado." },
  { title: "Evoluir", description: "Cada projeto é uma versão, não um produto final. Marcas evoluem, mercados mudam, e nós acompanhamos essa evolução com método." },
];

const principles = [
  "Escutamos antes de propor. Analisamos antes de criar.",
  "Definimos escopo, prazo e entrega antes de começar qualquer projeto.",
  "Não prometemos o que não podemos entregar.",
  "Tratamos cada marca como se fosse a nossa.",
  "Comunicação clara e profissional durante todo o processo.",
  "Entregamos com qualidade e acompanhamos o resultado.",
];

const Sobre = () => {
  return (
    <Layout>
      <PageHero
        tag="Sobre"
        title="Infraestrutura de marca. Não é agenciazinha de post."
        description="A BauerLab une estratégia, tecnologia, audiovisual e experiência física num único ecossistema, fundada por João Victor Bauer para estruturar marcas e negócios que precisam operar como empresa de verdade, não como projeto pontual."
      />

      <section className="pb-8 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <img src={aboutImg.src} alt="Equipe BauerLab" className="w-full h-[220px] md:h-[500px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossa visão</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Marca forte não nasce de improviso, nasce de método. Cada decisão criativa na BauerLab passa
                por uma lógica de negócio, estética sem estratégia é decoração, não comunicação, e decoração
                não vende.
              </p>
              <p>
                Não vendemos pacote fechado de agência genérica. Operamos como um único ecossistema:
                estratégia, tecnologia, audiovisual e presença física sob o mesmo teto, porque fragmentar
                a marca entre fornecedores diferentes é a forma mais rápida de perder coerência.
              </p>
              <p>
                O grupo BauerLab não fala só em teoria: construímos e operamos marcas próprias (Vista Kodara,
                Asari, Mambaia) usando exatamente o mesmo método que aplicamos para clientes. Prova de domínio
                técnico, não promessa de slide.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Como trabalhamos</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cada projeto começa com escuta. Entendemos o negócio, o mercado, o público e o objetivo 
                antes de propor qualquer solução. Não criamos por impulso. Criamos com informação.
              </p>
              <p>
                A partir disso, montamos um plano claro com escopo, prazos e entregas definidas. 
                Você sabe exatamente o que vai receber, quando vai receber e quanto vai investir. 
                Sem surpresas, sem mudanças de última hora.
              </p>
              <p>
                Entregamos com qualidade e acompanhamos o resultado. Porque marca não é projeto pontual. 
                É construção contínua. E nós estamos aqui para cada etapa dessa construção.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="mb-8 md:mb-12">
          <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
            Nossos valores
          </span>
          <h2 className="text-2xl md:text-4xl font-bold">O que nos move</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="p-4 md:p-6 border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <h3 className="font-heading font-bold text-primary text-lg md:text-xl mb-2 md:mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
              Princípios
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Como tratamos cada projeto.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Não importa o tamanho do projeto. Nossos princípios são os mesmos, 
              porque é assim que se constrói reputação e confiança.
            </p>
          </div>
          <div className="space-y-3">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex gap-3 items-start p-4 border border-border rounded-lg"
              >
                <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-1.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Quer conhecer a BauerLab de perto?"
        description="Converse com a gente. Entendemos seu negócio e mostramos como podemos ajudar, sem compromisso."
      />
    </Layout>
  );
};

export default Sobre;
