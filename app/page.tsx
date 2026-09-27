import type { Metadata } from "next";
import IndexPage from "@/views/Index";

export const metadata: Metadata = {
  title: "BauerLab — Estruturamos marcas para o próximo nível",
  description:
    "Estratégia, tecnologia e audiovisual integrados em um ecossistema único para sua empresa escalar com autoridade e design de elite.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <IndexPage />;
}
