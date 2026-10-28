export function CatalogSkeleton() {
  return (
    <div className="mx-auto max-w-[var(--container-page)] px-4 py-8 sm:px-6 lg:py-12" aria-busy="true" aria-label="Chargement">
      <div className="mx-auto mb-10 h-10 w-48 animate-pulse rounded bg-stone" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="overflow-hidden rounded-[var(--radius-card)] ring-1 ring-stone">
            <div className="aspect-[4/5] animate-pulse bg-stone" />
            <div className="space-y-2 p-4"><div className="h-3 w-3/4 animate-pulse rounded bg-stone" /><div className="h-4 w-1/3 animate-pulse rounded bg-stone" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
