import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBestSellers } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { Reveal } from "@/components/ui/reveal";

export function BestSellers() {
  const items = getBestSellers().slice(0, 6);
  return (
    <section aria-labelledby="bs-title" className="mx-auto max-w-[var(--container-page)] px-4 pb-12 sm:px-6 lg:pb-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 id="bs-title" className="text-title">Nos best sellers</h2>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">Les produits les plus tendances du moment</p>
        </div>
        <Link href="/best-sellers" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium hover:opacity-70">Voir tout <ArrowRight className="size-4" aria-hidden /></Link>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
        {items.map((p, i) => (
          <li key={p.slug}><Reveal delay={(i % 6) * 0.06} y={16} className="h-full"><ProductCard product={p} /></Reveal></li>
        ))}
      </ul>
    </section>
  );
}
