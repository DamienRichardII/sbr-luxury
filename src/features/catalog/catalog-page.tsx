import { CatalogView, type CatalogInitial } from "./catalog-view";
import { baseProducts, catalogRoutes } from "./routes";

type Params = Record<string, string | string[] | undefined>;
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export async function CatalogPage({ routeKey, searchParams }: { routeKey: string; searchParams: Promise<Params> }) {
  const route = catalogRoutes[routeKey]!;
  const sp = await searchParams;
  const tri = one(sp.tri);
  const initial: CatalogInitial = {
    categorie: one(sp.categorie),
    type: one(sp.type),
    tri: tri === "prix-asc" || tri === "prix-desc" || tri === "nouveautes" ? tri : undefined,
    dispo: one(sp.dispo) === "1",
  };
  return (
    <div className="mx-auto max-w-[var(--container-page)] px-4 py-8 sm:px-6 lg:py-12">
      <header className="mb-8 text-center">
        <h1 className="text-display">{route.title}</h1>
        <p className="mt-2 text-sm text-muted">{route.description}</p>
      </header>
      <CatalogView
        key={JSON.stringify(initial)}
        items={baseProducts(route)}
        showCategoryFilter={route.categoryFilter}
        initial={initial}
        emptyHint={route.key === "promotions" ? "Aucune promotion en cours. Revenez bientôt ou inscrivez-vous à la newsletter." : undefined}
      />
    </div>
  );
}
