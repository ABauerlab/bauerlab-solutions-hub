"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ServiceDetailList from "@/components/ServiceDetailList";
import CTASection from "@/components/CTASection";

const items = [
  { title: "Diagnóstico digital completo", description: "Auditoria da presença digital atual: site, redes sociais, Google Meu Negócio, rastreamento de anúncios e infraestrutura. Identificamos o que está funcionando e o que está custando oportunidade." },
  { title: "Planilhas e dashboards de gestão", description: "Estruturação de controle financeiro, operacional ou comercial em planilhas e dashboards sob medida, para quem precisa de clareza de números sem depender de sistema caro." },
  { title: "Estruturação de processos", description: "Organização do fluxo de trabalho entre marketing, vendas e operação, para que a estrutura digital sustente o crescimento em vez de travá-lo." },
  { title: "Escolha de stack e fornecedores", description: "Orientação imparcial sobre quais ferramentas e sistemas realmente fazem sentido para o estágio atual do negócio, evitando contratar tecnologia redundante." },
  { title: "Acompanhamento periódico", description: "Consultoria recorrente para revisar indicadores, ajustar prioridades e manter a estrutura digital alinhada ao crescimento da empresa." },
];

const ConsultoriaDigital = () => {
  return (
    <Layout>
      <PageHero
        tag="Consultoria & Estruturação Digital"
        title="Antes de construir, entender o que realmente precisa ser construído."
        description="Nem todo negócio precisa de site novo, sistema novo ou campanha nova. Às vezes precisa de diagnóstico, organização e método. É isso que essa consultoria entrega."
      />

      <Section>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">O que entregamos</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Consultoria não é relatório genérico. É diagnóstico real seguido de plano de ação, com prioridades
            claras sobre onde investir primeiro.
          </p>
        </div>
        <ServiceDetailList items={items} highlightFirst />
      </Section>

      <CTASection
        title="Não sabe por onde começar a estruturar seu digital?"
        description="Fale com a BauerLab. Fazemos um diagnóstico honesto antes de vender qualquer solução."
      />
    </Layout>
  );
};

export default ConsultoriaDigital;
