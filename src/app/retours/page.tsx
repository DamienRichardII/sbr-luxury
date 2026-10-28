import type { Metadata } from "next";
import { PageShell, Todo } from "@/components/ui/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Politique de retour", "Politique de retour et d’échange SBR Luxury.", "/retours");
export default function Page() {
  return (
    <PageShell title="Politique de retour" narrow>
      <div className="space-y-5 text-[0.95rem] leading-relaxed">
        <Todo>conditions et délais de retour/échange, procédure et frais éventuels — texte officiel à fournir par SBR Luxury (le droit de rétractation légal s’applique à la vente à distance).</Todo>
      </div>
    </PageShell>
  );
}
