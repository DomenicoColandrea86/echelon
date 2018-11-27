/* eslint-disable consistent-return */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectTrends,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import LineBarChart from 'components/LineBarChart/Loadable';
import Section from './Section';
import { loadTrends } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import Button from '../../components/Button';
import LoadingIndicator from '../../components/LoadingIndicator';

export class HomePage extends React.PureComponent {
  render() {
    const { loading, error, trends } = this.props;
    return (
      <>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Trend Tracker" />
        </Helmet>
        <Section>
          {!trends && (
            <Button onClick={this.props.onLoadTrends}>Load Trends</Button>
          )}
          {(() => {
            if (loading !== false) {
              return <LoadingIndicator />;
            }
            if (error !== false) {
              return <>{error}</>;
            }
            if (trends !== false) {
              return <LineBarChart data={trends} />;
            }
          })()}
        </Section>
      </>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  trends: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadTrends: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadTrends: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadTrends());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  trends: makeSelectTrends(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
