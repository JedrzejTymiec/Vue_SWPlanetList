<template>
  <div class="single-planet">
    <Spinner v-if="loading" />
    <div class="planet-container">
      <h1 class="name">{{planet.name}}</h1>
      <div class="planet-body">
        <div class="info">
          <h3>Info</h3>
          <div><p>climate: </p><p>{{planet.climate}}</p></div>
          <div><p>diameter: </p><p>{{planet.diameter}}</p></div>
          <div><p>gravity: </p><p>{{planet.gravity}}</p></div>
          <div><p>orbital_period: </p><p>{{planet.orbital_period}}</p></div>
          <div><p>population: </p><p>{{planet.population}}</p></div>
          <div><p>surface_water: </p><p>{{planet.surface_water}}</p></div>
          <div><p>terrain: </p><p>{{planet.terrain}}</p></div>
        </div>
        <div class="citizens">
          <h3>Citizens</h3>
          <Spinner v-if="arrLoading"  class="arr-spinner" />
          <div v-else class="citizens-container">
            <p :key="citizen" v-for="citizen in citizens">{{citizen}}</p>
          </div>
        </div>
        <div class="films">
          <h3>Films</h3>
          <Spinner v-if="arrLoading"  class="arr-spinner" />
          <div v-else class="films-container">
            <p :key="film" v-for="film in films">{{film}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
