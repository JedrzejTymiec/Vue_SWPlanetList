<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="sass" scoped>
body
  margin: 0;

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $main-color
  margin: 0
  min-height: 100vh
  background-image: url('./assets/star-wars-backgrounds-25.jpg')
  background-size: 100vw
  background-attachment: fixed
</style>
