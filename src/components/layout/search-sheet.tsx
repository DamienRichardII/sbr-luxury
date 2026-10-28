"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { ProductImage } from "@/components/ui/product-image";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

const norm = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export function SearchSheet({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const n = norm(q.trim());
    if (!n) return [];
    return products.filter((p) => norm(`${p.name} ${p.type} ${p.category}`).includes(n)).slice(0, 8);
  }, [q]);
  const close = () => onOpenChange(false);
  return (
    <Sheet open={open} onOpenChange={onOpenChange} side="top" title="Rechercher" className="max-h-[85dvh]">
      <div className="mx-auto w-full max-w-2xl overflow-y-auto px-5 pb-8 pt-5">
        <label className="flex items-center gap-3 border-b border-ink pb-3">
          <Search className="size-5 shrink-0" aria-hidden />
          <span className="sr-only">Rechercher un produit</span>
          <input
            autoFocus
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Sac, sneakers, casquette…"
            className="w-full bg-transparent text-base outline-none placeholder:text-muted"
          />
        </label>
        <div aria-live="polite" className="mt-4">
          {q.trim() && results.length === 0 && <p className="py-6 text-center text-sm text-muted">Aucun résultat pour « {q} ».</p>}
          <ul className="divide-y divide-stone">
            {results.map((p) => (
              <li key={p.slug}>
                <Link href={`/produit/${p.slug}`} onClick={close} className="flex items-center gap-4 py-3 hover:bg-cream">
                  <ProductImage src={p.images[0]} alt="" sizes="56px" className="h-16 w-14 shrink-0 rounded-md" />
                  <span className="min-w-0 flex-1 text-sm">{p.name}<span className="block text-xs text-muted">{p.type}</span></span>
                  <span className="text-sm font-semibold">{formatPrice(p.price)}</span>
                </Link>
              </li>
            ))}
          </ul>
          {!q.trim() && (
            <p className="py-4 text-sm text-muted">
              Ou parcourez : {["sacs", "chaussures", "vetements", "accessoires"].map((c, i) => (
                <span key={c}>{i > 0 && ", "}<Link href={`/${c}`} onClick={close} className="underline">{c}</Link></span>
              ))}
            </p>
          )}
        </div>
      </div>
    </Sheet>
  );
}
