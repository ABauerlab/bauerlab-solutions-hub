import type { Metadata } from "next";
import Audiovisual from "@/views/Audiovisual";

export const metadata: Metadata = {
  title: "Audiovisual Cinematográfico & Produção de Conteúdo",
  description:
    "Produção audiovisual de elite em parceria com o estúdio Mambaia. Vídeos institucionais, fotografia profissional e conteúdo estratégico para marcas premium.",
  alternates: { canonical: "/audiovisual" },
};

export default function Page() {
  return <Audiovisual />;
}
