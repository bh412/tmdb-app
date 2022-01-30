import {combineReducers} from "redux";
import {discoverData} from "./discoverState";

const appReducer = combineReducers({
    discoverData
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};
