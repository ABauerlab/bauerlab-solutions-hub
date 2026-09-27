import AtivacaoMarca from "@/views/AtivacaoMarca";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/schema";

const title = "Ativação de Marca: Experiências Presenciais";
const description =
  "Criamos experiências presenciais que conectam pessoas à sua marca de forma real, tangível e memorável.";

export const metadata = pageMetadata({ title, description, path: "/ativacao-de-marca" });

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
  { name: "Ativação de Marca", path: "/ativacao-de-marca" },
]);

const service = serviceJsonLd({ name: "Ativação de Marca", description, path: "/ativacao-de-marca" });

const faq = faqJsonLd([
  {
    question: "O que é uma ativação de marca, na prática?",
    answer: "É uma experiência presencial planejada, lançamento, inauguração, ação promocional ou evento, que conecta o público à marca fora da tela.",
  },
  {
    question: "Vocês cuidam da execução completa ou só do planejamento?",
    answer: "Cuidamos do planejamento e da execução: conceito, logística, cenografia, equipe e registro audiovisual do evento.",
  },
  {
    question: "A ativação gera conteúdo para redes sociais?",
    answer: "Sim. Toda ativação é documentada com fotos e vídeos profissionais, gerando conteúdo real para os canais da marca.",
  },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={faq} />
      <AtivacaoMarca />
    </>
  );
}
