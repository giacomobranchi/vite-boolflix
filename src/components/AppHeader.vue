<script>
import { state } from '../state.js'
export default {
    data() {
        return {
            state,
            name: 'AppHeader'
        }
    }

}
</script>
        
<template>
    <div class="background">
        <div class="container d-flex justify-content-between align-items-center">
            <img height="60" src="../assets/img/logo.png" alt="">
            <div>
                <input v-model="state.userInput" type="text">
                <button @click="state.fetchFilm(state.film_url); state.fetchSeries(state.series_url)">Cerca</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.background {
    background-color: darkslategray;
    box-shadow: 0 0 4px;

    & .container {
        padding: 1rem 0;

        & h2 {
            color: red;
        }
    }
}
</style>