import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from "react-redux";
import {store} from "./state/store";

ReactDOM.render(
    // StrictMode for dev best practice
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

