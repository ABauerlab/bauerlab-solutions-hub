import type { Metadata } from "next";
import Sobre from "@/views/Sobre";

export const metadata: Metadata = {
  title: "Sobre a BauerLab — Resolvemos. Estruturamos. Ativamos.",
  description:
    "A BauerLab é uma empresa criativa e tecnológica que une estratégia, design, tecnologia, audiovisual e experiência física para estruturar marcas e negócios.",
  alternates: { canonical: "/sobre" },
};

export default function Page() {
  return <Sobre />;
}
