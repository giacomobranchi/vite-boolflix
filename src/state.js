import { reactive } from 'vue'
import axios from 'axios'
export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=dd1e2153f10ecfa1cb72fcb0726e2452',
    films: [],
    userInput: '',


    fetchFilm(url) {
        axios.get(url + '&query=' + this.userInput)
            .then(response => {
                console.log(response);
                this.films = response.data.results
            })
    },

})