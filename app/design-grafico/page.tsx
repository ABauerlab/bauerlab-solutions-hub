import type { Metadata } from "next";
import DesignGrafico from "@/views/DesignGrafico";

export const metadata: Metadata = {
  title: "Design & Gráfico — Materiais Visuais da Marca",
  description:
    "Posts, banners de campanha, identidade visual aplicada e mockups criados pela BauerLab para clientes e marcas do grupo.",
  alternates: { canonical: "/design-grafico" },
};

export default function Page() {
  return <DesignGrafico />;
}
