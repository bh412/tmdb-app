import {combineReducers} from "redux";
import {discoverData} from "./discoverState";
import {genreData} from "./genreState";

const appReducer = combineReducers({
    discoverData,
    genreData
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};
