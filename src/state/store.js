import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

const composeEnhancers = compose;

export const middleware = [
    thunk
];

const storeFactory = (initialState) => {

    // Necessary for using more complex actions / reducers
    const enhancer = composeEnhancers(
        applyMiddleware(...middleware)
    );

    return enhancer(createStore)(
        rootReducer,
        initialState
    );
};

export const store = storeFactory({discoverData: null});
