import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/modules/user'
import products from '@/store/modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    products
  },

  state: {},

  mutations: {},

  actions: {}
})
