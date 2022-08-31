import Cookies from 'js-cookie'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: Cookies.get('isAuthenticated')||false
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
     logout({commit}){
        commit('RESET_AUTH')
        Cookies.remove('idToken')
        Cookies.remove('refreshToken')
        Cookies.remove('isAuthenticated')
     }
  },
  modules: {
  }
})
