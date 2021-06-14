<template>
  <div class="PlanetsList">
     <Planet :key="planet.url" v-for="planet in planets" :planet="planet"/>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
