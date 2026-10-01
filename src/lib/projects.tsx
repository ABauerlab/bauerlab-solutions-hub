import { Globe, Monitor, ShoppingBag, Rocket } from "lucide-react";
import type { StaticImageData } from "next/image";
import imgVistaKodara from "@/assets/portfolio/vistakodara-com-br.webp";
import imgLucenaParquet from "@/assets/portfolio/lucenaparquetarima-com.webp";
import imgMindra from "@/assets/portfolio/mindraperformance-com-br.webp";
import imgAstroweb from "@/assets/portfolio/astrowebatlas-com-br.webp";
import imgFluxo from "@/assets/portfolio/fluxodosmercados-com-br.webp";
import imgContaLab from "@/assets/portfolio/contalabdigital-com-br.webp";
import imgQuiz from "@/assets/portfolio/quiz-vistakodara-com-br.webp";
import imgSuaLoja from "@/assets/portfolio/sualoja-bauerlab-com-br.webp";
import imgReserva from "@/assets/portfolio/reserva-bauerlab-com-br.webp";
import imgJbnEmp from "@/assets/portfolio/jbnempreendimentos-com-br.webp";
import imgJbnCons from "@/assets/portfolio/jbnconsultoria-com-br.webp";
import imgDei from "@/assets/portfolio/deisolucoes-com-br.webp";
import imgGfProd from "@/assets/portfolio/gfprod-me.webp";
import imgCarDreams from "@/assets/portfolio/cardreamspampulha-com-br.webp";
import imgRecanto from "@/assets/portfolio/orecantodafloresta-com-br.webp";
import imgSoulGuetto from "@/assets/portfolio/gruposoulguetto-com-br.webp";
import imgMisterBarbosa from "@/assets/portfolio/misterbarbosa-com-br.webp";
import imgEspacioElizete from "@/assets/portfolio/espacioelizetetavares-com.webp";
import imgParapente from "@/assets/portfolio/parapentearraialdajuda-com-br.webp";
import imgOphtalmed from "@/assets/portfolio/ophtalmed2-com-br.webp";

export const projectImages: Record<string, StaticImageData> = {
  "vistakodara.com.br": imgVistaKodara,
  "lucenaparquetarima.com": imgLucenaParquet,
  "mindraperformance.com.br": imgMindra,
  "astrowebatlas.com.br": imgAstroweb,
  "fluxodosmercados.com.br": imgFluxo,
  "contalabdigital.com.br": imgContaLab,
  "quiz.vistakodara.com.br": imgQuiz,
  "sualoja.bauerlab.com.br": imgSuaLoja,
  "reserva.bauerlab.com.br": imgReserva,
  "jbnempreendimentos.com.br": imgJbnEmp,
  "jbnconsultoria.com.br": imgJbnCons,
  "deisolucoes.com.br": imgDei,
  "gfprod.me": imgGfProd,
  "cardreamspampulha.com.br": imgCarDreams,
  "orecantodafloresta.com.br": imgRecanto,
  "gruposoulguetto.com.br": imgSoulGuetto,
  "misterbarbosa.com.br": imgMisterBarbosa,
  "espacioelizetetavares.com": imgEspacioElizete,
  "parapentearraialdajuda.com.br": imgParapente,
  "ophtalmed2.com.br": imgOphtalmed,
};

export type Category = "Sites & Sistemas" | "E-commerce" | "Tráfego Pago" | "Produto Próprio";

export interface Project {
  title: string;
  category: Category;
  url: string;
  icon: React.ReactNode;
  tier: "destaque" | "produto" | "volume";
  note?: string;
}

export const projects: Project[] = [
  // Destaques, cases com contexto mais completo
  {
    title: "Vista Kodara",
    category: "E-commerce",
    url: "vistakodara.com.br",
    icon: <ShoppingBag size={18} />,
    tier: "destaque",
    note: "Marca do grupo BauerLab",
  },
  {
    title: "Mindra Performance",
    category: "Tráfego Pago",
    url: "mindraperformance.com.br",
    icon: <Globe size={18} />,
    tier: "destaque",
    note: "Cliente da Espanha anunciando no Brasil",
  },
  {
    title: "Astroweb Atlas",
    category: "Sites & Sistemas",
    url: "astrowebatlas.com.br",
    icon: <Monitor size={18} />,
    tier: "destaque",
    note: "Projeto Node.js",
  },
  {
    title: "Fluxo dos Mercados",
    category: "Sites & Sistemas",
    url: "fluxodosmercados.com.br",
    icon: <Monitor size={18} />,
    tier: "destaque",
    note: "Projeto Node.js",
  },
  {
    title: "ContaLab Digital",
    category: "Sites & Sistemas",
    url: "contalabdigital.com.br",
    icon: <Globe size={18} />,
    tier: "destaque",
    note: "Arquitetura com 5 subdomínios de conversão",
  },
  {
    title: "Quiz Vista Kodara",
    category: "Tráfego Pago",
    url: "quiz.vistakodara.com.br",
    icon: <Globe size={18} />,
    tier: "destaque",
    note: "Qualificação de lead para tráfego pago",
  },

  // Produtos próprios, sistemas construídos e operados pela BauerLab
  {
    title: "Sua Loja",
    category: "Produto Próprio",
    url: "sualoja.bauerlab.com.br",
    icon: <Rocket size={18} />,
    tier: "produto",
    note: "Produto próprio BauerLab",
  },
  {
    title: "Reserva",
    category: "Produto Próprio",
    url: "reserva.bauerlab.com.br",
    icon: <Rocket size={18} />,
    tier: "produto",
    note: "Produto próprio BauerLab",
  },

  // Volume, grid simples
  { title: "JBN Empreendimentos", category: "Sites & Sistemas", url: "jbnempreendimentos.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "JBN Consultoria", category: "Sites & Sistemas", url: "jbnconsultoria.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "DEI Soluções", category: "Sites & Sistemas", url: "deisolucoes.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "GF Prod", category: "Sites & Sistemas", url: "gfprod.me", icon: <Globe size={18} />, tier: "volume" },
  { title: "Car Dreams Pampulha", category: "Sites & Sistemas", url: "cardreamspampulha.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "O Recanto da Floresta", category: "Sites & Sistemas", url: "orecantodafloresta.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "Grupo Soul Guetto", category: "Sites & Sistemas", url: "gruposoulguetto.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "Mister Barbosa", category: "Sites & Sistemas", url: "misterbarbosa.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "Espacio Elizete Tavares", category: "Sites & Sistemas", url: "espacioelizetetavares.com", icon: <Globe size={18} />, tier: "volume" },
  { title: "Parapente Arraial da Ajuda", category: "Sites & Sistemas", url: "parapentearraialdajuda.com.br", icon: <Globe size={18} />, tier: "volume" },
  { title: "Ophtalmed", category: "Sites & Sistemas", url: "ophtalmed2.com.br", icon: <Globe size={18} />, tier: "volume" },
  {
    title: "Lucena Parquet",
    category: "Sites & Sistemas",
    url: "lucenaparquetarima.com",
    icon: <Globe size={18} />,
    tier: "destaque",
    note: "Cliente internacional (Espanha)",
  },
];

export const categories: Category[] = ["Sites & Sistemas", "E-commerce", "Tráfego Pago", "Produto Próprio"];
