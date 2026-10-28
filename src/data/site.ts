// Paramètres centralisés de la boutique — à adapter sans toucher aux composants.
export const siteConfig = {
  name: "SBR Luxury",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "SBR Luxury : sacs, vêtements, chaussures et accessoires de style luxe à prix accessibles. Livraison gratuite en France.",
  currency: "EUR",
  locale: "fr-FR",
  /** Passe à true quand Stripe Checkout est branché */
  paymentsConnected: false,
  /** Passe à true quand Supabase (auth/DB) est branché */
  backendConnected: false,
  freeShippingLabel: "Livraison gratuite en France",
  contactEmail: "contact@sbrluxury.example", // À REMPLACER
  /** Logo officiel : remplacer le fichier public/logos/sbr-luxury.svg (ou .png) */
  logo: { src: "/logos/sbr-luxury.svg", width: 640, height: 360 },
  /** Image de fond du hero (optionnelle) : déposer public/images/hero/hero.jpg */
  heroImage: "/images/hero/hero.jpg",
  editorialImage: "/images/editorial/banner.jpg",
} as const;

export const socialLinks = [
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@sbrluxury" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/sbrluxury" },
  { id: "snapchat", label: "Snapchat", href: "https://www.snapchat.com/add/sbrluxury" },
] as const; // URLs à vérifier avec le client (handle @sbrluxury d'après la maquette)

export const socialHandle = "@sbrluxury";
