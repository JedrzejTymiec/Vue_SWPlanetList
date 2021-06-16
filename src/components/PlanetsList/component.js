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
      currentPage: 1
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
      this.$store.commit('setPlanets', planets)
    },
    async setCurrentPage (page) {
      this.currentPage = page
      this.$store.commit('clearPlanets')
      await this.getPlanets(page)
      window.scrollTo(0, 0)
    }
  },
  computed: {
    planets () {
      return this.$store.state.planets.list
    },
    loading () {
      return this.$store.state.planets.loading
    }
  },
  async created () {
    await this.getPlanets(this.currentPage)
  }
}
