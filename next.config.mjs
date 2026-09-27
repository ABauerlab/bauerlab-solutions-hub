/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Exportação 100% estática: gera HTML pré-renderizado por rota sem precisar
  // de um processo Node.js em produção. Publicável como site estático comum
  // (mesmo esquema que o bauerlab.com.br já usa hoje na Hostinger).
  output: "export",
  trailingSlash: true,
  images: {
    // next/image não pode otimizar on-demand sem servidor; as imagens já
    // saem pré-otimizadas (WebP/AVIF) no build, então isso é seguro.
    unoptimized: true,
  },
};

export default nextConfig;
