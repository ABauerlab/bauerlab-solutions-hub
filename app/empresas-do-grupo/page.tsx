import EmpresasDoGrupo from "@/views/EmpresasDoGrupo";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Empresas do Grupo: Vista Kodara, Asari e Mambaia",
  description:
    "Conheça as marcas próprias do grupo BauerLab: Vista Kodara (streetwear), Asari (e-commerce artesanal) e Mambaia (estúdio fotográfico e coworking criativo).",
  path: "/empresas-do-grupo",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Empresas do Grupo", path: "/empresas-do-grupo" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <EmpresasDoGrupo />
    </>
  );
}
