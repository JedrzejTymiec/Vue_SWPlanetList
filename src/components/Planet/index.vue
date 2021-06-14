<template>
  <router-link :to="'/planet/' + getId(planet.url)" class="planet">
    <h1>{{ planet.name }}</h1>
    <p>rotation period: {{ planet.rotation_period }}</p>
    <p>climate: {{ planet.climate }}</p>
    <p>gravity: {{ planet.gravity }}</p>
    <p>created: {{ planet.created }}</p>
    <p>url: {{ planet.url }}</p>
  </router-link>
</template>
<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
