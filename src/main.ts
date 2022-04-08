import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { VuesticPlugin } from 'vuestic-ui'
import App from './App.vue'
import store from './store'
import router from './router'
import vuesticGlobalConfig from './services/vuestic-ui/global-config'
import { messages } from 'vite-i18n-resources'

const i18nConfig = {
    legacy: true, // v8.x
    locale: 'en',
    // datetimeFormats: {en: {...}},
    fallbackLocale: 'en',
    messages
  }


/*/ (NOT WORKING) Only if you want hot module replacement when translation message file change
if (import.meta.hot) {
  import.meta.hot.on("locales-update", (data) => {
    Object.keys(data).forEach((lang) => {
      i18nConfig.global.setLocaleMessage(lang, data[lang]);
    });
  });
}*/

createApp(App)
    .use(store)
    .use(router)
    .use(createI18n(i18nConfig))
    .use(VuesticPlugin, vuesticGlobalConfig)
    .mount('#app')
