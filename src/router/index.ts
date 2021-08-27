import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: string) {
  return (originalPush.call(this, location) as unknown as Promise<any>).catch(
    (error: Error) => {}
  );
};

const routes: Array<RouteConfig> = [
  {
    path: "/3dChart",
    name: "3dChart",
    component: () =>
      import(/* webpackChunkName: "3dChart" */ "../views/3dChart.vue"),
  },
  {
    path: "/splom",
    name: "splom",
    component: () =>
      import(/* webpackChunkName: "splom" */ "../views/Splom.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
