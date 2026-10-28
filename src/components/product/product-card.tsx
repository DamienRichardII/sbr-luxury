"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/types";
import { ProductImage } from "@/components/ui/product-image";
import { FavoriteButton } from "./favorite-button";
import { useCart } from "@/features/cart/store";
import { useToast } from "@/components/ui/toast";
import { discountPercent, formatPrice } from "@/lib/utils";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const router = useRouter();
  const add = useCart((s) => s.add);
  const show = useToast((s) => s.show);
  const pct = discountPercent(product.price, product.compareAtPrice);
  const href = `/produit/${product.slug}`;

  const onAdd = () => {
    if (product.sizes?.length) {
      show("Choisissez une taille");
      router.push(href);
      return;
    }
    add(product.slug, { color: product.colors?.[0] });
    show(`${product.name} ajouté au panier`);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-soft ring-1 ring-stone">
      <div className="relative">
        <Link href={href} aria-label={product.name} className="block">
          <ProductImage
            src={product.images[0]}
            alt={product.name}
            label={product.type}
            sizes="(min-width:1280px) 16vw, (min-width:1024px) 22vw, (min-width:640px) 30vw, 46vw"
            priority={priority}
            className="aspect-[4/5] bg-cream"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </Link>
        {pct > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-ink px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-white">-{pct}%</span>
        )}
        {!product.inStock && (
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.7rem] font-medium">Épuisé</span>
        )}
        <FavoriteButton slug={product.slug} name={product.name} className="absolute right-2 top-2" />
      </div>
      <div className="flex flex-1 items-end justify-between gap-2 p-3 sm:p-4">
        <div className="min-w-0">
          <h3 className="font-sans text-[0.85rem] font-normal leading-snug sm:text-sm">
            <Link href={href} className="hover:underline">{product.name}</Link>
          </h3>
          <p className="mt-1.5 flex flex-wrap items-baseline gap-x-2 text-[0.95rem] font-semibold">
            {formatPrice(product.price)}
            {product.compareAtPrice && <s className="text-xs font-normal text-muted">{formatPrice(product.compareAtPrice)}</s>}
          </p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          disabled={!product.inStock}
          aria-label={`Ajouter ${product.name} au panier`}
          className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-white transition-transform duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ShoppingBag className="size-[1.15rem]" strokeWidth={1.5} aria-hidden />
        </button>
      </div>
    </article>
  );
}
