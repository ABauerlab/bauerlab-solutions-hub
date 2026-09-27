import KitImprensa from "@/views/KitImprensa";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Kit de Imprensa: BauerLab",
  description: "Logo em alta resolução, bio institucional e dados de contato da BauerLab para imprensa e parceiros.",
  path: "/kit-imprensa",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Kit de Imprensa", path: "/kit-imprensa" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <KitImprensa />
    </>
  );
}
