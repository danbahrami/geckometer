/**
 * createReducer,
 *
 * Accepts an object that maps action types to reducer functions
 * and returns a reducer. This is just syntactic sugar for
 * creating reducers.
 *
 * @param {object} handlers - An object that maps action types to reducer functions
 * @param initialState - The initial state that the reducer will be kickstarted with
 * 
 * @returns {function} Our reducer
 */
const createReducer = (handlers = {}, initialState) => {
    return (state = initialState, action) => {
        return (action && handlers[action.type])
            ? handlers[action.type](state, action.payload)
            : state;
    };
};

export default createReducer;