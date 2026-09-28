import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { blogPosts } from "@/lib/blog-posts";

const routes = [
  "",
  "/servicos",
  "/sistemas-digital",
  "/posicionamento-marca",
  "/audiovisual",
  "/ativacao-de-marca",
  "/materiais-fisicos",
  "/trafego-pago",
  "/consultoria-digital",
  "/projetos",
  "/empresas-do-grupo",
  "/metodologia",
  "/design-grafico",
  "/blog",
  "/sobre",
  "/contato",
  "/carreiras",
  "/kit-imprensa",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
