import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product/product-detail";
import { ProductCard } from "@/components/product/product-card";
import { getProduct, getSimilar, products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return pageMetadata(p.name, p.description, `/produit/${p.slug}`);
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  // Données structurées Product : uniquement quand les données sont validées (demo === false)
  const jsonLd = product.demo ? null : {
    "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.description,
    image: product.images.map((i) => `${siteConfig.url}${i}`),
    offers: { "@type": "Offer", priceCurrency: siteConfig.currency, price: product.price, availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock", url: `${siteConfig.url}/produit/${product.slug}` },
  };
  return (
    <div className="mx-auto max-w-[var(--container-page)] px-4 py-6 sm:px-6 lg:py-10">
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      <nav aria-label="Fil d’Ariane" className="mb-5 text-xs text-muted">
        <Link href="/" className="hover:underline">Accueil</Link> / <Link href={`/${product.category}`} className="hover:underline capitalize">{product.category}</Link> / <span aria-current="page" className="text-ink">{product.name}</span>
      </nav>
      <ProductDetail product={product} />
      <section aria-labelledby="sim" className="mt-16">
        <h2 id="sim" className="text-title mb-6">Produits similaires</h2>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {getSimilar(product).map((p) => <li key={p.slug}><ProductCard product={p} /></li>)}
        </ul>
      </section>
    </div>
  );
}
