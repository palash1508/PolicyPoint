// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", '@primevue/nuxt-module'],

  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],
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
  },

  compatibilityDate: "2024-12-19",
  app: {
    baseURL: "/PolicyPoint/"
  },
})