import ApiHelper from '@/services/ApiHelper'

export default {
  state: {
    users: [],
  },

  mutations: {
    setUsers: (state, users) => (state.users = users)
  },

  actions: {
    async fetchUsers({ commit }) {
      const users = await ApiHelper.users()

      console.log(users)
      commit('setUsers', users)
    }
  },

  getters: {
    allUsers: state => state.users,
  }
}
