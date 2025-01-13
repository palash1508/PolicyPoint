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
    baseURL: "/PolicyPoint/",
    head: {
      title: "Policy Point",
    }
  },
  primevue: {
  },
  ssr: false,
  // vite: {
  //   resolve: {
  //     alias: {
  //       '/assets/': '~/public/assets/',
  //     },
  //   },
  //   assetsInclude: ['**/assets/images/**/*']
  // },
  build: {
    analyze: true
  },

  compatibilityDate: "2024-12-19",
})
