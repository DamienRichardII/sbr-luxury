"use client";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
/** true uniquement côté client après hydratation — évite les écarts SSR avec les stores persistés. */
export function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
