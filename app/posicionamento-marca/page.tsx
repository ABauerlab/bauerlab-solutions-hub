import type { Metadata } from "next";
import PosicionamentoMarca from "@/views/PosicionamentoMarca";

export const metadata: Metadata = {
  title: "Posicionamento & Marca — Branding Estratégico",
  description:
    "Construímos marcas que comunicam com clareza, transmitem confiança e se diferenciam no mercado. Branding, identidade visual e rebranding.",
  alternates: { canonical: "/posicionamento-marca" },
};

export default function Page() {
  return <PosicionamentoMarca />;
}
