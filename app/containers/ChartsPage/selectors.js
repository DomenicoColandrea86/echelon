import { createSelector } from 'reselect';

const selectCharts = state => state.get('charts');

const selectRouter = state => state.get('router');

const makeSelectLoading = () =>
  createSelector(selectCharts, state => state.get('loading'));

const makeSelectError = () =>
  createSelector(selectCharts, state => state.get('error'));

const makeSelectTrends = () =>
  createSelector(selectCharts, state => state.get('data'));

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export {
  selectCharts,
  selectRouter,
  makeSelectLoading,
  makeSelectError,
  makeSelectTrends,
  makeSelectLocation,
};
