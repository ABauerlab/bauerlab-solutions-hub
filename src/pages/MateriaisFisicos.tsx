import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";

const items = [
  { title: "Cartões de visita", description: "Design profissional e impressão premium que representam a seriedade da sua marca." },
  { title: "Adesivos e etiquetas", description: "Materiais que estendem a identidade visual para o mundo físico." },
  { title: "Displays e banners", description: "Materiais de ponto de venda e eventos com qualidade gráfica impecável." },
  { title: "Materiais promocionais", description: "Folders, catálogos e peças impressas com foco em comunicação e conversão." },
  { title: "Produção com foco em marca", description: "Cada material é uma extensão da marca — não apenas uma impressão qualquer." },
];

const MateriaisFisicos = () => {
  return (
    <Layout>
      <PageHero
        tag="Materiais Físicos"
        title="Não é gráfica. É extensão da marca."
        description="Produzimos materiais gráficos que mantêm a identidade visual, a qualidade e a coerência da sua marca em cada peça impressa."
      />
      <Section>
        <ServiceDetailList items={items} />
      </Section>
      <Section className="border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O físico comunica tanto quanto o digital.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Um cartão de visita diz muito sobre uma empresa. Um display mal feito também. 
            Na BauerLab, cada material físico é tratado com o mesmo rigor criativo e estratégico do digital.
          </p>
        </div>
      </Section>
      <CTASection />
    </Layout>
  );
};

export default MateriaisFisicos;
