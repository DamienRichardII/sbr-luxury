import type { Metadata } from "next";
import { FavoritesView } from "@/features/favorites/favorites-view";
import { PageShell } from "@/components/ui/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = { ...pageMetadata("Mes favoris", "Vos produits favoris SBR Luxury.", "/favoris"), robots: { index: false } };
export default function Page() { return <PageShell title="Mes favoris"><FavoritesView /></PageShell>; }
