import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Detail from "./views/Detail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Home
    },
    {
      path: "/results/:search",
      name: "results",
      component: Home
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail
    }
  ]
});
