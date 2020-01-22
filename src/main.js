import Vue from 'vue'
import App from './App.vue'
import store from './Store'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import routes from './Router'


Vue.use(VueAxios,axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
