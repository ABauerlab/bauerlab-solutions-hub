import Metodologia from "@/views/Metodologia";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Metodologia — Do briefing à entrega",
  description:
    "Conheça o processo de trabalho da BauerLab: diagnóstico, proposta, produção, validação, entrega e relatório periódico.",
  path: "/metodologia",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Metodologia", path: "/metodologia" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Metodologia />
    </>
  );
}
