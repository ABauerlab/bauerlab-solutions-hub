import Contato from "@/views/Contato";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Contato: Vamos conversar sobre o seu projeto",
  description: "Fale com a BauerLab pelo WhatsApp ou e-mail. Diagnóstico gratuito, sem compromisso.",
  path: "/contato",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Início", path: "/" },
  { name: "Contato", path: "/contato" },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Contato />
    </>
  );
}
