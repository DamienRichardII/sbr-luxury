import Image from "next/image";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className, priority = false, sizes }: { className?: string; priority?: boolean; sizes?: string }) {
  const { src, width, height } = siteConfig.logo;
  return (
    <Image
      src={src}
      alt="SBR Luxury"
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full select-none", className)}
    />
  );
}
