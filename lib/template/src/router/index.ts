import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("@/views/Index.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
