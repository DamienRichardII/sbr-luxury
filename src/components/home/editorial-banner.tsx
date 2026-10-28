import { ArrowRight } from "lucide-react";
import { ProductImage } from "@/components/ui/product-image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export function EditorialBanner() {
  return (
    <section aria-labelledby="edito-title" className="on-dark relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(90%_120%_at_85%_40%,#5b5249_0%,#1b1917_55%,#080808_100%)]" />
      <ProductImage src={siteConfig.editorialImage} alt="" sizes="100vw" className="absolute inset-0 -z-10 bg-transparent" imgClassName="object-[70%_center]" />
      <div aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-t from-ink/90 via-ink/55 to-ink/20 md:bg-gradient-to-r md:from-ink/90 md:via-ink/55 md:to-transparent" />
      <div className="mx-auto flex min-h-[26rem] max-w-[var(--container-page)] items-end px-5 py-10 sm:px-6 md:min-h-[22rem] md:items-center md:py-14">
        <Reveal className="max-w-md">
          <h2 id="edito-title" className="text-display text-balance">Des pièces iconiques pour un style unique</h2>
          <ButtonLink href="/best-sellers#collection" variant="outline-light" className="mt-6 w-full sm:w-auto">
            Voir toutes les nouveautés <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
