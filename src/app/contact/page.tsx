import type { Metadata } from "next";
import { ContactForm } from "@/features/account/contact-form";
import { PageShell } from "@/components/ui/page-shell";
import { SocialIcon } from "@/components/ui/social-link";
import { socialLinks } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Contact", "Contactez le service client SBR Luxury, 7j/7.", "/contact");
export default function Page() {
  return (
    <PageShell title="Contact" intro="Une question ? Notre équipe vous répond 7j/7.">
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <div><h2 className="mb-4 text-2xl">Écrivez-nous</h2><ContactForm /></div>
        <section id="precommande" className="scroll-mt-28 rounded-[var(--radius-card)] bg-cream p-6">
          <h2 className="text-2xl">Précommande en DM</h2>
          <p className="mt-2 text-sm text-muted">Un article spécifique ? Contacte-nous sur nos réseaux pour le précommander.</p>
          <ul className="mt-5 space-y-2">
            {socialLinks.map((s) => (
              <li key={s.id}><a href={s.href} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center gap-3 rounded-full border border-stone bg-white px-5 text-sm hover:border-ink"><SocialIcon id={s.id} className="size-5" />{s.label}</a></li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
