import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  build: {
    outDir: "build",
  },
  plugins: [react()],
  server: {
    host: true,
  },
  test: {
    environment: "jsdom",
  },
});
