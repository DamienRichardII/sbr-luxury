import type { Product } from "@/types";
import { products } from "@/data/products";

export interface CatalogRoute {
  key: string;
  path: string;
  title: string;
  description: string;
  filter: (p: Product) => boolean;
  /** Affiche le filtre de catégorie (pages transverses) */
  categoryFilter?: boolean;
}

export const catalogRoutes: Record<string, CatalogRoute> = {
  femme: { key: "femme", path: "/femme", title: "Femme", description: "Sacs, chaussures, vêtements et accessoires pour elle.", filter: (p) => p.gender !== "homme", categoryFilter: true },
  homme: { key: "homme", path: "/homme", title: "Homme", description: "Sacs, chaussures, vêtements et accessoires pour lui.", filter: (p) => p.gender !== "femme", categoryFilter: true },
  sacs: { key: "sacs", path: "/sacs", title: "Sacs", description: "Sacs à main, bandoulières et sacs de voyage au style luxe.", filter: (p) => p.category === "sacs" },
  chaussures: { key: "chaussures", path: "/chaussures", title: "Chaussures", description: "Sneakers et chaussures premium à prix accessibles.", filter: (p) => p.category === "chaussures" },
  vetements: { key: "vetements", path: "/vetements", title: "Vêtements", description: "Ensembles, sweats et vestes à l’allure premium.", filter: (p) => p.category === "vetements" },
  accessoires: { key: "accessoires", path: "/accessoires", title: "Accessoires", description: "Casquettes, lunettes, ceintures et bijoux.", filter: (p) => p.category === "accessoires" },
  "best-sellers": { key: "best-sellers", path: "/best-sellers", title: "Best Sellers", description: "Les produits les plus tendances du moment.", filter: (p) => !!p.bestSeller, categoryFilter: true },
  promotions: { key: "promotions", path: "/promotions", title: "Promotions", description: "Les offres en cours sur la boutique.", filter: (p) => !!p.compareAtPrice && p.compareAtPrice > p.price, categoryFilter: true },
};

export const baseProducts = (route: CatalogRoute) => products.filter(route.filter);
