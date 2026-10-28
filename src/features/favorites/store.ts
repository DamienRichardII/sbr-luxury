"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavState {
  slugs: string[];
  toggle: (slug: string) => boolean;
}

export const useFavorites = create<FavState>()(
  persist(
    (set, get) => ({
      slugs: [],
      toggle: (slug) => {
        const has = get().slugs.includes(slug);
        set({ slugs: has ? get().slugs.filter((s) => s !== slug) : [...get().slugs, slug] });
        return !has;
      },
    }),
    { name: "sbr-favorites" },
  ),
);
