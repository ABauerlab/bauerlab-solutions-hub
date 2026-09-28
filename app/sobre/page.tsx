import Sobre from "@/views/Sobre";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Sobre a BauerLab: Resolvemos. Estruturamos. Ativamos.",
  description:
    "A BauerLab é uma empresa criativa e tecnológica que une estratégia, design, tecnologia, audiovisual e experiência física para estruturar marcas e negócios.",
  path: "/sobre",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/sobre" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Sobre />
    </>
  );
}
