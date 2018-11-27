/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';

import LineBarChart from '../../../components/LineBarChart';
import { HomePage, mapDispatchToProps } from '../index';
import { loadTrends } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the trends charts', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} data={[]} />,
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
