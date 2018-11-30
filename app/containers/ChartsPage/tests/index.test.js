import React from 'react';
import { shallow } from 'enzyme';

import LineBarChart from '../../../components/LineBarChart';
import { ChartsPage, mapDispatchToProps } from '../index';
import { loadTrends } from '../actions';

describe('<ChartsPage />', () => {
  it('should render the charts', () => {
    const renderedComponent = shallow(
      <ChartsPage loading error={false} data={[]} />,
    );
    expect(
      renderedComponent.contains(
        <LineBarChart loading={false} error={false} data={[]} />,
      ),
    ).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onLoadTrends', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoadTrends).toBeDefined();
      });

      it('should dispatch loadTrends when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onLoadTrends();
        expect(dispatch).toHaveBeenCalledWith(loadTrends());
      });
    });
  });
});
