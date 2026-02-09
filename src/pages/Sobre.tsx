import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const values = [
  { title: "Resolver", description: "Nosso trabalho começa no problema. Entendemos antes de criar." },
  { title: "Estruturar", description: "Organização é a base de tudo. Marca, comunicação, processo — tudo tem sistema." },
  { title: "Ativar", description: "Tiramos do papel. Colocamos no digital, no físico e na experiência." },
  { title: "Evoluir", description: "Cada projeto é uma versão. Marcas evoluem — e nós acompanhamos." },
];

const Sobre = () => {
  return (
    <Layout>
      <PageHero
        tag="Sobre"
        title="Resolvemos. Estruturamos. Ativamos."
        description="A BauerLab é uma empresa criativa e tecnológica que une estratégia, design, tecnologia, audiovisual e experiência física para estruturar marcas e negócios."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossa visão</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Acreditamos que marcas fortes são construídas com método, não com improviso. 
                Cada decisão criativa na BauerLab passa por uma lógica de negócio.
              </p>
              <p>
                Não somos uma agência genérica. Somos uma empresa que resolve problemas reais de marca e posicionamento — 
                usando todas as ferramentas disponíveis: digital, audiovisual, físico e experiencial.
              </p>
              <p>
                Nosso trabalho é tornar marcas coerentes, visíveis e funcionais em todos os pontos de contato com o público.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Como trabalhamos</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cada projeto começa com escuta. Entendemos o negócio, o mercado e o objetivo antes de propor qualquer solução.
              </p>
              <p>
                A partir disso, criamos um plano claro com escopo, prazos e entregas definidas. 
                Sem surpresas, sem mudanças de última hora, sem promessas vazias.
              </p>
              <p>
                Entregamos com qualidade e acompanhamos o resultado. 
                Porque marca não é projeto pontual — é construção contínua.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="mb-10">
          <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary mb-3 block">
            Nossos valores
          </span>
          <h2 className="text-2xl md:text-3xl font-bold">O que nos move</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-border rounded-lg"
            >
              <h3 className="font-heading font-bold text-primary text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
};

export default Sobre;
