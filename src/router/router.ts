import {createRouter, createWebHashHistory} from 'vue-router';
// import MainPage from "@/pages/MainPage.vue";

const routes = [
  {
    path: '/',
    name: 'MainPage',
    // component: MainPage
    component: () => import("@/pages/MainPage.vue"),
  },
  // {
  //   path: '/',
  //   name: 'VuetifyTest',
  //   component: () => import("@/pages/VuetifyTest.vue"),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router