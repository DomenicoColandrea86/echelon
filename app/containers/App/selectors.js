/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectTrends = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['charts', 'data']),
  );

const makeSelectPropTypes = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['filters', 'propTypes']),
  );

const makeSelectGeos = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['filters', 'geos']),
  );

const makeSelectAggs = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['filters', 'aggs']),
  );

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectTrends,
  makeSelectPropTypes,
  makeSelectAggs,
  makeSelectGeos,
};
