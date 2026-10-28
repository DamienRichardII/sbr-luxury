"use client";
import { ShoppingBag } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { ButtonLink } from "@/components/ui/button";
import { CartLineItem } from "./cart-line";
import { CheckoutCTA } from "./checkout-cta";
import { cartSubtotal, useCart } from "@/features/cart/store";
import { siteConfig } from "@/data/site";
import { formatPrice } from "@/lib/utils";

export function MiniCart() {
  const { lines, open, setOpen } = useCart();
  const close = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen} title="Mon panier">
      {lines.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <ShoppingBag className="size-10 text-muted" strokeWidth={1.2} aria-hidden />
          <p className="font-serif text-2xl">Votre panier est vide</p>
          <ButtonLink href="/best-sellers" onClick={close}>Découvrir les best sellers</ButtonLink>
        </div>
      ) : (
        <>
          <ul className="flex-1 divide-y divide-stone overflow-y-auto px-5">
            {lines.map((l) => <CartLineItem key={l.key} line={l} onNavigate={close} />)}
          </ul>
          <div className="space-y-3 border-t border-stone bg-cream p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <div className="flex justify-between text-sm"><span>Sous-total</span><span className="font-semibold">{formatPrice(cartSubtotal(lines))}</span></div>
            <p className="text-xs text-muted">{siteConfig.freeShippingLabel}. Taxes incluses.</p>
            <ButtonLink href="/panier" variant="outline" className="w-full" onClick={close}>Voir le panier</ButtonLink>
            <CheckoutCTA />
          </div>
        </>
      )}
    </Sheet>
  );
}
