<template>
  <div>
    <Spinner v-if="loading" />
    <div class="planets-list">
      <Planet :key="planet.url" v-for="planet in planets" :planet="planet" />
    </div>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
