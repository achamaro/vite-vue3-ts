import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { presetIcons } from "unocss";
import Unocss from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "production") {
    //
  }

  return {
    define: Object.fromEntries(
      Object.entries({
        // APP_VERSION: git.long(),
      }).map(([key, value]) => [key, JSON.stringify(value)])
    ),
    plugins: [
      vue(),
      Unocss({
        presets: [
          presetIcons({
            prefix: "i-",
            extraProperties: {
              display: "inline-block",
              "vertical-align": "middle",
            },
          }),
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
    },
    build: {
      assetsInlineLimit: 0,
    },
  };
});
