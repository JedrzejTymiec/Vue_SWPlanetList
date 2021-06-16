<template>
  <div class="not-found">
    <h1>404</h1>
    <h1>Not Found</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
<style lang="sass" scoped>
.not-found
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  height: 100vh

  h1
    font-size: 5rem
    margin: 0
</style>
