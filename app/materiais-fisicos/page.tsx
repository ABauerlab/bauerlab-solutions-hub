import type { Metadata } from "next";
import MateriaisFisicos from "@/views/MateriaisFisicos";

export const metadata: Metadata = {
  title: "Materiais Físicos — Extensão Premium da Marca",
  description:
    "Cartões de visita, adesivos, displays e materiais promocionais com qualidade premium e identidade visual consistente.",
  alternates: { canonical: "/materiais-fisicos" },
};

export default function Page() {
  return <MateriaisFisicos />;
}
