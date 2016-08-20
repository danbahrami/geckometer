/**
 * createAction
 * 
 * Accepts an action type and returns an action creator function.
 * an action creator accepts a payload and returns an object
 * containing the action type and payload. This is just
 * syntactic sugar.
 * 
 * @param {string} type - Action type or name
 * 
 * @returns {function} an action creator
 */
const createAction = type => payload => ({ type, payload });

export default createAction;