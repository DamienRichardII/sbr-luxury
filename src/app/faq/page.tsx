import type { Metadata } from "next";
import { PageShell, Todo } from "@/components/ui/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("FAQ", "Questions fréquentes sur SBR Luxury.", "/faq");

const faqs = [
  { q: "La livraison est-elle gratuite ?", a: "Oui, la livraison est gratuite en France." },
  { q: "Comment payer en toute sécurité ?", a: "Le paiement en ligne sera assuré par un prestataire sécurisé (Stripe) : aucune donnée bancaire ne transite par ce site. Le paiement n’est pas encore activé." },
  { q: "Puis-je précommander un article ?", a: "Oui, contactez-nous en message privé sur Instagram, Snapchat ou TikTok, ou via la page Contact." },
  { q: "Comment contacter le service client ?", a: "Via la page Contact ou nos réseaux sociaux, 7j/7." },
];

export default function Page() {
  return (
    <PageShell title="Questions fréquentes" narrow>
      <div className="divide-y divide-stone border-y border-stone">
        {faqs.map((f) => (
          <details key={f.q} className="group py-1" id={f.q.includes("payer") ? "paiement" : undefined}>
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl [&::-webkit-details-marker]:hidden">{f.q}<span aria-hidden className="transition-transform group-open:rotate-45">+</span></summary>
            <p className="pb-4 text-sm leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
      <section id="histoire" className="mt-12 scroll-mt-28">
        <h2 className="mb-3 text-2xl">Notre histoire</h2>
        <Todo>présentation de la marque SBR Luxury, à rédiger avec le client.</Todo>
      </section>
    </PageShell>
  );
}
