import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import GetStarted from 'components/GetStarted';
import LoadingIndicator from 'components/LoadingIndicator';
import LineBarChart from 'components/LineBarChart/Loadable';
import saga from './saga';
import reducer from './reducer';
import { Wrapper } from './styled';
import { makeSelectTrends, makeSelectLoading } from './selectors';

export class ChartsPage extends React.PureComponent {
  render() {
    const { loading, trends } = this.props;
    return (
      <>
        <Helmet>
          <title>Charts</title>
          <meta name="description" content="Trends" />
        </Helmet>
        <Wrapper>
          {loading && <LoadingIndicator />}
          {!loading && !trends.length && <GetStarted />}
          {trends.length && <LineBarChart data={trends} />}
        </Wrapper>
      </>
    );
  }
}

ChartsPage.propTypes = {
  loading: PropTypes.bool,
  trends: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  trends: makeSelectTrends(),
  loading: makeSelectLoading(),
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'charts', reducer });
const withSaga = injectSaga({ key: 'charts', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ChartsPage);
