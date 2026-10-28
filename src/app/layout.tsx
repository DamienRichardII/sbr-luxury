import type { Metadata, Viewport } from "next";
import { MotionConfig } from "motion/react";
import "@/styles/globals.css";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toast";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "SBR Luxury — Mode de luxe à prix accessibles", template: "%s | SBR Luxury" },
  description: siteConfig.description,
  openGraph: { siteName: siteConfig.name, locale: "fr_FR", type: "website" },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080808" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <MotionConfig reducedMotion="user">
          <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Aller au contenu</a>
          <TopBar />
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
          <Toaster />
        </MotionConfig>
      </body>
    </html>
  );
}
