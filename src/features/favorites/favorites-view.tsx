"use client";
import { Heart } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import { ButtonLink } from "@/components/ui/button";
import { products } from "@/data/products";
import { useFavorites } from "./store";
import { useHydrated } from "@/hooks/use-hydrated";

export function FavoritesView() {
  const hydrated = useHydrated();
  const slugs = useFavorites((s) => s.slugs);
  if (!hydrated) return <div className="h-64 animate-pulse rounded-[var(--radius-card)] bg-cream" aria-busy="true" />;
  const items = products.filter((p) => slugs.includes(p.slug));
  if (!items.length)
    return (
      <div className="grid place-items-center gap-4 rounded-[var(--radius-card)] bg-cream px-6 py-16 text-center">
        <Heart className="size-10 text-muted" strokeWidth={1.2} aria-hidden />
        <p className="font-serif text-2xl">Aucun favori pour le moment</p>
        <p className="text-sm text-muted">Touchez le cœur d’un produit pour le retrouver ici.</p>
        <ButtonLink href="/best-sellers">Voir les best sellers</ButtonLink>
      </div>
    );
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {items.map((p) => <li key={p.slug}><ProductCard product={p} /></li>)}
    </ul>
  );
}
