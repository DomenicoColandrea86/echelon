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

const makeSelectIndices = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['filters', 'indices']),
  );

const makeSelectCurrentPropTypesFilter = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['current', 'propTypes']),
  );

const makeSelectCurrentIndicesFilter = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['current', 'indices']),
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
  makeSelectIndices,
  makeSelectGeos,
  makeSelectCurrentPropTypesFilter,
  makeSelectCurrentIndicesFilter,
  makeSelectCurrentGeosFilter,
};
