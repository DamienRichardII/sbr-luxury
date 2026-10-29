"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

/** Hero : UNIQUEMENT le logo + 2 CTA, centrés. Aucun autre texte. */
export function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const [desktop, setDesktop] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 60]); // parallaxe très subtile

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const on = () => setDesktop(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  return (
    <section aria-label="SBR Luxury" className="on-dark relative isolate flex h-[min(82svh,880px)] min-h-[34rem] items-center justify-center overflow-hidden bg-ink">
      {/* Fond : gradient éditorial noir / beige, remplacé par la vraie photo si présente */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(120%_90%_at_75%_20%,#d9cfc2_0%,#6f655b_32%,#1a1816_62%,#080808_100%)]" />
      {imgOk && (
        <motion.div aria-hidden className="absolute -inset-y-8 inset-x-0 -z-10" style={desktop ? { y } : undefined}>
          <Image
            src={siteConfig.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            onError={() => setImgOk(false)}
            className="object-cover object-[62%_center] sm:object-center"
          />
        </motion.div>
      )}
      <div aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-b from-ink/55 via-ink/35 to-ink/60" />

      <div className="flex w-full flex-col items-center gap-8 px-5 sm:gap-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="drop-shadow-[0_20px_50px_rgb(0_0_0/0.45)]"
        >
          <Logo variant="plate" priority sizes="(min-width:1024px) 420px, 70vw" className="h-[min(clamp(15rem,46svh,27rem),86vw)] w-auto" />
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
        >
          <ButtonLink href="/best-sellers#collection" variant="light" className="px-8 sm:min-w-56">Découvrir la collection</ButtonLink>
          <ButtonLink href="/best-sellers" variant="outline-light" className="px-8 sm:min-w-44">Best Sellers</ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
