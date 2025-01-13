// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", '@primevue/nuxt-module'],

  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  tailwindcss:{
    viewer: false
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    }
  },
  app:{
    head: {
      title: "Policy Point",
    }
  },
  primevue: {
  },
  build: {
    analyze: true
  },

  compatibilityDate: "2024-12-19",
})
