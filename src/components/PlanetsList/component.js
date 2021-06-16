// @vue/component
import { mapActions, mapMutations } from 'vuex'
import Planet from '../Planet'
import Spinner from '../Spinner'
import Pagination from '../Pagination'

export default {
  name: 'PlanetsList',
  components: {
    Planet,
    Spinner,
    Pagination
  },
  data () {
    return {
      order: 1,
      currentPage: 1,
      searchValue: ''
    }
  },
  methods: {
    ...mapActions(['getPlanets']),
    ...mapMutations(['setPlanets']),
    getId (url) {
      return url.split('/')[5]
    },
    sortPlanets (sortKey, order) {
      const planets = JSON.parse(JSON.stringify(this.$store.state.planets.list))
      planets.sort((a, b) =>
        (a[sortKey] > b[sortKey]
          ? (1 * order)
          : a[sortKey] === b[sortKey]
            ? 0 : (-1 * order)))
      this.order = this.order === 1 ? -1 : 1
      this.$store.commit('setDisplayList', planets)
    },
    async setCurrentPage (page) {
      this.currentPage = page
      this.$store.commit('clearPlanets')
      await this.getPlanets(page)
      window.scrollTo(0, 0)
    },
    search () {
      if (this.searchValue !== '' && this.searchValue) {
        let tempPlanets = this.$store.state.planets.list
        console.log(tempPlanets)
        tempPlanets = tempPlanets.filter(planet => {
          return planet.name.toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
        console.log(tempPlanets)
        this.$store.commit('setDisplayList', tempPlanets)
      } else {
        this.$store.commit('setDisplayList', this.$store.state.planets.list)
      }
    }
  },
  computed: {
    planets () {
      return this.$store.state.planets.displayList
    },
    loading () {
      return this.$store.state.planets.loading
    }
  },
  async created () {
    await this.getPlanets(this.currentPage)
  }
}
