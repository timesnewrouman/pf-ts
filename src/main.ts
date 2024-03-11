import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from '@/App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import {routes} from "@/router/router";
import './style.css';

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(import.meta.env.MODE === 'test' ? import.meta.env.VITE_TEST_PATH : ''),
  routes: routes
});

createApp(App, {})
  .use(router)
  .use(pinia)
  .mount('#app')