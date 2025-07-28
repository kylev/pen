import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { use } from "react";

export default defineConfig({
  base: "./",
  build: {
    outDir: "build",
  },
  plugins: [react()],
  server: {
    host: true,
  },
});
