<template>
  <ul class="pagination">
      <li @click="setCurrentPage(1)" class="page-nr">1</li>
      <li @click="setCurrentPage(2)" class="page-nr">2</li>
      <li @click="setCurrentPage(3)" class="page-nr">3</li>
      <li @click="setCurrentPage(4)" class="page-nr">4</li>
      <li @click="setCurrentPage(5)" class="page-nr">5</li>
      <li @click="setCurrentPage(6)" class="page-nr">6</li>
  </ul>
</template>

<script src='./component.js'></script>
<style src='./style.sass' lang="sass" scoped></style>
