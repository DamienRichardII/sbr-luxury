import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/data/site";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatPrice = (value: number) =>
  new Intl.NumberFormat(siteConfig.locale, { style: "currency", currency: siteConfig.currency }).format(value);

export const discountPercent = (price: number, compareAt?: number) =>
  compareAt && compareAt > price ? Math.round((1 - price / compareAt) * 100) : 0;
