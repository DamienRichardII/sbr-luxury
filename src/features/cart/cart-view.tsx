"use client";
import { ShoppingBag, Truck } from "lucide-react";
import { CartLineItem } from "@/components/cart/cart-line";
import { CheckoutCTA } from "@/components/cart/checkout-cta";
import { ButtonLink } from "@/components/ui/button";
import { cartSubtotal, useCart } from "./store";
import { useHydrated } from "@/hooks/use-hydrated";
import { siteConfig } from "@/data/site";
import { formatPrice } from "@/lib/utils";

export function CartView() {
  const hydrated = useHydrated();
  const lines = useCart((s) => s.lines);
  const clear = useCart((s) => s.clear);
  if (!hydrated) return <div className="h-64 animate-pulse rounded-[var(--radius-card)] bg-cream" aria-busy="true" />;
  if (lines.length === 0)
    return (
      <div className="grid place-items-center gap-4 rounded-[var(--radius-card)] bg-cream px-6 py-16 text-center">
        <ShoppingBag className="size-10 text-muted" strokeWidth={1.2} aria-hidden />
        <p className="font-serif text-2xl">Votre panier est vide</p>
        <ButtonLink href="/best-sellers">Découvrir les best sellers</ButtonLink>
      </div>
    );
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
      <div>
        <ul className="divide-y divide-stone border-y border-stone">{lines.map((l) => <CartLineItem key={l.key} line={l} />)}</ul>
        <button type="button" onClick={clear} className="mt-3 min-h-11 text-sm text-muted underline">Vider le panier</button>
      </div>
      <aside aria-label="Récapitulatif" className="space-y-4 rounded-[var(--radius-card)] bg-cream p-6 lg:sticky lg:top-28">
        <div className="flex justify-between"><span>Sous-total</span><span className="font-semibold">{formatPrice(cartSubtotal(lines))}</span></div>
        <p className="flex items-start gap-2 text-sm text-muted"><Truck className="mt-0.5 size-4 shrink-0" aria-hidden />{siteConfig.freeShippingLabel}. Délais à confirmer.</p>
        <CheckoutCTA />
        <ButtonLink href="/best-sellers" variant="outline" className="w-full">Continuer mes achats</ButtonLink>
      </aside>
    </div>
  );
}
