import { createSelector } from 'reselect';

export const selectFilterBarShelf = state => state.get('filterBarShelf');

export const makeSelectLoading = () =>
  createSelector(selectFilterBarShelf, state => state.get('loading'));

export const makeSelectError = () =>
  createSelector(selectFilterBarShelf, state => state.get('error'));

export const makeSelectFilters = () =>
  createSelector(
    selectFilterBarShelf,
    state =>
      state.get('filters') &&
      state.get('filters').toJS instanceof Function &&
      state.get('filters').toJS(),
  );

export const makeSelectCurrentFilters = () =>
  createSelector(
    selectFilterBarShelf,
    state =>
      state.get('current') &&
      state.get('current').toJS instanceof Function &&
      state.get('current').toJS(),
  );

export const makeSelectPropTypes = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['filters', 'propTypes']),
  );

export const makeSelectGeos = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['filters', 'geos']),
  );

export const makeSelectIndices = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['filters', 'indices']),
  );

export const makeSelectCurrentGeosFilter = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['current', 'geos']),
  );

export const makeSelectCurrentPropTypesFilter = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['current', 'propTypes']),
  );

export const makeSelectCurrentIndicesFilter = () =>
  createSelector(selectFilterBarShelf, state =>
    state.getIn(['current', 'indices']),
  );
