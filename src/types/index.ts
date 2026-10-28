export type CategorySlug = "sacs" | "chaussures" | "vetements" | "accessoires";
export type Gender = "femme" | "homme" | "mixte";

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  /** Sous-catégorie (libellé), utilisée par les filtres et le menu */
  type: string;
  gender: Gender;
  /** Prix en euros (données de démonstration, à remplacer) */
  price: number;
  /** Ancien prix : à renseigner UNIQUEMENT pour une vraie promotion */
  compareAtPrice?: number;
  description: string;
  /** Chemins sous /public — si le fichier est absent, un visuel de remplacement s'affiche */
  images: string[];
  colors?: string[];
  sizes?: string[];
  inStock: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
  /** Ordre de nouveauté (plus grand = plus récent) */
  addedRank: number;
  /** true tant que les données ne sont pas validées par le client */
  demo: boolean;
}

export interface CartLine {
  key: string;
  slug: string;
  quantity: number;
  color?: string;
  size?: string;
}
