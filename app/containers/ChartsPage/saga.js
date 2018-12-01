import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_TRENDS } from './constants';
import { makeSelectCurrentPropTypesFilter } from '../FilterBarShelf/selectors';
import { trendsLoaded, trendsLoadingError } from './actions';

/**
 * RCA trends request/response handler
 */
export function* getTrends() {
  const requestURL = '/api/trends';
  try {
    const propType = yield select(makeSelectCurrentPropTypesFilter);
    const trends = yield call(request, requestURL, propType);
    yield put(trendsLoaded(trends));
  } catch (err) {
    yield put(trendsLoadingError(err));
  }
}

// Root saga
export default function* trendsData() {
  yield takeLatest(LOAD_TRENDS, getTrends);
}
