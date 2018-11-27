import React, { lazy, Suspense } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';

const loadable = Component => props => (
  <Suspense fallback={<LoadingIndicator />}>
    <Component {...props} />
  </Suspense>
);

const HomePage = loadable(lazy(() => import('./index')));

export default () => <HomePage />;
