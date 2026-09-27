import MateriaisFisicos from "@/views/MateriaisFisicos";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/schema";

const title = "Materiais Físicos — Extensão Premium da Marca";
const description =
  "Cartões de visita, adesivos, displays e materiais promocionais com qualidade premium e identidade visual consistente.";

export const metadata = pageMetadata({ title, description, path: "/materiais-fisicos" });

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Materiais Físicos", path: "/materiais-fisicos" },
]);

const service = serviceJsonLd({ name: "Materiais Físicos", description, path: "/materiais-fisicos" });

const faq = faqJsonLd([
  {
    question: "Vocês fazem só o design ou também a impressão?",
    answer: "Fazemos o design e acompanhamos a produção até a entrega, garantindo que cores e acabamentos fiquem fiéis ao projeto aprovado.",
  },
  {
    question: "Que tipo de material vocês produzem?",
    answer: "Cartões de visita, adesivos, displays, banners, totens, folders, catálogos e papelaria institucional.",
  },
  {
    question: "O material segue o manual de marca do cliente?",
    answer: "Sim, cada peça é projetada dentro do sistema visual da marca — cores, tipografia e acabamento escolhidos com propósito.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={faq} />
      <MateriaisFisicos />
    </>
  );
}
