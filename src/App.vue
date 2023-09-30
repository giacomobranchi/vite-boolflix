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
  <button @click="state.fetchFilm(state.film_url); state.fetchSeries(state.series_url)">Cerca</button>
  <ol>
    <li v-for="film in  state.films ">
      <ul>
        <li v-if="film.title">{{ film.title }}</li>
        <li v-else>{{ film.name }}</li>
        <li v-if="film.original_title">{{ film.original_title }}</li>
        <li v-else>{{ film.original_name }}</li>
        <li>{{ film.vote_average }}</li>
        <li><img :src="state.imgUrl + film.poster_path" alt=""></li>
        <li>
          <img :src="'https://flagcdn.com/16x12/' + `${film.original_language}` + '.png'" srcset="https://flagcdn.com/32x24/af.png 2x,
          https://flagcdn.com/48x36/af.png 3x" width="16" height="12" :alt="film.original_language">
        </li>
      </ul>

    </li>
  </ol>
</template>

<style scoped>
li {
  padding: 1rem 0;
}
</style>
