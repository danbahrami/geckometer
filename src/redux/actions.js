import createAction from "./actionCreator";

export const getDataStart = createAction("GET_DATA_START");
export const getDataSuccess = createAction("GET_DATA_SUCCESS");
export const getDataFailure = createAction("GET_DATA_FAILURE");

export const getData = () => {
    return (dispatch) => {
        //Tell the app we're fetching some new data
        dispatch(getDataStart());

        //Make a network request to our data source
        fetch("https://widgister.herokuapp.com/challenge/frontend")
            .then((response) => {
                //Parse the json response
                return response.json();
            })
            .then((json) => {
                //On successful request dispatch the new data
                dispatch(getDataSuccess(json));
            })
            .catch((error) => {
                //On failure dispatch the response error
                dispatch(getDataFailure(error));
            });
    };
};