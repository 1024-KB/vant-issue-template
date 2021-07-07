/**
 * vue router
 */
// 引入vue
import Vue from "vue";
// 引入vue-router
import VueRouter from "vue-router";

// 挂载VueRouter
Vue.use(VueRouter);

// 路径映射
const routes = [
  // home
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home")
  },
  // datetimepicker
  {
    path: "/datetimepicker",
    name: "datatimepicker",
    component: () => import("@/views/DatetimePicker")
  },
  // tab
  {
    path: "/tab",
    name: "tab",
    component: () => import("@/views/Tab")
  },
  // cell
  {
    path: "/cell",
    name: "cell",
    component: () => import("@/views/Cell")
  }
];

// 实例化vue-router
const router = new VueRouter({
  routes
});

// 导出router
export default router;
