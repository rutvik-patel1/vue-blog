import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated:false
  },
  mutations: {
    SET_AUTH(state){
      state.isAuthenticated = true
    },
    RESET_AUTH(state){
      state.isAuthenticated = false
    }
  },
  actions: {

  },
  modules: {
  }
})
