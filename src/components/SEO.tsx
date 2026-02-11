import { Helmet } from "react-helmet-async";
import logoUrl from "@/assets/logo.jpeg";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
}

const SEO = ({ 
  title = "BauerLab — Estruturamos marcas para crescer", 
  description = "Estratégia, Design, Tecnologia, Audiovisual e Experiência física. A BauerLab estrutura marcas e negócios para escalar com autoridade.",
  canonical = "https://bauerlab.com.br",
  type = "website"
}: SEOProps) => {
  const siteTitle = title.includes("BauerLab") ? title : `${title} | BauerLab`;
  const fullLogoUrl = `https://bauerlab.com.br${logoUrl}`; // Idealmente usar URL absoluta após deploy

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullLogoUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="BauerLab" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullLogoUrl} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8B5CF6" />
    </Helmet>
  );
};

export default SEO;