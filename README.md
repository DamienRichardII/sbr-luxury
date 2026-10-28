# SBR Luxury — Frontend e-commerce

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS 4 · Motion · Radix Dialog · Zustand · React Hook Form + Zod.

## Lancer
```bash
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build && npm start
```
Déploiement Vercel : importer le dépôt, aucune variable obligatoire (voir `.env.example`).

## ⚠️ Assets à fournir (aucun n'était dans le dossier, hormis la maquette)
| Fichier à déposer | Usage |
|---|---|
| `public/logos/sbr-luxury.svg` (ou .png, puis adapter `siteConfig.logo`) | **Logo officiel** — le fichier actuel est un PROVISOIRE typographique, à remplacer |
| `public/images/hero/hero.jpg` | Fond du hero (sacs, chaussures, accessoires ; tons noir/beige) |
| `public/images/editorial/banner.jpg` | Bannière « Des pièces iconiques… » |
| `public/images/categories/{sacs,chaussures,vetements,accessoires,best-sellers}.jpg` | Cartes catégories |
| `public/images/products/<slug>-1.jpg`, `-2.jpg` | Photos produits (slugs dans `src/data/products.ts`) |

Tant qu'un fichier est absent, un visuel neutre de remplacement s'affiche (aucune image inventée).
Utiliser uniquement des photos dont vous détenez les droits ; ne pas reprendre la maquette.

## Où modifier
`src/data/site.ts` (paramètres, réseaux sociaux, logo) · `src/data/products.ts` (catalogue de **démonstration**) · `src/data/categories.ts` · `src/data/navigation.ts` · tokens couleurs/typos : `src/styles/globals.css`.

## Fonctionnalités réalisées
Header 2 niveaux (sticky, menus déroulants, recherche, mini-panier), header mobile dédié (drawer + sous-menus) · hero logo + 2 CTA centrés · réassurance · catégories (carrousel snap mobile) · best sellers · bannière · services · footer (accordéons mobile) · 8 pages catalogue (filtres, tri, stock, états vides/chargement) · fiche produit (galerie, zoom, variantes, quantité, similaires) · panier · favoris · compte · contact · FAQ/livraison/retours/CGV/confidentialité · SEO (metadata, canonical, OG, sitemap, robots, JSON-LD Organisation ; JSON-LD Product activé quand `demo: false`) · `prefers-reduced-motion` respecté.
Panier et favoris persistés en localStorage (aucune donnée bancaire).

## Reste à brancher (volontairement NON simulé)
- **Stripe Checkout** : le CTA de commande est désactivé (`siteConfig.paymentsConnected`).
- **Supabase** : auth (`/compte`), catalogue/stock, commandes, newsletter et formulaire de contact (actuellement validés côté client seulement, rien n'est envoyé).
- Back-office, stocks, fidélité, suivi de commande.
- **Textes légaux** (CGV, retours, livraison, mentions légales, histoire) : encarts « À compléter » — à rédiger et faire valider.
- Prix, stocks, promotions : données de démo ; aucune promotion factice (la page Promotions est vide tant qu'aucun `compareAtPrice` réel n'existe).
- URLs réseaux sociaux (`@sbrluxury`) à confirmer.

## Note produits
Les noms de produits de la maquette citent des marques tierces (maisons de luxe, Nike…). Ils n'ont **pas** été repris : le catalogue utilise des intitulés génériques. Ne pas présenter d'articles comme authentiques ou de marque sans justificatif.
