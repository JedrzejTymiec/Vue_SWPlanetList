<template>
  <div class="list-container">
    <Spinner v-if="loading" class="list-spinner" />
    <div v-else class="table-container">
      <table class="planets-list">
        <tr class="table-head">
          <th>Name <i class="fas fa-sort" @click="sortPlanets('name', order)"></i></th>
          <th>Rotation <i class="fas fa-sort" @click="sortPlanets('rotation_period', order)"></i></th>
          <th>Climate <i class="fas fa-sort" @click="sortPlanets('climate', order)"></i></th>
          <th>Gravity <i class="fas fa-sort" @click="sortPlanets('gravity', order)"></i></th>
          <th>Created <i class="fas fa-sort" @click="sortPlanets('created', order)"></i></th>
        </tr>
        <Planet
          :key="planet.url"
          v-for="planet in planets"
          :planet="planet"
          :getId="getId"
        />
      </table>
      <Pagination :setCurrentPage="setCurrentPage" />
    </div>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
