import type { Metadata } from "next";
import SistemasDigital from "@/views/SistemasDigital";

export const metadata: Metadata = {
  title: "Sistemas & Digital — Sites e Sistemas de Alta Performance",
  description:
    "Desenvolvemos sites institucionais, sistemas web e plataformas sob medida com foco em performance, usabilidade e conversão.",
  alternates: { canonical: "/sistemas-digital" },
};

export default function Page() {
  return <SistemasDigital />;
}
