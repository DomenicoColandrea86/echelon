/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

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
export function loadTrends() {
  return {
    type: LOAD_TRENDS,
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
