import Planet from '../Planet'
import Spinner from '../Spinner'
import Pagination from '../Pagination'
import axios from 'axios'

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
    async getPlanets (page) {
      try {
        const res = await axios.get('api/planets/', { params: { page: page } })
        this.$store.commit('setPlanets', res.data.results)
      } catch (err) {
        console.error(err)
      }
    },
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
    filterBy (arr, prop) {
      return arr.filter(item => {
        return item[prop].toUpperCase()
          .includes(this.searchValue.toUpperCase())
      })
    },
    search () {
      if (this.searchValue !== '' && this.searchValue) {
        const planets = this.$store.state.planets.list
        const nameFilter = this.filterBy(planets, 'name')
        const climateFilter = this.filterBy(planets, 'climate')
        const gravityFilter = this.filterBy(planets, 'gravity')
        const rotationPeriodFilter = this.filterBy(planets, 'rotation_period')
        const allFilters = [...nameFilter, ...climateFilter, ...gravityFilter, ...rotationPeriodFilter]
        const tempPlanets = [...new Set(allFilters)]
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
    console.log(document.querySelectorAll('tbody tr td:last-child'))
  }
}
