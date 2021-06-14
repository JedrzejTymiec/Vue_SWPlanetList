<template>
  <div class="single-planet">
    <Spinner v-if="loading" />
    <h1>{{planet.name}}</h1>
  </div>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
