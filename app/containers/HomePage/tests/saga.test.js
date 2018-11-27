/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_TRENDS } from 'containers/App/constants';
import { trendsLoaded, trendsLoadingError } from 'containers/App/actions';

import trendsData, { getTrends } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getTrends Saga', () => {
  let getTrendsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getTrendsGenerator = getTrends();

    const selectDescriptor = getTrendsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the trendsLoaded action if it requests the data successfully', () => {
    const response = [
      {
        name: 'First trend',
      },
      {
        name: 'Second trend',
      },
    ];
    const putDescriptor = getTrendsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(trendsLoaded(response)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getTrendsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(trendsLoadingError(response)));
  });
});

describe('trendsDataSaga Saga', () => {
  const trendsDataSaga = trendsData();

  it('should start task to watch for LOAD_TRENDS action', () => {
    const takeLatestDescriptor = trendsDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_TRENDS, getTrends));
  });
});
