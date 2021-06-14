<template>
  <div class="list-container">
    <Spinner v-if="loading" class="list-spinner" />
    <table class="planets-list">
      <tr class="table-head">
        <th>Name <i class="fas fa-sort"></i></th>
        <th>Rotation <i class="fas fa-sort"></i></th>
        <th>Climate <i class="fas fa-sort"></i></th>
        <th>Gravity <i class="fas fa-sort"></i></th>
        <th>Created <i class="fas fa-sort"></i></th>
      </tr>
      <Planet
        :key="planet.url"
        v-for="planet in planets"
        :planet="planet"
        :getId="getId"
      />
    </table>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
