import axios from 'axios'

const state = {
  list: [],
  displayList: [],
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
    state.displayList = planets
    state.loading = false
  },

  setDisplayList: (state, planets) => {
    state.displayList = planets
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
    state.list = []
    state.displayList = []
    state.loading = true
  }
}

export default {
  state,
  actions,
  mutations
}
