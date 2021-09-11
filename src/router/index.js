import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Success from "../views/Success.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/thred",
    name: "thred",
    component: () => import("../views/thred.vue"),
  },
];
  {
    path: "/success",
    name: "Success",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Success,
  },
]

const router = new VueRouter({
  routes,
})

export default router

