import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        isPrivate: true,
        layout: "LayoutPrivate",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
      meta: {
        isPrivate: true,
        layout: "LayoutPrivate",
      },
    },
    {
      path: "/blog/:slug",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
      meta: {
        isPrivate: true,
        layout: "LayoutPrivate",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        isPrivate: false,
        layout: "LayoutPublic",
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
      meta: {
        isPrivate: false,
        layout: "LayoutPublic",
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../views/ForgotView.vue"),
      meta: {
        isPrivate: false,
        layout: "LayoutPublic",
      },
    },
  ],
});

router.beforeEach((to, from) => {
  const { user } = storeToRefs(useAuthStore());
  if (!user.value && to.meta.isPrivate) {
    router.replace("/login");
  }
  if (user.value && !to.meta.isPrivate) {
    router.replace("/");
  }
});

export default router;
