import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SBR Luxury",
    short_name: "SBR Luxury",
    description: "Mode de luxe à prix accessibles",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f2",
    theme_color: "#080808",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
