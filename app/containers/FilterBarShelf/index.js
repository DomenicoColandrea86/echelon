/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import rem from 'utils/rem';
import { bodyFont } from 'utils/fonts';
import { charcoal } from 'utils/colors';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { Tabs, Icon } from 'antd';

import {
  makeSelectGeos,
  makeSelectAggs,
  makeSelectPropTypes,
} from './selectors';

import { loadPropTypes, loadAggs, loadGeos } from './actions';
import reducer from './reducer';
import saga from './saga';
import Sidebar from '../../components/Sidebar/Sidebar';

const { TabPane } = Tabs;

const Shelf = styled.section`
  padding: 10px;
`;

const StyledIcon = styled(Icon)`
  color: white;
  font-size: 30px;
`;

export const Title = styled.h1`
  display: block;
  text-align: left;
  width: 100%;
  color: ${charcoal};
  font-size: ${rem(14)};
  font-family: ${bodyFont};
`;

export class FilterBarShelf extends React.PureComponent {
  componentDidMount() {
    this.props.onLoadGeos();
    this.props.onLoadAggs();
    this.props.onLoadPropTypes();
  }

  render() {
    const { isFolded, propTypes, aggs, geos } = this.props;
    console.log(geos, propTypes, aggs);

    return (
      <>
        <Sidebar isFolded={isFolded}>
          <div>
            <Tabs tabPosition="left">
              <TabPane tab={<StyledIcon type="global" />} key="1">
                <Shelf>
                  <Title>Select a Geography</Title>
                  <p>
                    Considering thought leadership and possibly think outside
                    the box. Engage growth hacking with a goal to re-target key
                    demographics. Engage below the fold while remembering to
                    make users into advocates.
                  </p>
                </Shelf>
              </TabPane>
              <TabPane tab={<StyledIcon type="bank" />} key="2">
                <Shelf>
                  <Title>Select a Properety Type</Title>
                  <p>
                    Drive brand ambassadors so that as an end result, we target
                    the low hanging fruit. Generating branding to, consequently,
                    get buy in. Leveraging audience segments while remembering
                    to be CMSable.
                  </p>
                </Shelf>
              </TabPane>
              <TabPane tab={<StyledIcon type="audit" />} key="3">
                <Shelf>
                  <Title>Select a Dataset</Title>
                  <p>
                    Generate outside the box thinking with the possibility to
                    create synergy. Demonstrating sprints with a goal to further
                    your reach. Targeting brand pillars with the aim to further
                    your reach. Leverage vertical integration and possibly make
                    users into advocates.
                  </p>
                </Shelf>
              </TabPane>
            </Tabs>
          </div>
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
