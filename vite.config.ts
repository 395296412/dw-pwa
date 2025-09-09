import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { VitePWA } from "vite-plugin-pwa";
import manifest from "./src/manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: manifest.name,
        short_name: manifest.name,
        description: manifest.description,
        theme_color: "#ffffff",
        icons: [
          {
            src: "static/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "static/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});
