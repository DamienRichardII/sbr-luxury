import { MessageCircle, Send, User, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-link";
import { socialLinks } from "@/data/site";

const card = "flex h-full flex-col gap-4 rounded-[var(--radius-card)] border border-stone bg-white/60 p-6 sm:flex-row sm:items-start";
const iconWrap = "grid size-14 shrink-0 place-items-center rounded-full bg-stone";

export function Services() {
  return (
    <section aria-labelledby="srv-title" className="bg-cream py-10 lg:py-14">
      <h2 id="srv-title" className="sr-only">Espace client et services</h2>
      <div className="mx-auto grid max-w-[var(--container-page)] gap-4 px-4 sm:px-6 lg:grid-cols-3">
        <Reveal className="h-full">
          <div className={card}>
            <span className={iconWrap}><User className="size-6" strokeWidth={1.3} aria-hidden /></span>
            <div className="flex flex-1 flex-col items-start">
              <h3 className="text-xl">Espace abonnés</h3>
              <p className="mt-1 text-sm text-muted">Suivez vos commandes, vos favoris et accédez à des offres exclusives.</p>
              <ButtonLink href="/compte" variant="outline" className="mt-4">Se connecter <ArrowRight className="size-4" aria-hidden /></ButtonLink>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <div className={card}>
            <span className={iconWrap}><MessageCircle className="size-6" strokeWidth={1.3} aria-hidden /></span>
            <div className="flex flex-1 flex-col items-start">
              <h3 className="text-xl">Messagerie</h3>
              <p className="mt-1 text-sm text-muted">Une question ? Discutez avec notre équipe en direct !</p>
              <ButtonLink href="/contact" variant="outline" className="mt-4">Ouvrir la messagerie <ArrowRight className="size-4" aria-hidden /></ButtonLink>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.16} className="h-full">
          <div className={card}>
            <span className={iconWrap}><Send className="size-6" strokeWidth={1.3} aria-hidden /></span>
            <div className="flex flex-1 flex-col items-start">
              <h3 className="text-xl">Précommande en DM</h3>
              <p className="mt-1 text-sm text-muted">Un article spécifique ? Contacte-nous sur Instagram ou Snapchat.</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <li key={s.id}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone bg-white px-4 text-xs hover:border-ink">
                      <SocialIcon id={s.id} className="size-4" />{s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
