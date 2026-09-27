import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { SITE_URL, SITE_NAME, BUSINESS } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}: Estruturamos marcas para o próximo nível`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Estratégia, tecnologia e audiovisual integrados em um ecossistema único para sua empresa escalar com autoridade e design de elite.",
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME}: Estruturamos marcas para o próximo nível`,
    description:
      "Estratégia, tecnologia e audiovisual integrados em um ecossistema único para sua empresa escalar com autoridade e design de elite.",
    images: ["/logo-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}: Estruturamos marcas para o próximo nível`,
    description:
      "Estratégia, tecnologia e audiovisual integrados em um ecossistema único para sua empresa escalar com autoridade e design de elite.",
    images: ["/logo-og.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BUSINESS.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-og.jpg`,
  sameAs: [BUSINESS.instagram],
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: BUSINESS.address.country,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.legalName,
  image: `${SITE_URL}/logo-og.jpg`,
  url: SITE_URL,
  telephone: `+${BUSINESS.whatsapp}`,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: BUSINESS.address.country,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${bricolage.variable} ${manrope.variable}`}
    >
      <head>
        {/* Fontes agora são self-hosted via next/font (sem chamada externa a fonts.googleapis.com),
            então a CSP fica mais restritiva que a versão anterior. */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https://www.youtube.com https://player.vimeo.com;"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
