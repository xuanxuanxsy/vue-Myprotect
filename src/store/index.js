import vuex from 'vuex'
import Vue from 'vue'
Vue.use(vuex)
const store = new vuex.Store({
  state: {
    count: 0
  }
})
export default store
