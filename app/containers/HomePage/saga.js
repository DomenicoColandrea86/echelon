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

/**
 * Root saga manages watcher lifecycle
 */
export default function* trendsData() {
  // Watches for LOAD_TRENDS actions and calls getTrends when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TRENDS, getTrends);
}
