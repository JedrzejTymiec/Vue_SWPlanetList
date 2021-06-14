// @vue/component
import { mapActions } from 'vuex'
import Planet from '../Planet'
import Spinner from '../Spinner'

export default {
  name: 'PlanetsList',
  components: {
    Planet,
    Spinner
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions(['getPlanets'])
  },
  computed: {
    planets () {
      return this.$store.state.planets.list
    },
    loading () {
      return this.$store.state.planets.loading
    }
  },
  created () {
    this.getPlanets()
  }
}
