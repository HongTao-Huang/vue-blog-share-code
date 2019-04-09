import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import blog from './modules/blog'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    blog,
    auth
  },
  mutations: {
    increment (state) {
    }
  }
})
