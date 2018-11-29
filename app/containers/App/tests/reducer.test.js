import { fromJS } from 'immutable';

import appReducer from '../reducer';
import { loadTrends, trendsLoaded, trendsLoadingError } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      filters: fromJS({
        geos: false,
        aggs: false,
        propTypes: false,
      }),
      charts: fromJS({
        data: false,
      }),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadTrends action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['charts', 'trends'], false);

    expect(appReducer(state, loadTrends())).toEqual(expectedResult);
  });

  it('should handle the trendsLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Trend',
      },
    ];
    const expectedResult = state
      .setIn(['charts', 'trends'], fixture)
      .set('loading', false);

    expect(appReducer(state, trendsLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the trendsLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, trendsLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
