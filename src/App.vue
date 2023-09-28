<script>
import { state } from './state'
export default {
  data() {
    return {
      state
    }
  }
}
</script>

<template>
  <input v-model="state.userInput" type="text">
  <button @click="state.fetchFilm(state.base_url)">Cerca</button>
  <ol>
    <li v-for="film in state.films">
      <ul>
        <li>{{ film.title }}</li>
        <li>{{ film.original_title }}</li>
        <li>{{ film.vote_average }}</li>
        <li>{{ film.original_language }}</li>
      </ul>

    </li>
  </ol>
</template>

<style scoped>
li {
  padding: 1rem 0;
}
</style>
