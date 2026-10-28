import type { ReactNode } from "react";
export const inputClass = "w-full rounded-xl border border-stone bg-white px-4 py-3 text-base outline-none transition-colors focus:border-ink aria-[invalid=true]:border-red-700";
export function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      {children}
      <p id={`${id}-err`} role={error ? "alert" : undefined} className="mt-1 min-h-5 text-xs text-red-700">{error}</p>
    </div>
  );
}
