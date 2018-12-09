import {
  LOAD_TRENDS,
  LOAD_TRENDS_SUCCESS,
  LOAD_TRENDS_ERROR,
} from './constants';

export const loadTrends = filters => ({
  type: LOAD_TRENDS,
  filters,
});

export const trendsLoaded = trends => ({
  type: LOAD_TRENDS_SUCCESS,
  trends,
});

export const trendsLoadingError = error => ({
  type: LOAD_TRENDS_ERROR,
  error,
});
