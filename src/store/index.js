import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/modules/user'
import regions from '@/store/modules/regions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    regions
  },

  state: {},

  mutations: {},

  actions: {}
})
