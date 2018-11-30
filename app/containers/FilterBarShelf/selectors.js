import { createSelector } from 'reselect';

const selectFilterBarShelf = state => state.get('filterBarShelf');

const makeSelectLoading = () =>
  createSelector(selectFilterBarShelf, state => state.get('loading'));

const makeSelectError = () =>
  createSelector(selectFilterBarShelf, state => state.get('error'));

const makeSelectFilters = () =>
  createSelector(selectFilterBarShelf, state => state.get('filters'));

const makeSelectPropTypes = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['filters', 'propTypes']),
  );

const makeSelectGeos = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['filters', 'geos']),
  );

const makeSelectAggs = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['filters', 'aggs']),
  );

export {
  selectFilterBarShelf,
  makeSelectLoading,
  makeSelectError,
  makeSelectFilters,
  makeSelectPropTypes,
  makeSelectAggs,
  makeSelectGeos,
};
