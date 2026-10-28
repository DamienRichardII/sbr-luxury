import type { Metadata } from "next";
import { CatalogPage } from "@/features/catalog/catalog-page";
import { catalogRoutes } from "@/features/catalog/routes";
import { pageMetadata } from "@/lib/seo";

const route = catalogRoutes["sacs"]!;
export const metadata: Metadata = pageMetadata(route.title, route.description, route.path);

export default function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  return <CatalogPage routeKey="sacs" searchParams={searchParams} />;
}
