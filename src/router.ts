import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomeView,
    },
    {
      name: "About",
      path: "/about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
    },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

export default router;