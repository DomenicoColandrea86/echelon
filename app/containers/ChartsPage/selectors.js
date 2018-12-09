import { createSelector } from 'reselect';

export const selectCharts = state => state.get('charts');

export const selectRouter = state => state.get('router');

export const makeSelectLoading = () =>
  createSelector(selectCharts, state => state.get('loading'));

export const makeSelectError = () =>
  createSelector(selectCharts, state => state.get('error'));

export const makeSelectTrends = () =>
  createSelector(selectCharts, state => state.get('data'));

export const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );
