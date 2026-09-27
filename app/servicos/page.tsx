import type { Metadata } from "next";
import Services from "@/views/Services";

export const metadata: Metadata = {
  title: "Serviços — Soluções completas para sua marca",
  description:
    "Cada área funciona de forma independente, mas integrada: branding, sistemas digitais, audiovisual, ativação de marca e materiais físicos.",
  alternates: { canonical: "/servicos" },
};

export default function Page() {
  return <Services />;
}
