import { createRouter, createWebHistory } from "vue-router";
import LGTMView from "../views/LGTMView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LGTMView,
    },
  ],
});

export default router;
