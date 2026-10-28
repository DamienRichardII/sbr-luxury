import type { Metadata } from "next";
import { LoginForm } from "@/features/account/login-form";
import { PageShell } from "@/components/ui/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = { ...pageMetadata("Mon compte", "Connectez-vous à votre espace abonnés SBR Luxury.", "/compte"), robots: { index: false } };
export default function Page() {
  return (
    <PageShell title="Espace abonnés" intro="Suivez vos commandes, vos favoris et accédez à des offres exclusives." narrow>
      <div className="mx-auto max-w-md rounded-[var(--radius-card)] border border-stone p-6 sm:p-8"><LoginForm /></div>
    </PageShell>
  );
}
