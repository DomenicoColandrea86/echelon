import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TRENDS } from 'containers/App/constants';
import { trendsLoaded, trendsLoadingError } from 'containers/App/actions';
import request from 'utils/request';

/**
 * RCA trends request/response handler
 */
export function* getTrends() {
  const requestURL = '/api/trends';
  try {
    const trends = yield call(request, requestURL);
    yield put(trendsLoaded(trends));
  } catch (err) {
    yield put(trendsLoadingError(err));
  }
}

// Root saga
export default function* trendsData() {
  yield takeLatest(LOAD_TRENDS, getTrends);
}
