import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: () =>
      import(/* webpackChunkName: "upcoming" */ "../views/Upcoming.vue"),
  },
  {
    path: "/ships",
    name: "Ships",
    component: () =>
      import(/* webpackChunkName: "ships" */ "../views/Ships.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
