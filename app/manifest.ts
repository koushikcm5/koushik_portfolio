import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Koushik M — Full Stack & Mobile Developer",
    short_name: "Koushik M",
    description: "Co-Founder of Grow AI Tech. Crafting scalable web and mobile applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#10b981", // emerald-500
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
