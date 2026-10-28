import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

const staticPaths = ["", "/femme", "/homme", "/sacs", "/chaussures", "/vetements", "/accessoires", "/best-sellers", "/promotions", "/contact", "/faq", "/livraison", "/retours", "/cgv", "/confidentialite"];
export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPaths, ...products.map((p) => `/produit/${p.slug}`)].map((p) => ({ url: `${siteConfig.url}${p}`, changeFrequency: "weekly" as const }));
}
