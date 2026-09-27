import type { Metadata } from "next";
import Metodologia from "@/views/Metodologia";

export const metadata: Metadata = {
  title: "Metodologia — Do briefing à entrega",
  description:
    "Conheça o processo de trabalho da BauerLab: diagnóstico, proposta, produção, validação, entrega e relatório periódico.",
  alternates: { canonical: "/metodologia" },
};

export default function Page() {
  return <Metodologia />;
}
