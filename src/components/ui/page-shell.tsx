import type { ReactNode } from "react";
export function PageShell({ title, intro, children, narrow }: { title: string; intro?: string; children: ReactNode; narrow?: boolean }) {
  return (
    <div className={`mx-auto px-4 py-10 sm:px-6 lg:py-14 ${narrow ? "max-w-3xl" : "max-w-[var(--container-page)]"}`}>
      <header className="mb-8 text-center">
        <h1 className="text-display">{title}</h1>
        {intro && <p className="mx-auto mt-2 max-w-xl text-sm text-muted">{intro}</p>}
      </header>
      {children}
    </div>
  );
}
export function Todo({ children }: { children: ReactNode }) {
  return <p className="rounded-lg border border-dashed border-ink/30 bg-cream px-4 py-3 text-sm text-muted">À compléter : {children}</p>;
}
