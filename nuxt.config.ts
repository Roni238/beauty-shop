export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  studio: {
    repository: {
      provider: 'github',
      owner: 'Roni238',
      repo: 'beauty-shop',
      branch: 'main'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_variables.scss" as *;
            @use "@/assets/scss/_mixins.scss" as *;
            @use "@/assets/scss/main.scss" as *;
          `
        }
      }
    }
  },
  modules: ["@nuxt/image", "nuxt-studio", "@nuxt/content"]
})