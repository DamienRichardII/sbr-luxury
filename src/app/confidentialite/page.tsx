import type { Metadata } from "next";
import { PageShell, Todo } from "@/components/ui/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Politique de confidentialité", "Politique de confidentialité et mentions légales de SBR Luxury.", "/confidentialite");
export default function Page() {
  return (
    <PageShell title="Politique de confidentialité" narrow>
      <div className="space-y-5 text-[0.95rem] leading-relaxed">
        <p>Ce site n’enregistre aucune donnée bancaire. Les formulaires sont pour l’instant validés côté navigateur uniquement.</p>
        <Todo>mentions légales (raison sociale, SIREN, adresse, hébergeur, directeur de publication), traitements de données, droits RGPD, cookies et consentement si des traceurs non essentiels sont ajoutés.</Todo>
      </div>
    </PageShell>
  );
}
