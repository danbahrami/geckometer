import createReducer from "./reducerCreator";
import state from "./state";

export default createReducer({
    "GET_DATA_START"   : (state) => {
        return {
            ...state,
            data    : null,
            error   : null,
            loading : true
        };
    },
    "GET_DATA_SUCCESS" : (state, data) => {
        return {
            ...state,
            data,
            loading : false
        };
    },
    "GET_DATA_FAILURE" : (state, error) => {
        return {
            ...state,
            error,
            loading : false
        };
    }
}, state);