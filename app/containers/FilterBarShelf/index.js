/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectGeos,
  makeSelectAggs,
  makeSelectPropTypes,
} from 'containers/App/selectors';

import { loadPropTypes, loadAggs, loadGeos } from './actions';
import reducer from './reducer';
import saga from './saga';
import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar/Sidebar';

export class FilterBarShelf extends React.PureComponent {
  render() {
    const {
      isFolded,
      propTypes,
      aggs,
      geos,
      onLoadAggs,
      onLoadGeos,
      onLoadPropTypes,
    } = this.props;
    return (
      <>
        <Sidebar isFolded={isFolded}>
          {!geos && <Button onClick={onLoadGeos}>Load Geos</Button>}
          {!propTypes && (
            <Button onClick={onLoadPropTypes}>Load Property Types</Button>
          )}
          {!aggs && <Button onClick={onLoadAggs}>Load Aggs</Button>}
        </Sidebar>
      </>
    );
  }
}

FilterBarShelf.propTypes = {
  isFolded: PropTypes.bool,
  geos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  aggs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  propTypes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadGeos: PropTypes.func,
  onLoadAggs: PropTypes.func,
  onLoadPropTypes: PropTypes.func,
};

export const mapDispatchToProps = dispatch => ({
  onLoadPropTypes: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadPropTypes());
  },
  onLoadAggs: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadAggs());
  },
  onLoadGeos: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadGeos());
  },
});

const mapStateToProps = createStructuredSelector({
  geos: makeSelectGeos(),
  aggs: makeSelectAggs(),
  propTypes: makeSelectPropTypes(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'filterBarShelf', reducer });
const withSaga = injectSaga({ key: 'filterBarShelf', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FilterBarShelf);
