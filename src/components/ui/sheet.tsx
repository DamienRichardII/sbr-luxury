"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Panneau latéral accessible (focus piégé, Échap, aria) — base Radix comme shadcn/ui. */
export function Sheet({
  open, onOpenChange, side = "right", title, children, className, hideTitle,
}: {
  open: boolean; onOpenChange: (o: boolean) => void; side?: "left" | "right" | "top"; title: string;
  children: ReactNode; className?: string; hideTitle?: boolean;
}) {
  const from = side === "left" ? { x: "-100%" } : side === "right" ? { x: "100%" } : { y: "-100%" };
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-[2px]"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className={cn(
                  "fixed z-[70] flex flex-col bg-white shadow-2xl outline-none",
                  side === "left" && "inset-y-0 left-0 w-[min(88vw,24rem)]",
                  side === "right" && "inset-y-0 right-0 w-[min(94vw,26rem)]",
                  side === "top" && "inset-x-0 top-0 max-h-[100dvh]",
                  className,
                )}
                initial={from} animate={{ x: 0, y: 0 }} exit={from}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-between border-b border-stone px-5 py-4">
                  <Dialog.Title className={cn("font-serif text-2xl", hideTitle && "sr-only")}>{title}</Dialog.Title>
                  <Dialog.Close className="grid size-11 place-items-center rounded-full hover:bg-cream" aria-label="Fermer">
                    <X className="size-5" />
                  </Dialog.Close>
                </div>
                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
