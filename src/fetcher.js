import axios from 'axios';
import {API_KEY, API_PATH} from "./constants";

// All of your API requests should be in this file

export const endpoint = axios.create({
    baseURL: API_PATH
});

export const api = {
    discover: {
        getFilms: () => {
            return endpoint.get(`/3/discover/movie?sort_by=popularity.desc&language=en&api_key=${API_KEY}`)
        }
    },
    genres: {
        getGenres: () => {
            return endpoint.get(`/3/genre/movie/list?language=en&api_key=${API_KEY}`)
        }
    },
    search: {
        getSearch: (query) => {
            return endpoint.get(`/3/search/movie?api_key=${API_KEY}${query}`)
        }
    }
}
