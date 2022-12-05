export default defineNuxtConfig({
  srcDir: 'src/',
  vite: {
    assetsInclude: ['svga'],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/theme.scss";',
        },
      },
    },
  },
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@unocss/nuxt'],
  build: {
    transpile: ['@varlet/ui'],
  },
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: [],
    rules: [],
  },
})
