<template>
    <tr class="planet" @click="this.onClick">
      <td>{{ planet.name }}</td>
      <td>{{ planet.rotation_period }}</td>
      <td>{{ planet.climate }}</td>
      <td>{{ planet.gravity }}</td>
      <td>{{ this.formatDate(planet.created) }}</td>
    </tr>
</template>
<script src="./component.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
