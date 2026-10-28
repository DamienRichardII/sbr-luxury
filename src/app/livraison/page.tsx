import type { Metadata } from "next";
import { PageShell, Todo } from "@/components/ui/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Livraison", "Informations de livraison SBR Luxury.", "/livraison");
export default function Page() {
  return (
    <PageShell title="Livraison" narrow>
      <div className="space-y-5 text-[0.95rem] leading-relaxed">
        <p>La livraison est gratuite en France.</p>
        <Todo>transporteurs, délais, zones hors France et suivi de colis — informations officielles à fournir par SBR Luxury.</Todo>
      </div>
    </PageShell>
  );
}
