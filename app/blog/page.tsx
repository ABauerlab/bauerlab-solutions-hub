import type { Metadata } from "next";
import Blog from "@/views/Blog";

export const metadata: Metadata = {
  title: "Blog — Insights sobre marca, tecnologia e performance",
  description:
    "Conteúdo autoral da BauerLab sobre estratégia digital, branding, audiovisual e tráfego pago.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <Blog />;
}
