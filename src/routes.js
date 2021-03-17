import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import SignUp from './views/SignUp'
import PageNotFound from './views/PageNotFound'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/signup', component: SignUp },
    { path: '*', redirect: "/404" },
    { path: '/404', component: PageNotFound }
  ]
})

export default router;