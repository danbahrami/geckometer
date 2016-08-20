import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./redux/reducer";
import state from "./redux/state";

const store = createStore(
    reducer,
    state,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

import App from './components/App';
import "normalize.css";
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);