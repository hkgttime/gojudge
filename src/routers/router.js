import Vue from 'vue';
import VueRouter from "vue-router"


import Registered from "./../components/registered.vue"
import ProblemList from "../components/problemlist.vue"
import Home from "../components/home.vue"
import Ranklist from "../components/ranklist.vue"
import Osc from "../components/osc.vue"
import Faq from "../components/faq.vue"
import Status from "../components/status.vue"
import Userinfo from "../components/user_info.vue"
import Login from "../components/login.vue"
import Problem from "../components/problem.vue"


Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      title: 'problem'
    }
  },
  {
    path: "/problemlist",
    component: ProblemList
  },
  {
    path: "/problem/:pid",
    component: Problem
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/ranklist",
    component: Ranklist
  },
  {
    path: "/osc",
    component: Osc
  },
  {
    path: "/faq",
    component: Faq
  },
  {
    path: "/status",
    component: Status
  },
  {
    path: "/register",
    component: Registered
  },
  {
    path: "/userinfo/:username",
    component: Userinfo
  },
  {
    path: "/login",
    component: Login
  }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router


