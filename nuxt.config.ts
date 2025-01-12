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
    preset: "github-pages",
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    }
  },
  app:{
    baseURL: "",
    head: {
      title: "Policy Point",
    }
  },
  primevue: {
  },
  vite: {
    resolve: {
      alias: {
        '/assets/': '~/public/assets/',
      },
    },
    assetsInclude: ['**/assets/images/**/*']
  },
  build: {
    analyze: true
  },

  compatibilityDate: "2024-12-19",
})