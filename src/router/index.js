import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/add-task",
    name: "add-task",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddTaskView.vue"),
    meta: { requireAuthen: true },
  },
  {
    path: "/edit/:id",
    name: "edit-task",
    component: () => import("../views/EditTaskView.vue"),
    meta: { requireAuthen: true },
    beforeEnter: (to, from, next) => {
      const isExisted = store.state.taskList.find(
        (task) => task.id === to.params.id
      );

      if (isExisted) next();
      else next({ name: "not-found" });
    },
  },
  {
    path: "/delete/:id",
    name: "delete-task",
    component: () => import("../views/DeleteTaskView.vue"),
    meta: { requireAuthen: true },
  },
  {
    path: "/not-found",
    alias: "*",
    name: "not-found",
    component: () => import("../views/404NotFoundView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // if (to.matched.some((record) => record.meta.requireAuthen)) {
  if (to.meta.requireAuthen) {
    if (!store.state.user) {
      next({ name: "login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
