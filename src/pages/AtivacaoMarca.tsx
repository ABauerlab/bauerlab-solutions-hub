import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";

const items = [
  { title: "Ativações de marca para empresas", description: "Experiências presenciais que conectam o público à sua marca de forma memorável." },
  { title: "Experiências presenciais", description: "Momentos que saem da tela e viram vivência — com planejamento e execução profissional." },
  { title: "Ações promocionais", description: "Promoções e campanhas presenciais com estratégia, não improviso." },
  { title: "Fotos instantâneas (Polaroid)", description: "Ativação com fotos instantâneas personalizadas — recordação física da experiência." },
  { title: "Conexão físico + digital", description: "Integramos a experiência presencial ao digital: QR codes, redes sociais, captação de dados." },
];

const AtivacaoMarca = () => {
  return (
    <Layout>
      <PageHero
        tag="Ativação de Marca"
        title="Sua marca fora da tela. Na mão, no olho, na experiência."
        description="Criamos experiências presenciais que conectam pessoas à sua marca de forma real, tangível e memorável. A marca sai da tela e vira momento."
      />
      <Section>
        <ServiceDetailList items={items} />
      </Section>
      <Section className="border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">A marca que as pessoas tocam é a marca que lembram.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ativação de marca não é evento. É estratégia de conexão. Planejamos cada detalhe para que 
            a experiência gere lembrança, engajamento e vínculo real entre o público e a sua marca.
          </p>
        </div>
      </Section>
      <CTASection />
    </Layout>
  );
};

export default AtivacaoMarca;
