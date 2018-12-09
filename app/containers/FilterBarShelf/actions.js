import {
  LOAD_PROPTYPES,
  LOAD_PROPTYPES_SUCCESS,
  LOAD_PROPTYPES_ERROR,
  LOAD_INDICES,
  LOAD_INDICES_SUCCESS,
  LOAD_INDICES_ERROR,
  LOAD_GEOS,
  LOAD_GEOS_SUCCESS,
  LOAD_GEOS_ERROR,
  SET_PROPTYPES_FILTER,
  SET_INDICES_FILTER,
  SET_GEOS_FILTER,
  RESET_FILTER_BAR_SHELF,
  HYDRATE_FILTER_BAR_FROM_CACHE,
} from './constants';

export const loadPropTypes = geos => ({
  type: LOAD_PROPTYPES,
  geos,
});

export const propTypesLoaded = propTypes => ({
  type: LOAD_PROPTYPES_SUCCESS,
  propTypes,
});

export const propTypesLoadingError = error => ({
  type: LOAD_PROPTYPES_ERROR,
  error,
});

export const loadIndices = propTypes => ({
  type: LOAD_INDICES,
  propTypes,
});

export const indicesLoaded = indices => ({
  type: LOAD_INDICES_SUCCESS,
  indices,
});

export const indicesLoadingError = error => ({
  type: LOAD_INDICES_ERROR,
  error,
});

export const loadGeos = () => ({
  type: LOAD_GEOS,
});

export const geosLoaded = geos => ({
  type: LOAD_GEOS_SUCCESS,
  geos,
});

export const geosLoadingError = error => ({
  type: LOAD_GEOS_ERROR,
  error,
});

export const setGeosFilter = geos => ({
  type: SET_GEOS_FILTER,
  geos,
});

export const setPropTypesFilter = propTypes => ({
  type: SET_PROPTYPES_FILTER,
  propTypes,
});

export const setIndicesFilter = indices => ({
  type: SET_INDICES_FILTER,
  indices,
});

export const resetFilterBarShelf = () => ({
  type: RESET_FILTER_BAR_SHELF,
});

export const hydrateFiltersFromCache = filters => ({
  type: HYDRATE_FILTER_BAR_FROM_CACHE,
  filters,
});
