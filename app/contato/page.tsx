import type { Metadata } from "next";
import Contato from "@/views/Contato";

export const metadata: Metadata = {
  title: "Contato — Vamos conversar sobre o seu projeto",
  description:
    "Fale com a BauerLab pelo WhatsApp ou e-mail. Diagnóstico gratuito, sem compromisso.",
  alternates: { canonical: "/contato" },
};

export default function Page() {
  return <Contato />;
}
