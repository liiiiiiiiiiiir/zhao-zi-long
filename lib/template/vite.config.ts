import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy"; // 兼容不支持esm的浏览器
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; // Vue支持JSX

export default defineConfig({
  root: "./",
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: ["defaults", "not IE 11"]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        "drop_console": true,
        "drop_debugger": true
      }
    }
  },
  define: {
    __VUE_OPTIONS_API__: false
  }
});
