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
  {
    path: "/filmes",
    name: "Filmes",
    component: () => import("../pages/filmes"),
  },
  {
    path: "/naves",
    name: "Naves",
    component: () => import("../pages/naves"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
