import ApiHelper from '@/services/ApiHelper'

export default {
  state: {
    products: [],
  },

  mutations: {
    setProducts: (state, products) => (state.products = products)
  },

  actions: {
    async fetchProducts({ commit }) {
      const products = await ApiHelper.products()

      console.log(products)
      commit('setProducts', products)
    }
  },

  getters: {
    allProducts: state => state.products,
  }
}
