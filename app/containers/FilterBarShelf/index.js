/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { uid } from 'react-uid';
import styled from 'styled-components';
import rem from 'utils/rem';
import { bodyFont } from 'utils/fonts';
import { charcoal } from 'utils/colors';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { Tabs, Icon, Checkbox } from 'antd';

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
  padding: 10px 4px;
`;

const ScrollableTabPane = styled(TabPane)`
  height: auto;
  overflow: scroll !important;
`;

const StyledIcon = styled(Icon)`
  color: white;
  font-size: 22px;
`;

export const Title = styled.h1`
  display: block;
  text-align: left;
  width: 100%;
  color: ${charcoal};
  font-size: ${rem(14)};
  font-family: ${bodyFont};
`;

export const PropTypeItem = styled.div`
  display: block;
  position: relative;
  padding: 2px 0px;
`;

export const PropTypeSubItem = styled(PropTypeItem)`
  margin-left: 20px;
`;

export const Label = styled.span`
  font-size: 10px;
`;

export class FilterBarShelf extends React.PureComponent {
  componentDidMount() {
    this.props.onLoadGeos();
    this.props.onLoadAggs();
    this.props.onLoadPropTypes();
  }

  onCheckboxChange = e => {
    console.log(`checked = ${e.target.checked}, ${JSON.stringify(e.target)}`);
  };

  render() {
    const { onCheckboxChange } = this;
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
                  <div>
                    {propTypes &&
                      propTypes.map(
                        propType =>
                          propType.indent !== 0 ? (
                            <PropTypeSubItem>
                              <Checkbox
                                onChange={onCheckboxChange}
                                key={uid(propType)}
                              >
                                <Label>{propType.box3}</Label>
                              </Checkbox>
                            </PropTypeSubItem>
                          ) : (
                            <PropTypeItem>
                              <Checkbox
                                onChange={onCheckboxChange}
                                key={uid(propType)}
                              >
                                <Label>{propType.box3}</Label>
                              </Checkbox>
                            </PropTypeItem>
                          ),
                      )}
                  </div>
                </Shelf>
              </TabPane>
              <ScrollableTabPane tab={<StyledIcon type="audit" />} key="3">
                <Shelf>
                  <Title>Select a Dataset</Title>
                  <div>
                    {aggs &&
                      aggs.map(propType => (
                        <PropTypeItem>
                          <Checkbox
                            onChange={onCheckboxChange}
                            key={uid(propType)}
                          >
                            <Label>{propType.box1}</Label>
                          </Checkbox>
                        </PropTypeItem>
                      ))}
                  </div>
                </Shelf>
              </ScrollableTabPane>
              <TabPane tab={<StyledIcon type="line-chart" />} key="4">
                <Shelf>
                  <Title>Trends Chart</Title>
                  <p>
                    Engaging vertical integration so that as an end result, we
                    innovate. Drive below the line to improve overall outcomes.
                    Informing growth channels while remembering to be
                    transparent.
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
