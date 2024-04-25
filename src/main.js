import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createVuetify} from 'vuetify';
import {createRouter, createWebHistory} from 'vue-router';
import 'vuetify/styles';
// import * as components from 'vuetify/components';
// import * as directives from 'vuetify/directives';
import {VBtn, VDialog, VCard, VToolbar, VAutocomplete, VTextField, VFileInput} from 'vuetify/components';
import App from '@/App.vue';
import {routes} from "@/router/router";
import '/src/assets/styles/index..scss';
import {tr} from "vuetify/locale";

const pinia = createPinia();

const vuetify = createVuetify({
  // components,
  // directives,
  aliases: {
    VBtnPrimary24: VBtn,
    VBtnPrimary30: VBtn,
    VBtnPrimary48: VBtn,
    VDialog1000ScrollablePersistent: VDialog,
    VAutocompleteCompactPlain: VAutocomplete,
    VTextFieldCompactPlain: VTextField,
    VFileInputCompactPlain: VFileInput,
  },
  defaults: {
    VBtn: {
      variant: 'plain',
      style: 'color: red',
    },
    VBtnPrimary24: {
      variant: 'flat',
      style: 'height: 24px; min-width: 120px;',
      class: 'primary-btn'
    },
    VBtnPrimary30: {
      variant: 'flat',
      style: 'height: 30px; min-width: 120px;',
      class: 'primary-btn'
    },
    VCol: {
      VBtnPrimary48: {
        variant: 'flat',
        style: 'height: 48px; min-width: 120px;',
        class: 'primary-btn'
      },
    },
    VCard: { // не работает, т.к нет такой вложенности
      VBtnPrimary30: {
        style: 'color: red',
      },
    },
    VDialog1000ScrollablePersistent: {
      maxWidth: '1000',
      persistent: true,
      scrollable: true,
      VCard: {
        VToolbar: {
          outlined: true,
          style: 'color="white"'
        }
      }
    },
    VAutocompleteCompactPlain: {
      density: 'compact',
      variant: 'plain'
    },
    VTextFieldCompactPlain: {
      density: 'compact',
      variant: 'plain'
    },
    VFileInputCompactPlain: {
      density: 'compact',
      variant: 'plain'
    },

  },
})

const router = createRouter({
  history: createWebHistory(import.meta.env.MODE === 'test' ? import.meta.env.VITE_TEST_PATH : ''),
  routes: routes
});

createApp(App, {})
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')