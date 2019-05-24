import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import  vuex from "vuex"
import  "./mockData/mockServer"
import './validate'
Vue.config.productionTip = false
Vue.prototype.bus=new Vue()
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  vuex
})
