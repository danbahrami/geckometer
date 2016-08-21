import React from "react";
import { expect } from "chai";
import mock from "../mock";
import reducer from "../../src/redux/reducer";
import state from "../../src/redux/state";
import * as actions from "../../src/redux/actions";

describe("Redux Reducer", () => {
    /*
     * It should set loading state to true on page load
     */
    it("sets loading state correctly on page load", () => {
        const newState = reducer(undefined, {});

        expect(newState.loading).to.equal(true);
    });

    /*
     * It should set loading state correctly on getData: start, success and failure
     */
    it("sets loading state correctly on getData: start, success and failure", () => {
        const startState = reducer({
            ...state,
            loading : false
        }, actions.getDataStart());
        
        const endState = reducer(startState, actions.getDataSuccess(mock.data));
        const failureState = reducer(startState, actions.getDataFailure(mock.error));

        expect(startState.loading).to.equal(true);
        expect(endState.loading).to.equal(false);
        expect(failureState.loading).to.equal(false);
    });
});