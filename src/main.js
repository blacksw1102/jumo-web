import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

import SignUpForm from './components/SignUpForm'
import PageNotFound from './views/PageNotFound'

Vue.use(VueAxios, axios);
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/signup', SignUpForm },
    { path: '*', redirect: "/404" },
    { path: '/404', component: PageNotFound }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
