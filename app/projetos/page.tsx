import type { Metadata } from "next";
import Projetos from "@/views/Projetos";

export const metadata: Metadata = {
  title: "Portfólio de Projetos — Infraestrutura Digital & Design",
  description:
    "Confira os resultados reais que construímos para nossos clientes. Sites, sistemas e landing pages de alta performance.",
  alternates: { canonical: "/projetos" },
};

export default function Page() {
  return <Projetos />;
}
