import Audiovisual from "@/views/Audiovisual";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/schema";

const title = "Audiovisual Cinematográfico & Produção de Conteúdo";
const description =
  "Produção audiovisual de elite em parceria com o estúdio Mambaia. Vídeos institucionais, fotografia profissional e conteúdo estratégico para marcas premium.";

export const metadata = pageMetadata({ title, description, path: "/audiovisual" });

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Audiovisual", path: "/audiovisual" },
]);

const service = serviceJsonLd({ name: "Audiovisual", description, path: "/audiovisual" });

const faq = faqJsonLd([
  {
    question: "Onde é feita a captação de fotos e vídeos?",
    answer: "Em parceria com o estúdio Mambaia, na Praça Sete em Belo Horizonte, ou no local do cliente conforme o projeto.",
  },
  {
    question: "Vocês fazem só vídeo ou também fotografia?",
    answer: "Os dois: fotografia profissional, vídeos institucionais, conteúdo para redes sociais e captação de eventos.",
  },
  {
    question: "Qual o prazo de entrega da produção?",
    answer: "Entrega em até 7 dias úteis após a captação, conforme o pacote contratado.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={faq} />
      <Audiovisual />
    </>
  );
}
