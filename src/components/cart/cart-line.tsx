"use client";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartLine } from "@/types";
import { getProduct } from "@/data/products";
import { useCart } from "@/features/cart/store";
import { ProductImage } from "@/components/ui/product-image";
import { formatPrice } from "@/lib/utils";

export function CartLineItem({ line, onNavigate }: { line: CartLine; onNavigate?: () => void }) {
  const product = getProduct(line.slug);
  const { setQty, remove } = useCart();
  if (!product) return null;
  const variant = [line.color, line.size && `Taille ${line.size}`].filter(Boolean).join(" · ");
  return (
    <li className="flex gap-4 py-4">
      <Link href={`/produit/${product.slug}`} onClick={onNavigate} className="shrink-0">
        <ProductImage src={product.images[0]} alt={product.name} sizes="96px" className="h-28 w-[5.5rem] rounded-lg" />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex justify-between gap-2">
          <div className="min-w-0">
            <Link href={`/produit/${product.slug}`} onClick={onNavigate} className="text-sm font-medium hover:underline">{product.name}</Link>
            {variant && <p className="mt-0.5 text-xs text-muted">{variant}</p>}
          </div>
          <button
            type="button"
            onClick={() => remove(line.key)}
            aria-label={`Supprimer ${product.name} du panier`}
            className="-mr-2 -mt-2 grid size-11 shrink-0 place-items-center rounded-full text-muted hover:bg-cream hover:text-ink"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="inline-flex items-center rounded-full border border-stone">
            <button type="button" className="grid size-10 place-items-center disabled:opacity-40" aria-label="Diminuer la quantité" disabled={line.quantity <= 1} onClick={() => setQty(line.key, line.quantity - 1)}>
              <Minus className="size-4" />
            </button>
            <span className="min-w-6 text-center text-sm tabular-nums" aria-live="polite">{line.quantity}</span>
            <button type="button" className="grid size-10 place-items-center disabled:opacity-40" aria-label="Augmenter la quantité" disabled={line.quantity >= 20} onClick={() => setQty(line.key, line.quantity + 1)}>
              <Plus className="size-4" />
            </button>
          </div>
          <p className="text-sm font-semibold">{formatPrice(product.price * line.quantity)}</p>
        </div>
      </div>
    </li>
  );
}
