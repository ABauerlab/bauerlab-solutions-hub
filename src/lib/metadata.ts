import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url,
      title,
      description,
      images: ["/logo-og.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo-og.jpg"],
    },
  };
}
