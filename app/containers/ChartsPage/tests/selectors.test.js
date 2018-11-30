import { fromJS } from 'immutable';
import {
  selectCharts,
  makeSelectLoading,
  makeSelectError,
  makeSelectTrends,
  makeSelectLocation,
} from '../selectors';

describe('selectCharts', () => {
  it('should select the charts state', () => {
    const chartsState = fromJS({
      charts: {},
    });
    const mockedState = fromJS({
      charts: chartsState,
    });
    expect(selectCharts(mockedState)).toEqual(chartsState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      charts: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      charts: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectTrends', () => {
  const trendsSelector = makeSelectTrends();
  it('should select the trends', () => {
    const data = fromJS([]);
    const mockedState = fromJS({
      charts: {
        data,
      },
    });
    expect(trendsSelector(mockedState)).toEqual(data);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const mockedState = fromJS({
      router: { location: { pathname: '/foo' } },
    });
    expect(locationStateSelector(mockedState)).toEqual(
      mockedState.getIn(['router', 'location']).toJS(),
    );
  });
});
