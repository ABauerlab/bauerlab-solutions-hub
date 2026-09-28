import SistemasDigital from "@/views/SistemasDigital";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/schema";

const title = "Sistemas & Digital: Sites e Sistemas de Alta Performance";
const description =
  "Desenvolvemos sites institucionais, sistemas web e plataformas sob medida com foco em performance, usabilidade e conversão.";

export const metadata = pageMetadata({ title, description, path: "/sistemas-digital" });

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Sistemas & Digital", path: "/sistemas-digital" },
]);

const service = serviceJsonLd({ name: "Sistemas & Digital", description, path: "/sistemas-digital" });

const faq = faqJsonLd([
  {
    question: "O site é feito em template ou sob medida?",
    answer: "Sob medida. Não usamos templates prontos, cada site é projetado para o negócio específico do cliente.",
  },
  {
    question: "O sistema fica pronto para eu gerenciar sozinho?",
    answer: "Sim. Entregamos com painel administrativo simples para o cliente gerenciar conteúdo sem depender da agência.",
  },
  {
    question: "Vocês também fazem sistemas web personalizados, não só sites?",
    answer: "Sim. Desenvolvemos plataformas sob medida quando nenhuma solução pronta do mercado resolve o problema do cliente.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={faq} />
      <SistemasDigital />
    </>
  );
}
