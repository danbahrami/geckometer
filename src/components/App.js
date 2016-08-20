import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../redux/reducer";
import state from "../redux/state";

const store = createStore(
    reducer,
    state,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    Hey
                </div>
            </Provider>
        );
    }
}

export default App;