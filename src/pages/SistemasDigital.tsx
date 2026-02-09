import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";

const items = [
  { title: "Sites institucionais", description: "Presença digital profissional com foco em conversão e credibilidade." },
  { title: "Sistemas web", description: "Plataformas funcionais sob medida para otimizar processos internos e externos." },
  { title: "Plataformas sob medida", description: "Soluções personalizadas que resolvem problemas reais do seu negócio." },
  { title: "Google Meu Negócio", description: "Configuração e otimização para visibilidade local e regional." },
  { title: "Automações básicas", description: "Automatize tarefas repetitivas e ganhe eficiência operacional." },
  { title: "Estruturação digital completa", description: "Do domínio ao e-mail, do site ao sistema — tudo organizado e funcional." },
];

const SistemasDigital = () => {
  return (
    <Layout>
      <PageHero
        tag="Sistemas & Digital"
        title="Não é site bonito. É sistema funcional."
        description="Desenvolvemos soluções digitais que funcionam de verdade. Sites, sistemas, plataformas e automações que estruturam o seu negócio no digital."
      />
      <Section>
        <ServiceDetailList items={items} />
      </Section>
      <Section className="border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tecnologia a serviço do resultado.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada sistema que desenvolvemos é pensado para resolver um problema real. 
            Não entregamos templates — entregamos ferramentas que fazem sua operação funcionar melhor, 
            crescer com organização e escalar com segurança.
          </p>
        </div>
      </Section>
      <CTASection />
    </Layout>
  );
};

export default SistemasDigital;
