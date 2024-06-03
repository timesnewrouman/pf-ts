import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createVuetify} from 'vuetify';
import 'vuetify/styles';
import {VBtn, VDialog, VAutocomplete, VTextField, VFileInput} from 'vuetify/components';
import App from '@/App.vue';
import router from './router/router';
import '@/assets/styles/index.scss';

const pinia = createPinia();

const vuetify = createVuetify({
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

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')