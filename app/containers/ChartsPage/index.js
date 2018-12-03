/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import LineBarChart from 'components/LineBarChart/Loadable';
import {
  makeSelectTrends,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoadingIndicator from '../../components/LoadingIndicator';

const Section = styled.section`
  margin: 3em auto;

  &:first-child {
    margin-top: 0;
  }
`;

export class ChartsPage extends React.PureComponent {
  render() {
    const { loading, error, trends } = this.props;
    return (
      <>
        <Helmet>
          <title>Charts</title>
          <meta name="description" content="Trends" />
        </Helmet>
        <Section>
          {(() => {
            if (loading !== false) {
              return <LoadingIndicator />;
            }
            if (error !== false) {
              return <>{error || 'Oops! There was an error. '}</>;
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

ChartsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  trends: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  trends: makeSelectTrends(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

const withReducer = injectReducer({ key: 'charts', reducer });
const withSaga = injectSaga({ key: 'charts', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ChartsPage);
