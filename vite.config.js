import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        manualChunks: {
          uicore: [
            "react",
            "react-dom",
            "mobx",
            "mobx-react-lite",
            "i18next",
            "react-i18next",
            "lodash",
          ],
        },
      },
    },
  },
  plugins: [react()],
  server: {
    host: true,
  },
  test: {
    environment: "jsdom",
  },
});
