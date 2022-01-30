import {ACTION_TYPE} from "../../constants";

export const genreData = (genreData = null, action) => {
    if (action?.type) {
        switch (action.type) {
            case ACTION_TYPE.GENRES_RESPONSE_SUCCESS:
                return action.genreData && {...genreData, ...action.genreData}
            default:
                return genreData;
        }
    } else {
        return genreData;
    }
}
