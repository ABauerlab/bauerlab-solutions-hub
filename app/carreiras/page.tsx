import Carreiras from "@/views/Carreiras";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Carreiras — Trabalhe na BauerLab",
  description: "Banco de talentos da BauerLab. Sem vagas abertas no momento, mas sempre de olho em quem faz diferente.",
  path: "/carreiras",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Carreiras", path: "/carreiras" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Carreiras />
    </>
  );
}
