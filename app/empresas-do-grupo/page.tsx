import type { Metadata } from "next";
import EmpresasDoGrupo from "@/views/EmpresasDoGrupo";

export const metadata: Metadata = {
  title: "Empresas do Grupo — Vista Kodara, Asari e Mambaia",
  description:
    "Conheça as marcas próprias do grupo BauerLab: Vista Kodara (streetwear), Asari (e-commerce artesanal) e Mambaia (estúdio fotográfico e coworking criativo).",
  alternates: { canonical: "/empresas-do-grupo" },
};

export default function Page() {
  return <EmpresasDoGrupo />;
}
