export interface Category {
  slug: "sacs" | "chaussures" | "vetements" | "accessoires" | "best-sellers";
  name: string;
  href: string;
  cta: string;
  /** Photo à déposer dans public/images/categories/ (sinon visuel de remplacement) */
  image: string;
}

export const categories: Category[] = [
  { slug: "sacs", name: "Sacs", href: "/sacs", cta: "Voir la collection", image: "/images/categories/sacs.jpg" },
  { slug: "chaussures", name: "Chaussures", href: "/chaussures", cta: "Voir la collection", image: "/images/categories/chaussures.jpg" },
  { slug: "vetements", name: "Vêtements", href: "/vetements", cta: "Voir la collection", image: "/images/categories/vetements.jpg" },
  { slug: "accessoires", name: "Accessoires", href: "/accessoires", cta: "Voir la collection", image: "/images/categories/accessoires.jpg" },
  { slug: "best-sellers", name: "Best Sellers", href: "/best-sellers", cta: "Voir la sélection", image: "/images/categories/best-sellers.jpg" },
];
