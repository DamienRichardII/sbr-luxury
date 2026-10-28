"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Heart, Lock, Headphones } from "lucide-react";
import { socialLinks } from "@/data/site";
import { SocialIcon } from "@/components/ui/social-link";

const messages = [
  { icon: Heart, text: "Livraison gratuite en France 🇫🇷" },
  { icon: Lock, text: "Paiement sécurisé" },
  { icon: Headphones, text: "Service client 7j/7" },
];

export function TopBar() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % messages.length), 3500);
    return () => clearInterval(t);
  }, []);
  const M = messages[i]!;
  return (
    <div className="on-dark bg-ink text-white">
      <div className="mx-auto flex h-10 max-w-[var(--container-page)] items-center justify-between gap-4 px-4 text-xs sm:px-6">
        {/* Mobile : un message à la fois, jamais coupé */}
        <div className="relative h-full flex-1 overflow-hidden md:hidden" aria-live="off">
          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-center justify-center gap-2"
            >
              <M.icon className="size-3.5" aria-hidden /> {M.text}
            </motion.p>
          </AnimatePresence>
        </div>
        <ul className="hidden items-center gap-5 md:flex">
          {messages.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 whitespace-nowrap"><Icon className="size-3.5" aria-hidden />{text}</li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 md:flex">
          <span className="text-white/70">Suis-nous :</span>
          {socialLinks.map((s) => (
            <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/70">
              <SocialIcon id={s.id} className="size-3.5" /> <span className="hidden lg:inline">{s.label}</span>
              <span className="sr-only lg:hidden">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
