import createAction from "./actionCreator";

export const getDataStart = createAction("GET_DATA_START");
export const getDataSuccess = createAction("GET_DATA_SUCCESS");
export const getDataFailure = createAction("GET_DATA_FAILURE");

export const getData = () => {
    return (dispatch) => {
        //Make a network request to our data source
    };
};