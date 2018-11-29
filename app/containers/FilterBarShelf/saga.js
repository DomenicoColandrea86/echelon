import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  propTypesLoaded,
  propTypesLoadingError,
  aggsLoaded,
  aggsLoadingError,
  geosLoaded,
  geosLoadingError,
} from './actions';
import { LOAD_PROPTYPES, LOAD_AGGS, LOAD_GEOS } from './constants';

/**
 * RCA propTypes request/response handler
 */
export function* getPropTypes() {
  const requestURL = '/api/propTypes';
  try {
    const propTypes = yield call(request, requestURL);
    yield put(propTypesLoaded(propTypes));
  } catch (err) {
    yield put(propTypesLoadingError(err));
  }
}

/**
 * RCA aggs request/response handler
 */
export function* getAggs() {
  const requestURL = '/api/aggs';
  try {
    const aggs = yield call(request, requestURL);
    yield put(aggsLoaded(aggs));
  } catch (err) {
    yield put(aggsLoadingError(err));
  }
}

/**
 * RCA Geos request/response handler
 */
export function* getGeos() {
  const requestURL = '/api/geos';
  try {
    const aggs = yield call(request, requestURL);
    yield put(geosLoaded(aggs));
  } catch (err) {
    yield put(geosLoadingError(err));
  }
}

// Root saga
export default function* asyncFilterData() {
  // if necessary, start multiple sagas at once with `all`
  yield [
    takeLatest(LOAD_GEOS, getGeos),
    takeLatest(LOAD_PROPTYPES, getPropTypes),
    takeLatest(LOAD_AGGS, getAggs),
  ];
}
