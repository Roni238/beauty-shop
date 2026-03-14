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
  content: {
    database: {
      type: 'libsql',
      // Указываем путь к локальному файлу базы
      // В режиме разработки это будет .nuxt/content.db, 
      // а в продакшене — файл в корне или временной папке
      url: 'file:./content.db' 
    }
  },
  
  nitro: {
    // Это поможет Nitro правильно упаковать бинарные зависимости libsql для Vercel
    external: ['@libsql/client']
  },
  modules: ["@nuxt/image", "nuxt-studio", "@nuxt/content"]
})