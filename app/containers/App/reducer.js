/* eslint-disable react/forbid-foreign-prop-types */
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
  charts: {
    data: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRENDS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['charts', 'data'], false);
    case LOAD_TRENDS_SUCCESS:
      return state
        .setIn(['charts', 'data'], action.trends)
        .set('loading', false);
    case LOAD_TRENDS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
