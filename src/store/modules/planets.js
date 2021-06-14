import axios from 'axios'

const state = {
  list: [],
  loading: true
}

const actions = {
  async getPlanets ({ commit }) {
    const res = await axios.get('/api/planets')
    commit('setPlanets', res.data.results)
  }
}

const mutations = {
  setPlanets: (state, planets) => {
    state.list = planets
    state.loading = false
  }
}

export default {
  state,
  actions,
  mutations
}
