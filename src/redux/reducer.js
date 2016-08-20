import createReducer from "./reducerCreator";
import state from "./state";

export default createReducer({
    "GET_DATA_START" : (state) => {
        return {
            ...state
        };
    },
    "GET_DATA_SUCCESS" : (state, data) => {
        return {
            ...state
        };
    },
    "GET_DATA_FAILURE" : (state, error) => {
        return {
            ...state
        };
    }
}, state);