"use client";
import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { ProductImage } from "@/components/ui/product-image";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, name, label }: { images: string[]; name: string; label: string }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  return (
    <div className="grid gap-3 lg:grid-cols-[5rem_1fr]">
      <div
        className="group relative cursor-zoom-in overflow-hidden rounded-[var(--radius-card)] lg:order-2"
        onPointerMove={(e) => e.pointerType === "mouse" && move(e)}
        onPointerLeave={() => setZoom(null)}
        onClick={(e) => (zoom ? setZoom(null) : move(e as unknown as React.PointerEvent<HTMLDivElement>))}
      >
        <ProductImage
          key={active}
          src={images[active]} alt={name} label={label} priority
          sizes="(min-width:1024px) 45vw, 100vw"
          className="aspect-[4/5]"
          imgClassName="transition-transform duration-200 ease-out"
          // zoom : transform sur le conteneur interne
        />
        {zoom && (
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 scale-[2]" style={{ transformOrigin: `${zoom.x}% ${zoom.y}%` }}>
              <ProductImage src={images[active]} alt="" sizes="90vw" className="size-full" />
            </div>
          </div>
        )}
        <span aria-hidden className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full bg-white/90 lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100"><ZoomIn className="size-4" /></span>
      </div>
      <ul className="flex gap-2 lg:order-1 lg:flex-col">
        {images.map((src, i) => (
          <li key={src} className="w-20">
            <button type="button" onClick={() => setActive(i)} aria-label={`Photo ${i + 1} de ${images.length}`} aria-current={i === active} className={cn("block w-full overflow-hidden rounded-lg ring-1 transition", i === active ? "ring-2 ring-ink" : "ring-stone opacity-80 hover:opacity-100")}>
              <ProductImage src={src} alt="" sizes="80px" className="aspect-[4/5]" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
