import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import observerPlugin from "mobx-react-observer/babel-plugin";

export default defineConfig({
  base: "/pen/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          uicore: [
            "react",
            "react-dom",
            "mobx",
            "mobx-react-observer",
            "i18next",
            "react-i18next",
            "lodash",
          ],
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
