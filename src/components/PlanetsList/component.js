// @vue/component
import { mapActions } from 'vuex'
import Planet from '../Planet'

export default {
  name: 'PlanetsList',
  components: {
    Planet
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
    }
  },
  created () {
    this.getPlanets()
  }
}
