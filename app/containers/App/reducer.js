/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_TRENDS,
  LOAD_TRENDS_SUCCESS,
  LOAD_TRENDS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    trends: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRENDS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'trends'], false);
    case LOAD_TRENDS_SUCCESS:
      return state
        .setIn(['userData', 'trends'], action.trends)
        .set('loading', false);
    case LOAD_TRENDS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
