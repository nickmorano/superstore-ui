import axios from 'axios'
import Vue from "vue"
import ApiHelper from '@/services/ApiHelper'

export default {
  state: {
    regions: [],
    listRegions: [],
    request: null,
  },

  getters: {
    regions: (state) =>  state.listRegions,
    regionsRequest: (state) => state.request,
  },

  actions: {
    getRegions(context) {
      if (context.state.request) {
        context.state.request.cancel()
        context.commit("setRegionsRequest", null)
      }

      const request = axios.CancelToken.source()
      context.commit("setRegionsRequest", request)

      ApiHelper.regions
        .then(response => {
          const regions = response.data.regions

          context.commit("setRegions", { regions })
        }).finally(() => {
          context.commit("setRegionsRequest", null)
        })
    }
  },

  mutations: {
    setRegions(state, { regions }) {
      Vue.set(state, "listRegions", regions)
    },
    setRegionsRequest(state, request) {
      Vue.set(state, "request", request)
    },
  }
}
