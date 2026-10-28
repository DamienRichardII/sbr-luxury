import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${siteConfig.name}`, description, url: path, siteName: siteConfig.name, locale: "fr_FR", type: "website" },
  };
}
