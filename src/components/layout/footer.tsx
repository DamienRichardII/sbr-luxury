import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { SocialIcon } from "@/components/ui/social-link";
import { NewsletterForm } from "./newsletter-form";
import { footerLinks } from "@/data/navigation";
import { socialHandle, socialLinks } from "@/data/site";

function Links({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const list = (
    <ul className="space-y-1 pb-4 md:space-y-2 md:pb-0">
      {items.map((l) => (
        <li key={l.label}><Link href={l.href} className="inline-flex min-h-9 items-center text-sm text-muted hover:text-ink">{l.label}</Link></li>
      ))}
    </ul>
  );
  return (
    <>
      {/* Mobile : accordéon natif accessible */}
      <details className="border-b border-stone md:hidden">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between font-serif text-xl [&::-webkit-details-marker]:hidden">
          {title}<span aria-hidden className="text-xl">+</span>
        </summary>
        {list}
      </details>
      <div className="hidden md:block">
        <h2 className="mb-3 font-serif text-xl">{title}</h2>
        {list}
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-stone bg-cream">
      <div className="mx-auto grid max-w-[var(--container-page)] gap-x-8 gap-y-2 px-4 py-12 sm:px-6 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1fr_1.5fr] lg:py-14">
        <div className="mb-6 md:mb-0"><Link href="/" aria-label="SBR Luxury — accueil" className="block w-24 lg:w-28"><Logo sizes="128px" /></Link></div>
        <Links title="Liens utiles" items={footerLinks.useful} />
        <Links title="Aide" items={footerLinks.help} />
        <div className="py-4 md:py-0">
          <h2 className="mb-3 font-serif text-xl">Nous suivre</h2>
          <ul className="flex gap-3">
            {socialLinks.map((s) => (
              <li key={s.id}><a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid size-11 place-items-center rounded-full bg-white shadow-soft transition-transform hover:scale-105"><SocialIcon id={s.id} className="size-5" /></a></li>
            ))}
          </ul>
          <p className="mt-3 text-sm font-medium">{socialHandle}</p>
        </div>
        <div className="py-4 md:col-span-3 md:py-0 lg:col-span-1">
          <h2 className="font-serif text-xl">Inscris-toi à notre newsletter</h2>
          <p className="mt-1 text-sm text-muted">Sois la première informée des nouveautés et promotions exclusives.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-stone px-4 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} SBR Luxury — <Link href="/cgv" className="underline">CGV</Link> · <Link href="/confidentialite" className="underline">Confidentialité</Link> · <Link href="/retours" className="underline">Retours</Link>
      </div>
    </footer>
  );
}
