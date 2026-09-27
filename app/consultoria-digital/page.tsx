import ConsultoriaDigital from "@/views/ConsultoriaDigital";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/schema";

const title = "Consultoria & Estruturação Digital";
const description =
  "Diagnóstico digital completo, planilhas e dashboards de gestão, estruturação de processos e acompanhamento periódico.";

export const metadata = pageMetadata({ title, description, path: "/consultoria-digital" });

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Consultoria & Estruturação Digital", path: "/consultoria-digital" },
]);

const service = serviceJsonLd({ name: "Consultoria & Estruturação Digital", description, path: "/consultoria-digital" });

const faq = faqJsonLd([
  {
    question: "A consultoria já vem com venda de site ou sistema embutida?",
    answer: "Não. O diagnóstico é honesto: se a conclusão for que sua empresa não precisa de site novo agora, dizemos isso.",
  },
  {
    question: "Vocês fazem planilhas e dashboards de gestão?",
    answer: "Sim, estruturamos planilhas e dashboards sob medida para controle financeiro, operacional ou comercial.",
  },
  {
    question: "A consultoria é pontual ou recorrente?",
    answer: "Pode ser as duas coisas: um diagnóstico único ou acompanhamento periódico para revisar indicadores e prioridades.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={faq} />
      <ConsultoriaDigital />
    </>
  );
}
