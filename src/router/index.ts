import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Alpha from "../views/Alpha.vue";
import Beta from "../views/Beta.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "alpha",
          name: "alpha",
          component: Alpha,
        },
        {
          path: "beta",
          name: "beta",
          component: Beta,
        },
      ],
    },
  ],
});

export default router;
