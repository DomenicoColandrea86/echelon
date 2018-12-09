/* eslint-disable react/forbid-foreign-prop-types */
import { call, put, takeLatest, select, all } from 'redux-saga/effects';
import request from 'utils/request';
import {
  propTypesLoaded,
  propTypesLoadingError,
  indicesLoaded,
  indicesLoadingError,
  geosLoaded,
  geosLoadingError,
} from './actions';
import { loadTrends, trendsLoadingError } from '../ChartsPage/actions';
import {
  makeSelectCurrentGeosFilter,
  makeSelectCurrentPropTypesFilter,
  makeSelectCurrentIndicesFilter,
} from './selectors';
import {
  LOAD_PROPTYPES,
  LOAD_INDICES,
  LOAD_GEOS,
  SET_GEOS_FILTER,
  SET_PROPTYPES_FILTER,
  SET_INDICES_FILTER,
} from './constants';

export function* getPropTypes(action) {
  try {
    const { geos } = action;
    const queryParams = { geos };
    const requestURL = '/api/propTypes';
    const propTypes = yield call(request, requestURL, { queryParams });
    yield put(propTypesLoaded(propTypes));
  } catch (err) {
    yield put(propTypesLoadingError(err));
  }
}

export function* getIndices(action) {
  try {
    const { propTypes } = action;
    const queryParams = { propTypes };
    const requestURL = '/api/indices';
    const indices = yield call(request, requestURL, { queryParams });
    yield put(indicesLoaded(indices));
  } catch (err) {
    yield put(indicesLoadingError(err));
  }
}

export function* getGeos() {
  try {
    const requestURL = '/api/geos';
    const geos = yield call(request, requestURL);
    yield put(geosLoaded(geos));
  } catch (err) {
    yield put(geosLoadingError(err));
  }
}

export function* asyncFilterChangeHandler() {
  try {
    const [geo, propType, indices] = yield all([
      select(makeSelectCurrentGeosFilter()),
      select(makeSelectCurrentPropTypesFilter()),
      select(makeSelectCurrentIndicesFilter()),
    ]);
    if (geo !== false && propType !== false && indices !== false) {
      yield put(loadTrends({ geo, propType, indices }));
    }
  } catch (err) {
    yield put(trendsLoadingError(err));
  }
}

// Root saga
export default function* asyncFilterBarShelf() {
  yield all([
    takeLatest(LOAD_GEOS, getGeos),
    takeLatest(LOAD_PROPTYPES, getPropTypes),
    takeLatest(LOAD_INDICES, getIndices),
    takeLatest(
      [SET_GEOS_FILTER, SET_PROPTYPES_FILTER, SET_INDICES_FILTER],
      asyncFilterChangeHandler,
    ),
  ]);
}
