import type { Metadata } from "next";
import { PageShell, Todo } from "@/components/ui/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Conditions générales de vente", "Conditions générales de vente de SBR Luxury.", "/cgv");
export default function Page() {
  return (
    <PageShell title="Conditions générales de vente" narrow>
      <div className="space-y-5 text-[0.95rem] leading-relaxed">
        <Todo>CGV complètes (identité du vendeur, prix, commande, paiement, livraison, rétractation, garanties, médiation). Texte juridique à faire valider — ne pas publier en l’état.</Todo>
      </div>
    </PageShell>
  );
}
