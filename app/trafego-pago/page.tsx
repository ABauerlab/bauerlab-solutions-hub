import TrafegoPago from "@/views/TrafegoPago";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/schema";

const title = "Tráfego Pago & Performance — Resultados Reais";
const description =
  "Resultados reais de contas de anúncio que operamos: CTR, CPC, custo por lead e por conversa. Sem números inventados ou projeções genéricas.";

export const metadata = pageMetadata({ title, description, path: "/trafego-pago" });

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Tráfego Pago & Performance", path: "/trafego-pago" },
]);

const service = serviceJsonLd({ name: "Tráfego Pago & Performance", description, path: "/trafego-pago" });

const faq = faqJsonLd([
  {
    question: "Vocês garantem resultado com anúncios pagos?",
    answer: "Não fazemos promessa de resultado garantido — cada conta e nicho tem um comportamento diferente. Trabalhamos com dados reais e relatório recorrente de performance.",
  },
  {
    question: "Como sei se minha conta de anúncios está rastreando corretamente?",
    answer: "Fazemos auditoria de rastreamento (pixel, eventos de conversão) antes de escalar qualquer campanha. Já identificamos e corrigimos falhas assim em contas de clientes reais.",
  },
  {
    question: "Recebo relatório do desempenho da campanha?",
    answer: "Sim. Rodamos relatório periódico de performance para clientes ativos, mostrando CTR, CPC, custo por resultado e evolução da conta.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={faq} />
      <TrafegoPago />
    </>
  );
}
