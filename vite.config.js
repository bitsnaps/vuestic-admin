import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import i18nResources from 'vite-plugin-i18n-resources'
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
// import ViteRequireContext from '@originjs/vite-plugin-require-context'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // viteCommonjs({
    //   commonjsOptions: {
    //     transformMixedEsModules: true,
    //   },
    // }),
    // I18n config
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      compositionOnly: true,
      include: resolve(__dirname, '@/i18n/**')
    }),
    i18nResources({
      path: resolve(__dirname, "./src/i18n"),
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: false,
  },
})
