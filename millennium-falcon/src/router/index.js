import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/MainPage"),
  },
  {
    path: "/pessoas",
    name: "Pessoas",

    component: () => import("../pages/pessoas"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
