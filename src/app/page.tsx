import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { CategoryCards } from "@/components/home/category-cards";
import { BestSellers } from "@/components/home/best-sellers";
import { EditorialBanner } from "@/components/home/editorial-banner";
import { Services } from "@/components/home/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "SBR Luxury — Mode de luxe à prix accessibles" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const org = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}${siteConfig.logo.src}` };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <Hero />
      <TrustBar />
      <CategoryCards />
      <BestSellers />
      <EditorialBanner />
      <Services />
    </>
  );
}
