import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_TRENDS } from './constants';
import { trendsLoaded, trendsLoadingError } from './actions';

/**
 * RCA trends request/response handler
 */
export function* getTrends(action) {
  try {
    const requestURL = '/api/trends';
    const {
      filters: { geo, propType, indices },
    } = action;
    const queryParams = { geo, propType, indices };
    const trends = yield call(request, requestURL, { queryParams });
    yield put(trendsLoaded(trends));
  } catch (err) {
    yield put(trendsLoadingError(err));
  }
}

// Root saga
export default function* trendsData() {
  yield takeLatest(LOAD_TRENDS, getTrends);
}
