import Image from "next/image";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

/** variant "plate" : logo sur carte crème opaque, pour les fonds photo/sombres (hero). */
export function Logo({ className, priority = false, sizes, variant = "default" }: { className?: string; priority?: boolean; sizes?: string; variant?: "default" | "plate" }) {
  const l = siteConfig.logo;
  const plate = variant === "plate";
  return (
    <Image
      src={plate ? l.plateSrc : l.src}
      alt="SBR Luxury"
      width={plate ? l.plateWidth : l.width}
      height={plate ? l.plateHeight : l.height}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full select-none", className)}
    />
  );
}
