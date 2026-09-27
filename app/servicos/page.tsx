import Services from "@/views/Services";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Serviços — Soluções completas para sua marca",
  description:
    "Cada área funciona de forma independente, mas integrada: branding, sistemas digitais, tráfego pago, audiovisual, ativação de marca e materiais físicos.",
  path: "/servicos",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Serviços", path: "/servicos" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Services />
    </>
  );
}
