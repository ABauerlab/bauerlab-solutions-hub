import DesignGrafico from "@/views/DesignGrafico";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Design & Gráfico — Materiais Visuais da Marca",
  description:
    "Posts, banners de campanha, identidade visual aplicada e mockups criados pela BauerLab para clientes e marcas do grupo.",
  path: "/design-grafico",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Design & Gráfico", path: "/design-grafico" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <DesignGrafico />
    </>
  );
}
