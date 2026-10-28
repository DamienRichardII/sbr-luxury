"use client";
import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Affiche l'image ; si le fichier est absent, un visuel neutre de remplacement (aucune image inventée). */
export function ProductImage({
  src, alt, sizes, priority, className, imgClassName, label,
}: {
  src?: string; alt: string; sizes: string; priority?: boolean; className?: string; imgClassName?: string; label?: string;
}) {
  const [failed, setFailed] = useState(!src);
  return (
    <div className={cn("relative overflow-hidden bg-stone", className)}>
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 grid place-items-center bg-gradient-to-br from-stone via-cream to-stone text-muted"
        >
          <div className="flex flex-col items-center gap-2 px-4 text-center">
            <ImageIcon className="size-7 opacity-50" aria-hidden strokeWidth={1.25} />
            {label && <span className="text-[0.7rem] uppercase tracking-[0.18em]">{label}</span>}
          </div>
        </div>
      ) : (
        <Image
          src={src!}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={cn("object-cover", imgClassName)}
        />
      )}
    </div>
  );
}
