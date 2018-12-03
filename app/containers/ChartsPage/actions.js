import {
  LOAD_TRENDS,
  LOAD_TRENDS_SUCCESS,
  LOAD_TRENDS_ERROR,
} from './constants';

/**
 * Load the trends, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_TRENDS
 */
export function loadTrends(filters) {
  return {
    type: LOAD_TRENDS,
    filters,
  };
}

/**
 * Dispatched when the trends are loaded by the request saga
 *
 * @param  {array} trends The trends data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_TRENDS_SUCCESS passing the trends
 */
export function trendsLoaded(trends) {
  return {
    type: LOAD_TRENDS_SUCCESS,
    trends,
  };
}

/**
 * Dispatched when loading the trends fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_TRENDS_ERROR passing the error
 */
export function trendsLoadingError(error) {
  return {
    type: LOAD_TRENDS_ERROR,
    error,
  };
}
