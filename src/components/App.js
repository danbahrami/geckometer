import React, { Component } from "react";
import { connect } from "react-redux";
import Geckometer from "./Geckometer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Geckometer
                    min={0}
                    max={100}
                    value={57}
                />
            </div>
        );
    }
}

export default connect(state => state)(App);