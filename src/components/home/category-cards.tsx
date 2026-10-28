import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { ProductImage } from "@/components/ui/product-image";
import { Reveal } from "@/components/ui/reveal";

export function CategoryCards() {
  return (
    <section aria-labelledby="cat-title" className="mx-auto max-w-[var(--container-page)] px-4 py-10 sm:px-6 lg:py-14">
      <h2 id="cat-title" className="sr-only">Nos catégories</h2>
      <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-5">
        {categories.map((c, i) => (
          <li key={c.slug} className="w-[62vw] max-w-72 shrink-0 snap-start scroll-ml-4 sm:w-auto sm:max-w-none">
            <Reveal delay={i * 0.07} className="h-full">
              <Link href={c.href} className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-soft ring-1 ring-stone transition-shadow duration-300 hover:shadow-[0_14px_36px_-14px_rgb(0_0_0/0.3)]">
                <ProductImage
                  src={c.image} alt="" label={c.name}
                  sizes="(min-width:1024px) 19vw, (min-width:640px) 31vw, 62vw"
                  className="aspect-[4/3.4]"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="flex items-center justify-between gap-2 p-4">
                  <div>
                    <h3 className="text-xl">{c.name}</h3>
                    <p className="text-xs text-muted">{c.cta}</p>
                  </div>
                  <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/70 transition-colors group-hover:bg-ink group-hover:text-white">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
