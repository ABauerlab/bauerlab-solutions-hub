import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/servicos",
  "/sistemas-digital",
  "/posicionamento-marca",
  "/audiovisual",
  "/ativacao-de-marca",
  "/materiais-fisicos",
  "/projetos",
  "/empresas-do-grupo",
  "/metodologia",
  "/design-grafico",
  "/blog",
  "/sobre",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
