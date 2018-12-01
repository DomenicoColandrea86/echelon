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

const makeSelectCurrentPropTypesFilter = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['current', 'propTypes']),
  );

const makeSelectCurrentAggsFilter = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['current', 'aggs']),
  );

const makeSelectCurrentGeosFilter = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['current', 'geos']),
  );

export {
  selectFilterBarShelf,
  makeSelectLoading,
  makeSelectError,
  makeSelectFilters,
  makeSelectPropTypes,
  makeSelectAggs,
  makeSelectGeos,
  makeSelectCurrentPropTypesFilter,
  makeSelectCurrentAggsFilter,
  makeSelectCurrentGeosFilter,
};
