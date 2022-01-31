import {ACTION_TYPE} from "../../constants";

export const discoverData = (discoverData = null, action) => {
    if (action?.type) {
        switch (action.type) {
            case ACTION_TYPE.DISCOVER_FILMS_RESPONSE_SUCCESS:
                return action.discoverData && {...discoverData, ...action.discoverData}
            case ACTION_TYPE.SEARCH_RESPONSE_SUCCESS:
                return action.discoverData && {...discoverData, ...action.discoverData}
            default:
                return discoverData;
        }
    } else {
        return discoverData;
    }
}
