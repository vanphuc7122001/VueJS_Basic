import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/diy",
    component: () => import("../pages/TheDiy.vue"),
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
  {
    path: "/users/:id",
    component: () => import("../pages/UserDetail.vue"),
  },
  {
    path: "/ref",
    component: () => import("../pages/TheRef.vue"),
  },
  {
    path: "/upload_image",
    component: () => import("../pages/UpLoadImage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
