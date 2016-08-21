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

        const successState = reducer(startState, actions.getDataSuccess(mock.data));
        const failureState = reducer(startState, actions.getDataFailure(mock.error));

        expect(startState.loading).to.equal(true);
        expect(successState.loading).to.equal(false);
        expect(failureState.loading).to.equal(false);
    });

    /*
     * It should clear and set data state on getData: start and success
     */
    it("clears and sets data state on getData: start and success", () => {
        const startState = reducer({
            ...state,
            data : mock.data
        }, actions.getDataStart());

        const successState = reducer(startState, actions.getDataSuccess(mock.data));

        expect(startState.data).to.be.null;
        expect(successState.data).to.deep.equal(mock.data);
    });


    /*
     * It should set and clear and set error state on getData: start and failure
     */
    it("clears and sets error state on getDate: start and failure", () => {
        const startState = reducer({
            ...state,
            error : mock.error
        }, actions.getDataStart());

        const failureState = reducer(startState, actions.getDataFailure(mock.error));

        expect(startState.error).to.be.null;
        expect(failureState.error).to.equal(mock.error);
    });
});