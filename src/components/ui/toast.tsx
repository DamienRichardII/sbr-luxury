"use client";
import { create } from "zustand";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";

interface ToastState {
  message: string | null;
  id: number;
  show: (message: string) => void;
  hide: () => void;
}

let timer: ReturnType<typeof setTimeout> | undefined;

export const useToast = create<ToastState>((set) => ({
  message: null,
  id: 0,
  show: (message) => {
    clearTimeout(timer);
    set((s) => ({ message, id: s.id + 1 }));
    timer = setTimeout(() => set({ message: null }), 2600);
  },
  hide: () => set({ message: null }),
}));

export function Toaster() {
  const { message, id } = useToast();
  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-[80] flex justify-center px-4 pb-[env(safe-area-inset-bottom)]"
    >
      <AnimatePresence>
        {message && (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto flex max-w-sm items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-white shadow-lg"
          >
            <Check className="size-4 shrink-0" aria-hidden /> {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
