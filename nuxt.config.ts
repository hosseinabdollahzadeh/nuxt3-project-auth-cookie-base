// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      apiBase: 'http://laravel9-project-api-auth-posts.test/api'
    }
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vue-toastification']
  }
})
