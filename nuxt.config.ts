// https://nuxt.com/docs/api/configuration/nuxt-config

/// <reference types="@nuxtjs/google-fonts" />

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/google-fonts"],
  imports: {
    dirs: ["composables"],
  },
  css: ["@/assets/scss/main.scss", "@/assets/css/normalize.css"],
  googleFonts: {
    families: {
      Roboto: [400, 500, 600, 700],
    },
    display: "swap",
    preload: true,
    download: false,
  },
  vite: {
    server: {
      hmr: {
        port: 3000,
        clientPort: 3000,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/functions.scss";`,
        },
      },
    },
  },
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        baseUrl: ".",
        skipLibCheck: true,
      },
    },
  },
});
