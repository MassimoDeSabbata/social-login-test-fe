import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
/* import { BootstrapVue } from 'bootstrap-vue' */

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/* import './app.scss' */

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueRouter)
/* Vue.use(BootstrapVue) */

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue').default
        : require('./pages/404.vue').default
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
