import { categories } from "./categories";
import { products } from "./products";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const typesFor = (slug: string) =>
  Array.from(new Set(products.filter((p) => p.category === slug).map((p) => p.type)));

const catChildren = (slug: string) => [
  { label: "Tout voir", href: `/${slug}` },
  ...typesFor(slug).map((t) => ({ label: t, href: `/${slug}?type=${encodeURIComponent(t)}` })),
];

const genderChildren = (g: "femme" | "homme") =>
  categories
    .filter((c) => c.slug !== "best-sellers")
    .map((c) => ({ label: c.name, href: `/${g}?categorie=${c.slug}` }));

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Femme", href: "/femme", children: genderChildren("femme") },
  { label: "Homme", href: "/homme", children: genderChildren("homme") },
  { label: "Sacs", href: "/sacs", children: catChildren("sacs") },
  { label: "Chaussures", href: "/chaussures", children: catChildren("chaussures") },
  { label: "Vêtements", href: "/vetements", children: catChildren("vetements") },
  { label: "Accessoires", href: "/accessoires", children: catChildren("accessoires") },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "Promos", href: "/promotions" },
];

export const footerLinks = {
  useful: [
    { label: "Notre histoire", href: "/faq#histoire" },
    { label: "FAQ", href: "/faq" },
    { label: "CGV", href: "/cgv" },
    { label: "Politique de retour", href: "/retours" },
    { label: "Contact", href: "/contact" },
  ],
  help: [
    { label: "Suivi de commande", href: "/compte" },
    { label: "Paiement sécurisé", href: "/faq#paiement" },
    { label: "Livraison", href: "/livraison" },
    { label: "Service client", href: "/contact" },
    { label: "Précommande", href: "/contact#precommande" },
  ],
  legal: [{ label: "Confidentialité", href: "/confidentialite" }],
};
