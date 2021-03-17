import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routes'
import LoadScript from 'vue-plugin-load-script'

Vue.use(VueAxios, axios);
Vue.use(LoadScript);

Vue.loadScript("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js")
  .then(() => {
    // Script is loaded, do something
  })
  .catch(() => {
    // Failed to fetch script
  });

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
