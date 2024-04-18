import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dts()],
  // resolve: {
  //   alias: {
  //     "@": fileURLToPath(new URL("./src", import.meta.url)),
  //   },
  // },
  build: {
    minify: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Logitar Vue3 UI",
      fileName: "logitar-vue3-ui",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
