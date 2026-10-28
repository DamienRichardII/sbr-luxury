import type { Product } from "@/types";

/**
 * DONNÉES DE DÉMONSTRATION — à remplacer par le catalogue réel (Supabase plus tard).
 * Noms volontairement génériques : aucune marque tierce. Prix, stocks et visuels = provisoires.
 * Photos attendues : public/images/products/<slug>-1.jpg (voir README).
 */
const img = (slug: string) => [`/images/products/${slug}-1.jpg`, `/images/products/${slug}-2.jpg`];

export const products: Product[] = [
  { slug: "sac-matelasse-noir", name: "Sac matelassé noir", category: "sacs", type: "Sacs à main", gender: "femme", price: 249.9, description: "Sac à rabat en matelassé noir, chaîne dorée et finitions soignées. Un classique intemporel pour toutes les occasions.", images: img("sac-matelasse-noir"), colors: ["Noir"], inStock: true, bestSeller: true, isNew: true, addedRank: 14, demo: true },
  { slug: "sneakers-premium", name: "Sneakers premium", category: "chaussures", type: "Sneakers", gender: "mixte", price: 139.9, description: "Sneakers basses bicolores noir et blanc cassé, semelle confortable pour un usage quotidien.", images: img("sneakers-premium"), sizes: ["38", "39", "40", "41", "42", "43", "44", "45"], inStock: true, bestSeller: true, addedRank: 13, demo: true },
  { slug: "ensemble-zippe-noir", name: "Ensemble zippé", category: "vetements", type: "Ensembles", gender: "mixte", price: 89.9, description: "Ensemble veste zippée et pantalon assorti, coupe droite, liserés contrastés.", images: img("ensemble-zippe-noir"), colors: ["Noir"], sizes: ["S", "M", "L", "XL"], inStock: true, bestSeller: true, isNew: true, addedRank: 12, demo: true },
  { slug: "sac-monogramme", name: "Sac monogramme", category: "sacs", type: "Sacs à main", gender: "femme", price: 249.9, description: "Sac cabas rigide à motif monogramme, anses en cuir beige et fermeture zippée.", images: img("sac-monogramme"), colors: ["Marron"], inStock: true, bestSeller: true, addedRank: 11, demo: true },
  { slug: "sweat-noir", name: "Sweat noir", category: "vetements", type: "Sweats & pulls", gender: "mixte", price: 79.9, description: "Sweat à capuche noir en molleton épais, broderie discrète sur la poitrine.", images: img("sweat-noir"), colors: ["Noir"], sizes: ["S", "M", "L", "XL"], inStock: true, bestSeller: true, addedRank: 10, demo: true },
  { slug: "casquette-noire", name: "Casquette noire", category: "accessoires", type: "Casquettes", gender: "mixte", price: 49.9, description: "Casquette courbée noire avec broderie tonale et fermeture réglable.", images: img("casquette-noire"), colors: ["Noir", "Beige"], inStock: true, bestSeller: true, addedRank: 9, demo: true },
  { slug: "sac-bandouliere-creme", name: "Sac bandoulière crème", category: "sacs", type: "Bandoulières", gender: "femme", price: 119.9, description: "Petit sac bandoulière crème, lanière ajustable, intérieur doublé.", images: img("sac-bandouliere-creme"), colors: ["Crème"], inStock: true, isNew: true, addedRank: 8, demo: true },
  { slug: "sac-voyage-noir", name: "Sac de voyage noir", category: "sacs", type: "Sacs de voyage", gender: "homme", price: 169.9, description: "Sac de voyage souple noir, grande capacité, bandoulière amovible.", images: img("sac-voyage-noir"), colors: ["Noir"], inStock: true, addedRank: 7, demo: true },
  { slug: "baskets-montantes-blanches", name: "Baskets montantes blanches", category: "chaussures", type: "Sneakers", gender: "homme", price: 129.9, description: "Baskets montantes blanc cassé, finitions contrastées, lacets plats.", images: img("baskets-montantes-blanches"), sizes: ["40", "41", "42", "43", "44", "45"], inStock: false, addedRank: 6, demo: true },
  { slug: "mocassins-noirs", name: "Mocassins noirs", category: "chaussures", type: "Mocassins", gender: "femme", price: 99.9, description: "Mocassins noirs à semelle fine, détail métallique doré.", images: img("mocassins-noirs"), sizes: ["36", "37", "38", "39", "40", "41"], inStock: true, addedRank: 5, demo: true },
  { slug: "lunettes-de-soleil-noires", name: "Lunettes de soleil noires", category: "accessoires", type: "Lunettes", gender: "mixte", price: 39.9, description: "Lunettes de soleil monture noire épaisse, verres teintés, étui inclus.", images: img("lunettes-de-soleil-noires"), colors: ["Noir"], inStock: true, isNew: true, addedRank: 4, demo: true },
  { slug: "ceinture-boucle-doree", name: "Ceinture boucle dorée", category: "accessoires", type: "Ceintures", gender: "mixte", price: 59.9, description: "Ceinture noire à boucle dorée, largeur 3 cm.", images: img("ceinture-boucle-doree"), colors: ["Noir"], sizes: ["85", "90", "95", "100", "105"], inStock: true, addedRank: 3, demo: true },
  { slug: "bracelet-jonc-dore", name: "Bracelet jonc doré", category: "accessoires", type: "Bijoux", gender: "femme", price: 34.9, description: "Bracelet jonc finition dorée, ouverture ajustable.", images: img("bracelet-jonc-dore"), inStock: true, addedRank: 2, demo: true },
  { slug: "veste-zippee-noire", name: "Veste zippée noire", category: "vetements", type: "Vestes", gender: "homme", price: 74.9, description: "Veste zippée noire à col montant, poches latérales, doublure légère.", images: img("veste-zippee-noire"), colors: ["Noir"], sizes: ["S", "M", "L", "XL"], inStock: true, addedRank: 1, demo: true },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getBestSellers = () => products.filter((p) => p.bestSeller);
export const getSimilar = (p: Product, n = 4) =>
  products
    .filter((x) => x.slug !== p.slug)
    .sort((a, b) => Number(b.category === p.category) - Number(a.category === p.category))
    .slice(0, n);
