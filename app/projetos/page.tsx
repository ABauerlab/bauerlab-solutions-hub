import Projetos from "@/views/Projetos";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Portfólio de Projetos: Infraestrutura Digital & Design",
  description:
    "Confira os resultados reais que construímos para nossos clientes. Sites, sistemas e landing pages de alta performance.",
  path: "/projetos",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Projetos", path: "/projetos" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Projetos />
    </>
  );
}
