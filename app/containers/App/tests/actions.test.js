import {
  LOAD_TRENDS,
  LOAD_TRENDS_SUCCESS,
  LOAD_TRENDS_ERROR,
} from '../constants';

import { loadTrends, trendsLoaded, trendsLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadTrends', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_TRENDS,
      };

      expect(loadTrends()).toEqual(expectedResult);
    });
  });

  describe('trendsLoaded', () => {
    it('should return the correct type and the passed trends data', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_TRENDS_SUCCESS,
        trends: fixture,
      };

      expect(trendsLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('trendsLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_TRENDS_ERROR,
        error: fixture,
      };

      expect(trendsLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
