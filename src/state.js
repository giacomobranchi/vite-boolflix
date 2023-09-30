import { reactive } from 'vue'
import axios from 'axios'
export const state = reactive({
    film_url: 'https://api.themoviedb.org/3/search/movie?api_key=dd1e2153f10ecfa1cb72fcb0726e2452',
    series_url: 'https://api.themoviedb.org/3/search/tv?api_key=dd1e2153f10ecfa1cb72fcb0726e2452',
    films: [],
    userInput: '',
    imgUrl: 'https://image.tmdb.org/t/p/w342/',
    filmPosters: [],



    fetchFilm(url) {
        this.films = []
        axios.get(url + '&query=' + this.userInput)
            .then(response => {
                //console.log(response);
                this.films.push(...response.data.results)
                console.log(this.films);
            })
    },
    fetchSeries(url) {
        axios.get(url + '&query=' + this.userInput)
            .then(response => {
                //console.log(response);
                this.films.push(...response.data.results)
                console.log(this.films)
            })
    },
    fetchImg(url) {
        axios.get(this.imgUrl + url)
            .then(response => {
                //console.log(response);
                this.filmPosters = response.data.results.poster_path

            })
    },

})