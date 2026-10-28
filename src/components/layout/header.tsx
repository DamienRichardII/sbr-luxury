"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { MiniCart } from "@/components/cart/mini-cart";
import { SearchSheet } from "./search-sheet";
import { MobileMenu } from "./mobile-menu";
import { mainNav } from "@/data/navigation";
import { cartCount, useCart } from "@/features/cart/store";
import { useFavorites } from "@/features/favorites/store";
import { useHydrated } from "@/hooks/use-hydrated";
import { cn } from "@/lib/utils";

const iconBtn = "relative grid size-11 place-items-center rounded-full transition-colors hover:bg-cream";

function Badge({ n }: { n: number }) {
  if (!n) return null;
  return (
    <motion.span
      key={n} initial={{ scale: 0.6 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500, damping: 15 }}
      className="absolute right-0.5 top-0.5 grid min-w-[1.1rem] place-items-center rounded-full bg-ink px-1 text-[0.65rem] font-semibold leading-[1.1rem] text-white"
    >
      {n}
    </motion.span>
  );
}

export function Header() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const count = useCart((s) => cartCount(s.lines));
  const setCartOpen = useCart((s) => s.setOpen);
  const favCount = useFavorites((s) => s.slugs.length);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white transition-[background-color,box-shadow,border-color] duration-300",
        scrolled ? "border-stone bg-white/90 shadow-[0_8px_24px_-18px_rgb(0_0_0/0.35)] backdrop-blur-md" : "border-transparent",
      )}
    >
      <div className="mx-auto grid h-16 max-w-[var(--container-page)] grid-cols-[1fr_auto_1fr] items-center px-2 sm:px-4 lg:flex lg:h-20 lg:gap-6 lg:px-6">
        <div className="lg:hidden">
          <button type="button" className={iconBtn} aria-label="Ouvrir le menu" onClick={() => setMenuOpen(true)}>
            <Menu className="size-6" strokeWidth={1.5} />
          </button>
        </div>

        <Link href="/" aria-label="SBR Luxury — accueil" className="justify-self-center lg:justify-self-auto">
          <Logo className={cn("w-auto transition-[height] duration-300", scrolled ? "h-11 lg:h-12" : "h-12 lg:h-14")} priority sizes="120px" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden flex-1 justify-center lg:flex" onMouseLeave={() => setHovered(null)}>
          <ul className="flex items-center gap-0.5 xl:gap-2">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              const open = hovered === item.label;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHovered(item.children ? item.label : null)}
                  onFocus={() => setHovered(item.children ? item.label : null)}
                  onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHovered(null); }}
                  onKeyDown={(e) => e.key === "Escape" && setHovered(null)}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="relative flex items-center gap-1 px-2.5 py-3 text-[0.8rem] tracking-wide transition-opacity hover:opacity-70 xl:px-3 xl:text-sm"
                  >
                    {item.label}
                    {item.children && <ChevronDown className={cn("size-3 transition-transform", open && "rotate-180")} aria-hidden />}
                    {active && <motion.span layoutId="nav-underline" className="absolute inset-x-2.5 bottom-1.5 h-px bg-ink" />}
                  </Link>
                  <AnimatePresence>
                    {item.children && open && (
                      <motion.ul
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full z-10 min-w-52 -translate-x-1/2 rounded-xl border border-stone bg-white p-2 shadow-soft"
                      >
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} onClick={() => setHovered(null)} className="block rounded-lg px-3 py-2 text-sm hover:bg-cream">{c.label}</Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-self-end">
          <button type="button" className={iconBtn} aria-label="Rechercher" onClick={() => setSearchOpen(true)}>
            <Search className="size-5" strokeWidth={1.5} />
          </button>
          <Link href="/compte" className={cn(iconBtn, "hidden w-auto gap-2 px-3 lg:inline-flex")} aria-label="Mon compte">
            <User className="size-5" strokeWidth={1.5} /><span className="hidden text-xs xl:inline">Mon compte</span>
          </Link>
          <Link href="/favoris" className={cn(iconBtn, "hidden lg:grid")} aria-label={`Favoris${hydrated ? ` (${favCount})` : ""}`}>
            <Heart className="size-5" strokeWidth={1.5} />
            {hydrated && <Badge n={favCount} />}
          </Link>
          <button type="button" className={iconBtn} aria-label={`Panier${hydrated ? `, ${count} article${count > 1 ? "s" : ""}` : ""}`} onClick={() => setCartOpen(true)}>
            <ShoppingBag className="size-5" strokeWidth={1.5} />
            <span className="absolute right-0.5 top-0.5 grid min-w-[1.1rem] place-items-center rounded-full bg-ink px-1 text-[0.65rem] font-semibold leading-[1.1rem] text-white">
              {hydrated ? count : 0}
            </span>
          </button>
        </div>
      </div>
      <SearchSheet open={searchOpen} onOpenChange={setSearchOpen} />
      <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} isActive={isActive} />
      <MiniCart />
    </header>
  );
}
