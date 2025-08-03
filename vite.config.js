import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import observerPlugin from "mobx-react-observer/babel-plugin";

export default defineConfig({
  base: "/pen/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-i18next", "mobx", "mobx-react-observer"],
        },
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [observerPlugin()],
      },
    }),
  ],
  test: {
    environment: "jsdom",
  },
});
