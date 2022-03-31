import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Alpha from "../views/Alpha.vue";
import Beta from "../views/Beta.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
