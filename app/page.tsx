import IndexPage from "@/views/Index";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "BauerLab — Estruturamos marcas para o próximo nível",
  description:
    "Estratégia, tecnologia e audiovisual integrados em um ecossistema único para sua empresa escalar com autoridade e design de elite.",
  path: "/",
});

export default function Page() {
  return <IndexPage />;
}
