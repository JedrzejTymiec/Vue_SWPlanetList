const state = {
  list: [],
  displayList: [],
  planet: {},
  loading: true
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
  mutations
}
