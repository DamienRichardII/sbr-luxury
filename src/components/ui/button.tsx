import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "outline-light" | "light";
const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-wide transition-[background-color,color,border-color,transform,box-shadow] duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50";
const variants: Record<Variant, string> = {
  solid: "bg-ink text-white hover:bg-white hover:text-ink border border-ink hover:shadow-soft",
  outline: "border border-ink/80 text-ink hover:bg-ink hover:text-white",
  "outline-light": "border border-white/80 text-white hover:bg-white hover:text-ink",
  light: "border border-white bg-white text-ink hover:bg-transparent hover:text-white",
};

export function buttonClass(variant: Variant = "solid", className?: string) {
  return cn(base, variants[variant], className);
}

export function ButtonLink({ variant, className, ...props }: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={buttonClass(variant, className)} {...props} />;
}

export function Button({ variant, className, ...props }: ComponentProps<"button"> & { variant?: Variant }) {
  return <button type="button" className={buttonClass(variant, className)} {...props} />;
}
