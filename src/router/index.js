import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: "LayoutPrivate",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
      meta: {
        layout: "LayoutPrivate",
      },
    },
    {
      path: "/blog/:slug",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
      meta: {
        layout: "LayoutPrivate",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        layout: "LayoutPublic",
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
      meta: {
        layout: "LayoutPublic",
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../views/ForgotView.vue"),
      meta: {
        layout: "LayoutPublic",
      },
    },
  ],
});

export default router;
