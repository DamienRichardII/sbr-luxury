"use client";
import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "@/types";
import { ProductGallery } from "./product-gallery";
import { FavoriteButton } from "./favorite-button";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/store";
import { useToast } from "@/components/ui/toast";
import { siteConfig } from "@/data/site";
import { cn, discountPercent, formatPrice } from "@/lib/utils";

export function ProductDetail({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const show = useToast((s) => s.show);
  const [color, setColor] = useState(product.colors?.[0]);
  const [size, setSize] = useState<string | undefined>();
  const [qty, setQty] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const pct = discountPercent(product.price, product.compareAtPrice);

  const onAdd = () => {
    if (product.sizes?.length && !size) { setSizeError(true); return; }
    add(product.slug, { color, size, quantity: qty });
    show(`${product.name} ajouté au panier`);
  };
  const opt = (on: boolean) => cn("min-h-11 min-w-11 rounded-full border px-4 text-sm transition-colors", on ? "border-ink bg-ink text-white" : "border-stone hover:border-ink");

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
      <ProductGallery images={product.images} name={product.name} label={product.type} />
      <div className="lg:py-4">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">{product.type}</p>
        <h1 className="text-display mt-1">{product.name}</h1>
        <p className="mt-3 flex flex-wrap items-baseline gap-3 text-2xl font-semibold">
          {formatPrice(product.price)}
          {product.compareAtPrice && <s className="text-base font-normal text-muted">{formatPrice(product.compareAtPrice)}</s>}
          {pct > 0 && <span className="rounded-full bg-ink px-2.5 py-1 text-xs font-medium text-white">-{pct}%</span>}
        </p>
        <p className="mt-5 max-w-prose text-[0.95rem] leading-relaxed text-ink/80">{product.description}</p>

        {product.colors && product.colors.length > 0 && (
          <fieldset className="mt-6">
            <legend className="mb-2 text-sm font-medium">Couleur : <span className="font-normal text-muted">{color}</span></legend>
            <div className="flex flex-wrap gap-2">{product.colors.map((c) => <button key={c} type="button" aria-pressed={color === c} onClick={() => setColor(c)} className={opt(color === c)}>{c}</button>)}</div>
          </fieldset>
        )}
        {product.sizes && product.sizes.length > 0 && (
          <fieldset className="mt-6">
            <legend className="mb-2 text-sm font-medium">Taille</legend>
            <div className="flex flex-wrap gap-2">{product.sizes.map((s) => <button key={s} type="button" aria-pressed={size === s} onClick={() => { setSize(s); setSizeError(false); }} className={opt(size === s)}>{s}</button>)}</div>
            {sizeError && <p role="alert" className="mt-2 text-sm text-red-700">Veuillez choisir une taille.</p>}
          </fieldset>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center rounded-full border border-stone" role="group" aria-label="Quantité">
            <button type="button" aria-label="Diminuer la quantité" disabled={qty <= 1} onClick={() => setQty(qty - 1)} className="grid size-12 place-items-center disabled:opacity-40"><Minus className="size-4" /></button>
            <span className="min-w-8 text-center tabular-nums" aria-live="polite">{qty}</span>
            <button type="button" aria-label="Augmenter la quantité" disabled={qty >= 20} onClick={() => setQty(qty + 1)} className="grid size-12 place-items-center disabled:opacity-40"><Plus className="size-4" /></button>
          </div>
          <Button onClick={onAdd} disabled={!product.inStock} className="min-w-0 flex-1 basis-48">
            <ShoppingBag className="size-4" aria-hidden /> {product.inStock ? "Ajouter au panier" : "Épuisé"}
          </Button>
          <FavoriteButton slug={product.slug} name={product.name} className="size-12 border border-stone" />
        </div>
        <ul className="mt-8 space-y-1 border-t border-stone pt-5 text-sm text-muted">
          <li>{siteConfig.freeShippingLabel}</li>
          <li>Paiement sécurisé</li>
          <li>Service client 7j/7</li>
        </ul>
        {product.demo && <p className="mt-4 text-xs text-muted">Fiche de démonstration : prix, stock et visuels provisoires.</p>}
      </div>
    </div>
  );
}
