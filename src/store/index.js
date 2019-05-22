import vuex from 'vuex'
import Vue from 'vue'
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import home from "./modules/home"

Vue.use(vuex)

const store = new vuex.Store({
  getters,
  mutations,
  actions,
  modules:{
    home
  }
})
export default store
