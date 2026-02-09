import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";

const items = [
  { title: "Fotografia profissional", description: "Imagens que comunicam a essência da sua marca com qualidade e intenção." },
  { title: "Vídeos institucionais", description: "Apresente sua empresa com autoridade. Vídeos que vendem sem parecer propaganda." },
  { title: "Conteúdo para redes sociais", description: "Criação visual e audiovisual estratégica para alimentar seus canais com consistência." },
  { title: "Captação de eventos", description: "Registro profissional de eventos corporativos, lançamentos e ativações." },
  { title: "Vídeos promocionais", description: "Conteúdo com foco em conversão para campanhas e lançamentos." },
];

const Audiovisual = () => {
  return (
    <Layout>
      <PageHero
        tag="Audiovisual"
        title="Audiovisual estratégico. Não só estético."
        description="Cada imagem e cada vídeo tem um propósito. Captamos, editamos e entregamos conteúdo que comunica com impacto e gera resultado."
      />
      <Section>
        <ServiceDetailList items={items} />
      </Section>
      <Section className="border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Imagem é linguagem. E precisa ser precisa.</h2>
          <p className="text-muted-foreground leading-relaxed">
            O audiovisual da BauerLab não é decoração. É ferramenta de comunicação estratégica. 
            Cada foto, cada frame, cada edição é pensada para transmitir exatamente o que sua marca precisa dizer.
          </p>
        </div>
      </Section>
      <CTASection />
    </Layout>
  );
};

export default Audiovisual;
