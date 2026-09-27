import Blog from "@/views/Blog";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Blog — Insights sobre marca, tecnologia e performance",
  description:
    "Conteúdo autoral da BauerLab sobre estratégia digital, branding, audiovisual e tráfego pago.",
  path: "/blog",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Blog />
    </>
  );
}
