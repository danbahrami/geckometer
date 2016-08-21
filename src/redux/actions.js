import createAction from "./actionCreator";

export const getDataStart = createAction("GET_DATA_START");
export const getDataSuccess = createAction("GET_DATA_SUCCESS");
export const getDataFailure = createAction("GET_DATA_FAILURE");

export const getData = () => {
    return (dispatch) => {
        dispatch(getDataStart());

        //Make a network request to our data source
        fetch("https://widgister.herokuapp.com/challenge/frontend")
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                dispatch(getDataSuccess(json));
            })
            .catch((error) => {
                dispatch(getDataFailure(error));
            });
    };
};