<template>
  <div class="home">
    <Navbar />
    <PlanetsList />
  </div>
</template>

<script>
import PlanetsList from '@/components/PlanetsList'
import Navbar from '@/components/Navbar'

export default {
  name: 'Home',
  components: {
    PlanetsList,
    Navbar
  }
}
</script>
<style lang="sass">
.home
  background-image: url("../assets/star-wars-backgrounds-25.jpg")
  background-size: 100vw
</style>
