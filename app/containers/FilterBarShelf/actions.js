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

/**
 * Load the property types, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PROPTYPES
 */
export function loadPropTypes() {
  return {
    type: LOAD_PROPTYPES,
  };
}

/**
 * Dispatched when the trends are loaded by the request saga
 *
 * @param  {array} trends The propTypes data
 *
 * @return {object} An action object with a type of LOAD_PROPTYPES_SUCCESS passing the propTypes
 */
export function propTypesLoaded(propTypes) {
  return {
    type: LOAD_PROPTYPES_SUCCESS,
    propTypes,
  };
}

/**
 * Dispatched when loading the propTypes fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_PROPTYPES_ERROR passing the error
 */
export function propTypesLoadingError(error) {
  return {
    type: LOAD_PROPTYPES_ERROR,
    error,
  };
}

/**
 * Load the aggregations, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_AGGS
 */
export function loadAggs() {
  return {
    type: LOAD_AGGS,
  };
}

/**
 * Dispatched when the aggs are loaded by the request saga
 *
 * @param  {array} trends The aggs data
 *
 * @return {object} An action object with a type of LOAD_AGGS_SUCCESS passing the aggs
 */
export function aggsLoaded(aggs) {
  return {
    type: LOAD_AGGS_SUCCESS,
    aggs,
  };
}

/**
 * Dispatched when loading the aggs fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_AGGS_ERROR passing the error
 */
export function aggsLoadingError(error) {
  return {
    type: LOAD_AGGS_ERROR,
    error,
  };
}

/**
 * Load the geographies, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_GEOS
 */
export function loadGeos() {
  return {
    type: LOAD_GEOS,
  };
}

/**
 * Dispatched when the geos are loaded by the request saga
 *
 * @param  {array} trends The geos data
 *
 * @return {object} An action object with a type of LOAD_GEOS_SUCCESS passing the geos
 */
export function geosLoaded(geos) {
  return {
    type: LOAD_GEOS_SUCCESS,
    geos,
  };
}

/**
 * Dispatched when loading the geos fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_GEOS_ERROR passing the error
 */
export function geosLoadingError(error) {
  return {
    type: LOAD_GEOS_ERROR,
    error,
  };
}

/**
 * Set the geos filter
 *
 * @return {object} An action object with a type of SET_GEOS_FILTER
 */
export function setGeosFilter(geos) {
  return {
    type: SET_GEOS_FILTER,
    geos,
  };
}

/**
 * Set the property type filter
 *
 * @return {object} An action object with a type of SET_PROPTYPES_FILTER
 */
export function setPropTypesFilter(propTypes) {
  return {
    type: SET_PROPTYPES_FILTER,
    propTypes,
  };
}

/**
 * Set the aggregation type filter
 *
 * @return {object} An action object with a type of SET_AGGS_FILTER
 */
export function setAggsFilter(aggs) {
  return {
    type: SET_AGGS_FILTER,
    aggs,
  };
}
