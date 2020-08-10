import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../views/home/Home.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/Home.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/detail/Detail.vue"),
    props: true,
  },
  {
    path: "/file/:loginname",
    name: "file",
    component: () => import("../views/file/File.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
