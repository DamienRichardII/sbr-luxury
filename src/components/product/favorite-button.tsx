"use client";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useFavorites } from "@/features/favorites/store";
import { useHydrated } from "@/hooks/use-hydrated";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

export function FavoriteButton({ slug, name, className }: { slug: string; name: string; className?: string }) {
  const hydrated = useHydrated();
  const active = useFavorites((s) => s.slugs.includes(slug)) && hydrated;
  const toggle = useFavorites((s) => s.toggle);
  const show = useToast((s) => s.show);
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? `Retirer ${name} des favoris` : `Ajouter ${name} aux favoris`}
      onClick={() => show(toggle(slug) ? "Ajouté aux favoris" : "Retiré des favoris")}
      className={cn("grid size-11 place-items-center rounded-full bg-white/90 text-ink backdrop-blur transition-colors hover:bg-white", className)}
    >
      <motion.span key={String(active)} initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500, damping: 14 }}>
        <Heart className={cn("size-5", active && "fill-ink")} strokeWidth={1.5} aria-hidden />
      </motion.span>
    </button>
  );
}
