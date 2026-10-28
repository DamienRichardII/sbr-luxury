"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartLine } from "@/types";
import { getProduct } from "@/data/products";

interface CartState {
  lines: CartLine[];
  open: boolean;
  add: (slug: string, opts?: { color?: string; size?: string; quantity?: number }) => void;
  setQty: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  setOpen: (open: boolean) => void;
}

export const lineKey = (slug: string, color?: string, size?: string) => [slug, color ?? "", size ?? ""].join("|");

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      open: false,
      add: (slug, opts = {}) =>
        set((s) => {
          const key = lineKey(slug, opts.color, opts.size);
          const qty = opts.quantity ?? 1;
          const existing = s.lines.find((l) => l.key === key);
          const lines = existing
            ? s.lines.map((l) => (l.key === key ? { ...l, quantity: Math.min(l.quantity + qty, 20) } : l))
            : [...s.lines, { key, slug, quantity: qty, color: opts.color, size: opts.size }];
          return { lines, open: true };
        }),
      setQty: (key, quantity) =>
        set((s) => ({
          lines: s.lines.map((l) => (l.key === key ? { ...l, quantity: Math.max(1, Math.min(quantity, 20)) } : l)),
        })),
      remove: (key) => set((s) => ({ lines: s.lines.filter((l) => l.key !== key) })),
      clear: () => set({ lines: [] }),
      setOpen: (open) => set({ open }),
    }),
    { name: "sbr-cart", partialize: (s) => ({ lines: s.lines }) },
  ),
);

export const cartCount = (lines: CartLine[]) => lines.reduce((n, l) => n + l.quantity, 0);
export const cartSubtotal = (lines: CartLine[]) =>
  lines.reduce((sum, l) => sum + (getProduct(l.slug)?.price ?? 0) * l.quantity, 0);
