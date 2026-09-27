import PosicionamentoMarca from "@/views/PosicionamentoMarca";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/schema";

const title = "Posicionamento & Marca — Branding Estratégico";
const description =
  "Construímos marcas que comunicam com clareza, transmitem confiança e se diferenciam no mercado. Branding, identidade visual e rebranding.";

export const metadata = pageMetadata({ title, description, path: "/posicionamento-marca" });

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Posicionamento & Marca", path: "/posicionamento-marca" },
]);

const service = serviceJsonLd({ name: "Posicionamento & Marca", description, path: "/posicionamento-marca" });

const faq = faqJsonLd([
  {
    question: "Vocês fazem só a logo ou a marca inteira?",
    answer: "A marca inteira: posicionamento estratégico, identidade visual completa, manual de marca e aplicações — não entregamos só um logotipo isolado.",
  },
  {
    question: "Preciso já ter uma marca para contratar rebranding?",
    answer: "Sim, o rebranding parte de uma marca existente que precisa evoluir. Para marcas novas, o serviço é o branding completo.",
  },
  {
    question: "Vocês entregam manual de marca?",
    answer: "Sim, entregamos um manual com todas as regras de uso da identidade visual, garantindo coerência em qualquer aplicação futura.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={faq} />
      <PosicionamentoMarca />
    </>
  );
}
