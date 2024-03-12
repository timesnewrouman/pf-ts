import {createApp} from 'vue';
import {createPinia} from 'pinia';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from '@/App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import {routes} from "@/router/router";
import '/src/assets/styles/index..scss';

const pinia = createPinia();

const vuetify = createVuetify({
  components,
  directives,
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