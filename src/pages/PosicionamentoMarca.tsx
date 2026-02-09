import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";

const items = [
  { title: "Branding", description: "Construção de marca do zero, com estratégia, identidade e posicionamento definidos." },
  { title: "Identidade visual", description: "Logo, paleta, tipografia, manual de marca — tudo com coerência e profissionalismo." },
  { title: "Rebranding", description: "Atualização de marcas que precisam evoluir sem perder sua essência." },
  { title: "Copywriting institucional", description: "Textos que comunicam com clareza, profissionalismo e tom de voz consistente." },
  { title: "Posicionamento estratégico", description: "Definição clara de como sua marca se apresenta, comunica e se diferencia no mercado." },
];

const PosicionamentoMarca = () => {
  return (
    <Layout>
      <PageHero
        tag="Posicionamento & Marca"
        title="Marca forte é marca coerente."
        description="Construímos marcas que comunicam com clareza, transmitem confiança e se diferenciam no mercado. Do conceito à aplicação."
      />
      <Section>
        <ServiceDetailList items={items} />
      </Section>
      <Section className="border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Sua marca precisa falar uma língua só.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Posicionamento não é logotipo. É a forma como sua empresa é percebida em cada ponto de contato — 
            no digital, no físico, na comunicação e na experiência. Nós estruturamos tudo isso.
          </p>
        </div>
      </Section>
      <CTASection />
    </Layout>
  );
};

export default PosicionamentoMarca;
