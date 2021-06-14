import { mapActions } from 'vuex'
import Spinner from '../Spinner'

export default {
  name: 'SinglePlanet',
  components: {
    Spinner
  },
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    planet () {
      return this.$store.state.planets.planet
    },
    loading () {
      return this.$store.state.planets.loading
    }
  },
  methods: {
    ...mapActions(['getPlanet', 'clearPlanet'])
  },
  created () {
    this.clearPlanet()
    this.getPlanet(this.id)
  }
}
