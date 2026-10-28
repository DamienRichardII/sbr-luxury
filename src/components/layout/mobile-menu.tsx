"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Heart, User } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { SocialIcon } from "@/components/ui/social-link";
import { mainNav } from "@/data/navigation";
import { socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onOpenChange, isActive }: { open: boolean; onOpenChange: (o: boolean) => void; isActive: (h: string) => boolean }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const close = () => onOpenChange(false);
  const row = "flex min-h-12 w-full items-center justify-between px-5 text-left font-serif text-2xl";
  return (
    <Sheet open={open} onOpenChange={onOpenChange} side="left" title="Menu">
      <nav aria-label="Menu mobile" className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-stone">
          {mainNav.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className={row}
                    aria-expanded={expanded === item.label}
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={cn("size-5 transition-transform", expanded === item.label && "rotate-180")} aria-hidden />
                  </button>
                  {expanded === item.label && (
                    <ul className="bg-cream py-1">
                      {item.children.map((c) => (
                        <li key={c.href}><Link href={c.href} onClick={close} className="flex min-h-12 items-center px-8 text-[0.95rem]">{c.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href} onClick={close} aria-current={isActive(item.href) ? "page" : undefined} className={cn(row, isActive(item.href) && "underline underline-offset-8")}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="space-y-4 border-t border-stone p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-3">
          <Link href="/compte" onClick={close} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-stone text-sm"><User className="size-4" />Compte</Link>
          <Link href="/favoris" onClick={close} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-stone text-sm"><Heart className="size-4" />Favoris</Link>
        </div>
        <ul className="flex justify-center gap-2">
          {socialLinks.map((s) => (
            <li key={s.id}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid size-11 place-items-center rounded-full bg-cream"><SocialIcon id={s.id} className="size-5" /></a>
            </li>
          ))}
        </ul>
      </div>
    </Sheet>
  );
}
