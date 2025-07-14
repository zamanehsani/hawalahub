import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HawalaHub",
    short_name: "حواله خانه",
    description: "بهترین همکار حواله شما",
    start_url: "/",
    display: "standalone",
    background_color: "#1d2430", // The background color of the splash screen and app background
    theme_color: "#1d2430", // The color of the browser UI (address bar, etc.) when the app is launched
    icons: [
      {
        src: "/icon_only.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon_only.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
