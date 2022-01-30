import {api} from "../fetcher";
import {ACTION_TYPE} from "../constants"

export const fetchDiscoveryResults = () => async (dispatch) => {
    dispatch({type: ACTION_TYPE.DISCOVER_FILMS_REQUEST});
    try {
        const response = await api.discover.getFilms();
        dispatch({type: ACTION_TYPE.DISCOVER_FILMS_RESPONSE_SUCCESS, discoverData: response.data.results});
    } catch(e) {
        dispatch({type: ACTION_TYPE.DISCOVER_FILMS_RESPONSE_FAILURE});
        console.log(e);
    }
}

export const fetchGenres = () => async (dispatch) => {
    dispatch({type: ACTION_TYPE.GENRES_REQUEST});
    try {
        const response = await api.genres.getGenres();
        dispatch({type: ACTION_TYPE.GENRES_RESPONSE_SUCCESS, genreData: response.data.genres});
    } catch(e) {
        dispatch({type: ACTION_TYPE.GENRES_RESPONSE_FAILURE});
        console.log(e);
    }
}
