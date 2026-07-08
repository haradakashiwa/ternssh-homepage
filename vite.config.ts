import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  ssr: {
    noExternal: [
      "react-markdown",
      "remark-gfm",
      "rehype-raw",
      "rehype-sanitize",
      "lucide-react",
    ],
  },
});
