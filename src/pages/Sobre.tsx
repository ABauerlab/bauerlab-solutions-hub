import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

const values = [
  { title: "Resolver", description: "Nosso trabalho começa no problema. Antes de criar qualquer coisa, entendemos o que precisa ser resolvido. Diagnóstico vem antes de execução." },
  { title: "Estruturar", description: "Organização é a base de tudo que fazemos. Marca, comunicação, processo, entrega — tudo tem sistema, cronograma e padrão de qualidade." },
  { title: "Ativar", description: "Tiramos do papel e colocamos no mundo. No digital, no físico e na experiência. Marca que fica na gaveta não gera resultado." },
  { title: "Evoluir", description: "Cada projeto é uma versão, não um produto final. Marcas evoluem, mercados mudam — e nós acompanhamos essa evolução com método." },
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
        title="Resolvemos. Estruturamos. Ativamos."
        description="A BauerLab é uma empresa criativa e tecnológica que une estratégia, design, tecnologia, audiovisual e experiência física para estruturar marcas e negócios que funcionam no mundo real."
      />

      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <img src={aboutImg} alt="Equipe BauerLab" className="w-full h-[300px] md:h-[500px] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossa visão</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Acreditamos que marcas fortes são construídas com método, não com improviso. 
                Cada decisão criativa na BauerLab passa por uma lógica de negócio, porque estética sem estratégia 
                é decoração, não comunicação.
              </p>
              <p>
                Não somos uma agência genérica que vende pacotes prontos. Somos uma empresa que resolve 
                problemas reais de marca e posicionamento, usando todas as ferramentas disponíveis: 
                digital, audiovisual, físico e experiencial.
              </p>
              <p>
                Nosso trabalho é tornar marcas coerentes, visíveis e funcionais em todos os pontos de contato 
                com o público. Do site ao cartão de visita. Do vídeo institucional à ativação presencial. 
                Tudo integrado. Tudo com propósito.
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
        <div className="mb-12">
          <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
            Nossos valores
          </span>
          <h2 className="text-2xl md:text-4xl font-bold">O que nos move</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="p-6 border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <h3 className="font-heading font-bold text-primary text-xl mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
        description="Converse com a gente. Entendemos seu negócio e mostramos como podemos ajudar — sem compromisso."
      />
    </Layout>
  );
};

export default Sobre;
