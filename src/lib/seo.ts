import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const shareImage = { url: "/og/share.png", width: 1200, height: 630, alt: "SBR Luxury" };

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${siteConfig.name}`, description, url: path, siteName: siteConfig.name, locale: "fr_FR", type: "website", images: [shareImage] },
    twitter: { card: "summary_large_image", title: `${title} | ${siteConfig.name}`, description, images: [shareImage.url] },
  };
}
