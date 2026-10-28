import { Gem, Lock, Truck } from "lucide-react";

const items = [
  { icon: Gem, label: "Produits haute qualité" },
  { icon: Truck, label: "Livraison gratuite en France" },
  { icon: Lock, label: "Paiement 100 % sécurisé" },
];

export function TrustBar() {
  return (
    <section aria-label="Nos engagements" className="border-b border-stone bg-white">
      <ul className="mx-auto grid max-w-[var(--container-page)] grid-cols-3 gap-2 px-3 py-5 sm:px-6 sm:py-6">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-4">
            <Icon className="size-6 shrink-0 sm:size-7" strokeWidth={1.2} aria-hidden />
            <span className="text-balance text-[0.72rem] leading-snug sm:text-sm">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
