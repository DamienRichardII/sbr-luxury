import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

/** Tant que Stripe n'est pas branché, le CTA est désactivé et explicité. */
export function CheckoutCTA({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Button disabled={!siteConfig.paymentsConnected} className="w-full" aria-describedby="checkout-note">
        Passer la commande
      </Button>
      {!siteConfig.paymentsConnected && (
        <p id="checkout-note" className="mt-2 text-center text-xs text-muted">
          Paiement non connecté : Stripe Checkout sera activé prochainement.
        </p>
      )}
    </div>
  );
}
