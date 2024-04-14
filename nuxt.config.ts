// https://nuxt.com/docs/api/configuration/nuxt-config
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/global.scss', '~/assets/styles/variable.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {
    server: {
      hmr: true,
    },
    plugins: [vueJsx()],
  },
  devServer: {
    port: process.env.PORT as unknown as number,
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  modules: ['@unocss/nuxt', '@element-plus/nuxt', 'dayjs-nuxt'],
});
