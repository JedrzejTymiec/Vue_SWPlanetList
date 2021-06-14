export default {
  name: 'Planet',
  props: {
    planet: Object,
    getId: Function
  },
  methods: {
    onClick () {
      this.$router.push({ name: 'SinglePlanet', params: { id: this.getId(this.planet.url) } })
    }
  }
}
