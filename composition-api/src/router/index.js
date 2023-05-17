import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/computed",
    component: () => import("../pages/TheComputed.vue"),
  },
  {
    path: "/params",
    component: () => import("../pages/TheParams.vue"),
  },

  {
    path: "/users",
    component: () => import("../pages/UserList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
