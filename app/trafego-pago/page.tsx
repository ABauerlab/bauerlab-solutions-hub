import type { Metadata } from "next";
import TrafegoPago from "@/views/TrafegoPago";

export const metadata: Metadata = {
  title: "Tráfego Pago & Performance — Resultados Reais",
  description:
    "Resultados reais de contas de anúncio que operamos: CTR, CPC, custo por lead e por conversa. Sem números inventados ou projeções genéricas.",
  alternates: { canonical: "/trafego-pago" },
};

export default function Page() {
  return <TrafegoPago />;
}
