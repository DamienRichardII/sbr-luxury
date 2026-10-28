"use client";
import { useMemo, useState } from "react";
import { PackageSearch } from "lucide-react";
import type { Product } from "@/types";
import { ProductCard } from "@/components/product/product-card";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Sort = "pertinence" | "prix-asc" | "prix-desc" | "nouveautes";
export interface CatalogInitial { categorie?: string; type?: string; tri?: Sort; dispo?: boolean }

const catLabels: Record<string, string> = { sacs: "Sacs", chaussures: "Chaussures", vetements: "Vêtements", accessoires: "Accessoires" };
const chip = (on: boolean) =>
  cn("min-h-11 shrink-0 rounded-full border px-4 text-sm transition-colors", on ? "border-ink bg-ink text-white" : "border-stone bg-white hover:border-ink");

export function CatalogView({ items, showCategoryFilter, initial, emptyHint }: { items: Product[]; showCategoryFilter?: boolean; initial: CatalogInitial; emptyHint?: string }) {
  const [categorie, setCategorie] = useState(initial.categorie ?? "");
  const [type, setType] = useState(initial.type ?? "");
  const [sort, setSort] = useState<Sort>(initial.tri ?? "pertinence");
  const [inStock, setInStock] = useState(!!initial.dispo);

  const categories = useMemo(() => Array.from(new Set(items.map((p) => p.category))), [items]);
  const types = useMemo(
    () => Array.from(new Set(items.filter((p) => !categorie || p.category === categorie).map((p) => p.type))),
    [items, categorie],
  );

  const shown = useMemo(() => {
    const list = items.filter((p) => (!categorie || p.category === categorie) && (!type || p.type === type) && (!inStock || p.inStock));
    const sorted = [...list];
    if (sort === "prix-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "prix-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "nouveautes") sorted.sort((a, b) => b.addedRank - a.addedRank);
    return sorted;
  }, [items, categorie, type, sort, inStock]);

  const reset = () => { setCategorie(""); setType(""); setInStock(false); setSort("pertinence"); };

  return (
    <div id="collection" className="scroll-mt-24">
      <div className="mb-6 space-y-3">
        {showCategoryFilter && categories.length > 1 && (
          <div role="group" aria-label="Filtrer par catégorie" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
            <button type="button" className={chip(!categorie)} aria-pressed={!categorie} onClick={() => { setCategorie(""); setType(""); }}>Tout</button>
            {categories.map((c) => (
              <button key={c} type="button" className={chip(categorie === c)} aria-pressed={categorie === c} onClick={() => { setCategorie(c); setType(""); }}>{catLabels[c] ?? c}</button>
            ))}
          </div>
        )}
        {types.length > 1 && (
          <div role="group" aria-label="Filtrer par type" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
            <button type="button" className={chip(!type)} aria-pressed={!type} onClick={() => setType("")}>Tous les types</button>
            {types.map((t) => (<button key={t} type="button" className={chip(type === t)} aria-pressed={type === t} onClick={() => setType(t)}>{t}</button>))}
          </div>
        )}
        <div className="flex flex-wrap items-center justify-between gap-3 border-y border-stone py-3">
          <label className="flex min-h-11 cursor-pointer items-center gap-2 text-sm">
            <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} className="size-5 accent-ink" />
            En stock uniquement
          </label>
          <div className="flex items-center gap-3 text-sm">
            <span aria-live="polite" className="text-muted">{shown.length} produit{shown.length > 1 ? "s" : ""}</span>
            <label className="flex items-center gap-2">
              <span className="sr-only sm:not-sr-only">Trier par</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="h-11 rounded-full border border-stone bg-white px-3 text-base sm:text-sm">
                <option value="pertinence">Pertinence</option>
                <option value="nouveautes">Nouveautés</option>
                <option value="prix-asc">Prix croissant</option>
                <option value="prix-desc">Prix décroissant</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      {shown.length === 0 ? (
        <div className="grid place-items-center gap-3 rounded-[var(--radius-card)] bg-cream px-6 py-16 text-center">
          <PackageSearch className="size-10 text-muted" strokeWidth={1.2} aria-hidden />
          <p className="font-serif text-2xl">Aucun produit pour le moment</p>
          <p className="max-w-sm text-sm text-muted">{emptyHint ?? "Modifiez vos filtres pour élargir la sélection."}</p>
          {(categorie || type || inStock) && <button type="button" onClick={reset} className="min-h-11 rounded-full border border-ink px-5 text-sm">Réinitialiser les filtres</button>}
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
          {shown.map((p, i) => (<li key={p.slug}><Reveal delay={(i % 4) * 0.05} y={14} className="h-full"><ProductCard product={p} priority={i < 4} /></Reveal></li>))}
        </ul>
      )}
    </div>
  );
}
