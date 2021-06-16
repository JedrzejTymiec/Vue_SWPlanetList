<template>
  <div class="list-container">
    <div class="table-container">
      <table class="planets-list">
        <thead>
          <tr class="table-head">
            <th>Name <i class="fas fa-sort" @click="sortPlanets('name', order)"></i></th>
            <th>Rotation Period<i class="fas fa-sort" @click="sortPlanets('rotation_period', order)"></i></th>
            <th>Climate <i class="fas fa-sort" @click="sortPlanets('climate', order)"></i></th>
            <th>Gravity <i class="fas fa-sort" @click="sortPlanets('gravity', order)"></i></th>
            <th>Created <i class="fas fa-sort" @click="sortPlanets('created', order)"></i></th>
          </tr>
        </thead>
        <Spinner v-if="loading" class="list-spinner" />
        <tbody v-else >
          <Planet
            :key="planet.url"
            v-for="planet in planets"
            :planet="planet"
            :getId="getId"
          />
        </tbody>
      </table>
      <Pagination :setCurrentPage="setCurrentPage" />
    </div>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
