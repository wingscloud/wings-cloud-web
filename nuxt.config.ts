import { loadEnv } from 'vite';

let envData = {};
const scripts = process.env.npm_lifecycle_script?.split(' ');
if (scripts && scripts.length > 0) {
  const mode = scripts[scripts?.length - 1];
  envData = loadEnv(mode, 'env');
}

export default defineNuxtConfig({
  rootDir: './',
  srcDir: 'src/',
  runtimeConfig: { public: envData },
  app: {
    head: {
      charset: 'UTF-8',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      viewport:
        'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: 'Portal Website',
      meta: [
        {
          name: 'description',
          content: '门户网站系统，基于 Nuxt3 的服务端多页渲染',
        },
      ],
    },
  },
  vite: {
    assetsInclude: ['svga'],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/themes/index.scss";',
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
});
