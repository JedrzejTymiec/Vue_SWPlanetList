import Spinner from '../Spinner'
import axios from 'axios'

export default {
  name: 'SinglePlanet',
  components: {
    Spinner
  },
  data () {
    return {
      id: this.$route.params.id,
      citizens: [],
      films: [],
      arrLoading: true
    }
  },
  computed: {
    planet () {
      return this.$store.state.planets.planet
    },
    loading () {
      return this.$store.state.planets.loading
    },
    citizensUrls () {
      return this.$store.state.planets.planet.residents
    },
    filmsUrls () {
      return this.$store.state.planets.planet.films
    }
  },
  methods: {
    async getPlanet (planet) {
      try {
        const res = await axios.get(`/api/planets/${planet}`)
        this.$store.commit('setPlanet', res.data)
      } catch (err) {
        console.error(err)
      }
    },
    async getCitizens () {
      if (this.citizensUrls.length > 0) {
        for (let i = 0; this.citizensUrls.length > i; i++) {
          try {
            const res = await axios.get(this.citizensUrls[i])
            this.citizens.push(res.data.name)
          } catch (err) {
            console.error(err)
          }
        }
      } else {
        this.citizens.push('No known citizens')
      }
      this.arrLoading = false
    },
    async getFilms () {
      if (this.filmsUrls.length > 0) {
        for (let i = 0; this.filmsUrls.length > i; i++) {
          try {
            const res = await axios.get(this.filmsUrls[i])
            this.films.push(res.data.title)
          } catch (err) {
            console.error(err)
          }
        }
      } else {
        this.films.push('Not mentioned in any movie')
      }
      this.arrLoading = false
    }
  },
  async created () {
    this.$store.commit('clearPlanet')
    await this.getPlanet(this.id)
    this.getCitizens()
    this.getFilms()
  }
}
