import { createRouter, createWebHistory } from "vue-router";
import pdf from "../views/pdf.vue";
import cvpage from "../views/cvpage.vue";
import home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/pdf",
    name: "pdf",
    component: pdf,
  },
  {
    path: "/cvpage",
    name: "cvpage",
    component: cvpage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
