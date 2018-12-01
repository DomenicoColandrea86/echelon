/* eslint-disable react/forbid-foreign-prop-types */
import { fromJS } from 'immutable';

import {
  LOAD_PROPTYPES,
  LOAD_PROPTYPES_SUCCESS,
  LOAD_PROPTYPES_ERROR,
  LOAD_AGGS,
  LOAD_AGGS_SUCCESS,
  LOAD_AGGS_ERROR,
  LOAD_GEOS,
  LOAD_GEOS_SUCCESS,
  LOAD_GEOS_ERROR,
  SET_PROPTYPES_FILTER,
  SET_AGGS_FILTER,
  SET_GEOS_FILTER,
} from './constants';

export const initialState = fromJS({
  filters: {
    geos: false,
    aggs: false,
    propTypes: false,
  },
  current: {
    geos: false,
    aggs: false,
    propTypes: false,
  },
  loading: false,
  error: false,
});

function filterBarShelfReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROPTYPES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['filters', 'propTypes'], false);
    case LOAD_PROPTYPES_SUCCESS:
      return state
        .setIn(['filters', 'propTypes'], action.propTypes)
        .set('loading', false);
    case LOAD_PROPTYPES_ERROR:
      return state.set('error', action.error).set('loading', false);
    case LOAD_AGGS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['filters', 'aggs'], false);
    case LOAD_AGGS_SUCCESS:
      return state
        .setIn(['filters', 'aggs'], action.aggs)
        .set('loading', false);
    case LOAD_AGGS_ERROR:
      return state.set('error', action.error).set('loading', false);
    case LOAD_GEOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['filters', 'geos'], false);
    case LOAD_GEOS_SUCCESS:
      return state
        .setIn(['filters', 'geos'], action.geos)
        .set('loading', false);
    case LOAD_GEOS_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SET_PROPTYPES_FILTER:
      return state.setIn(['current', 'propTypes'], action.propTypes);
    case SET_AGGS_FILTER:
      return state.setIn(['current', 'aggs'], action.aggs);
    case SET_GEOS_FILTER:
      return state.setIn(['current', 'geos'], action.geos);
    default:
      return state;
  }
}

export default filterBarShelfReducer;
