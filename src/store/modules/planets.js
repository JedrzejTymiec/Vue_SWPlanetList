import axios from 'axios'

const state = {
  list: [],
  planet: {},
  loading: true
}

const actions = {
  async getPlanets ({ commit }, page) {
    const res = await axios.get('api/planets/', { params: { page: page } })
    commit('setPlanets', res.data.results)
  },
  // ADD TRY CATCH WITH ERROR HANDLE
  async getPlanet ({ commit }, planet) {
    const res = await axios.get(`/api/planets/${planet}`)
    commit('setPlanet', res.data)
  },

  clearPlanet ({ commit }) {
    commit('clearPlanet')
  }
}

const mutations = {
  setPlanets: (state, planets) => {
    state.list = planets
    state.loading = false
  },

  setPlanet: (state, planet) => {
    state.planet = planet
    state.loading = false
  },

  clearPlanet: (state) => {
    state.planet = {}
    state.loading = true
  },

  clearPlanets: (state) => {
    state.planets = []
    state.loading = true
  }
}

export default {
  state,
  actions,
  mutations
}
