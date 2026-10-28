import type { Metadata } from "next";
import { CartView } from "@/features/cart/cart-view";
import { PageShell } from "@/components/ui/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = { ...pageMetadata("Panier", "Votre panier SBR Luxury.", "/panier"), robots: { index: false } };
export default function Page() { return <PageShell title="Mon panier"><CartView /></PageShell>; }
