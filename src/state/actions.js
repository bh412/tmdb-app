import {api} from "../fetcher";
import {ACTION_TYPE} from "../constants"

export const fetchDiscoveryResults = (page) => async (dispatch) => {
    dispatch({type: ACTION_TYPE.DISCOVER_FILMS_REQUEST});
    try {
        const response = await api.discover.getFilms(page);
        dispatch({type: ACTION_TYPE.DISCOVER_FILMS_RESPONSE_SUCCESS, discoverData: response.data.results});
    } catch(e) {
        dispatch({type: ACTION_TYPE.DISCOVER_FILMS_RESPONSE_FAILURE});
        console.log(e);
    }
}
