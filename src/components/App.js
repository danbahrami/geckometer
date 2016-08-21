import React, { Component } from "react";
import { connect } from "react-redux";
import Geckometer from "./Geckometer";
import { getData } from "../redux/actions";
import "./App.css";

class App extends Component {
    componentDidMount() {
        this.getData();
    }

    getData() {
        const { dispatch } = this.props;

        dispatch(getData());
    }

    render() {
        const { data, error, loading } = this.props;

        return (
            <div className="App">
                {error ? (
                    <span className="App__errorMessage">
                        "Uh oh! something went wrong... but to be fair, this is just a coding test"
                    </span>
                ) : (
                    <Geckometer
                        min={data ? data.min : undefined}
                        max={data ? data.max : undefined}
                        value={data ? data.value : undefined}
                        currencyCode={data ? data.unit : undefined}
                        loading={loading}
                    />
                )}

                <button 
                    className="App__refreshButton" 
                    onClick={!loading ? this.getData.bind(this) : undefined}
                >
                    {loading ? "Fetching data..." : "Refresh data"}
                </button>
            </div>
        );
    }
}

export default connect(state => state)(App);