import type { Metadata } from "next";
import AtivacaoMarca from "@/views/AtivacaoMarca";

export const metadata: Metadata = {
  title: "Ativação de Marca — Experiências Presenciais",
  description:
    "Criamos experiências presenciais que conectam pessoas à sua marca de forma real, tangível e memorável.",
  alternates: { canonical: "/ativacao-de-marca" },
};

export default function Page() {
  return <AtivacaoMarca />;
}
