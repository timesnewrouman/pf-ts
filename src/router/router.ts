const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import("@/pages/MainPage.vue"),
  },
]

export {routes};