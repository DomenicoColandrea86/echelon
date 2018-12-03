/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { uid } from 'react-uid';
import styled, { css } from 'styled-components';
import rem from 'utils/rem';
import { bodyFont } from 'utils/fonts';
import { charcoal } from 'utils/colors';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { Tabs, Icon, Checkbox } from 'antd';

import {
  makeSelectGeos,
  makeSelectIndices,
  makeSelectPropTypes,
  makeSelectCurrentPropTypesFilter,
  makeSelectCurrentIndicesFilter,
  makeSelectCurrentGeosFilter,
} from './selectors';

import {
  loadPropTypes,
  loadIndices,
  loadGeos,
  setPropTypesFilter,
  setIndicesFilter,
  setGeosFilter,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import Sidebar from '../../components/Sidebar/Sidebar';

const { TabPane } = Tabs;

const Shelf = styled.section`
  padding: 10px 4px;
`;

const ScrollableTabPane = styled(TabPane)`
  height: 700px;
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

export const FilterShelfItem = styled.div`
  display: block;
  position: relative;
  padding: 2px 0px;

  ${p =>
    p.value &&
    p.value.indent > 0 &&
    css`
      margin-left: 20px;
    `};
`;

export const Label = styled.span`
  font-size: 10px;
`;

export class FilterBarShelf extends React.PureComponent {
  componentDidMount() {
    this.props.onLoadGeos();
    this.props.onLoadIndices();
    this.props.onLoadPropTypes();
  }

  onGeosCheckboxChange = e => {
    if (
      !(
        this.props.currentGeosFilter &&
        e.target.value !== this.props.currentGeosFilter
      )
    ) {
      this.props.setGeosFilter(
        e.target.checked ? e.target.value : e.target.checked,
      );
    }
  };

  onPropTypesCheckboxChange = e => {
    if (
      !(
        this.props.currentPropTypesFilter &&
        e.target.value !== this.props.currentPropTypesFilter
      )
    ) {
      this.props.setPropTypesFilter(
        e.target.checked ? e.target.value : e.target.checked,
      );
    }
  };

  onIndicesCheckboxChange = e => {
    if (
      !(
        this.props.currentIndicesFilter &&
        e.target.value !== this.props.currentIndicesFilter
      )
    ) {
      this.props.setIndicesFilter(
        e.target.checked ? e.target.value : e.target.checked,
      );
    }
  };

  render() {
    const {
      onPropTypesCheckboxChange,
      onIndicesCheckboxChange,
      onGeosCheckboxChange,
    } = this;
    const {
      isFolded,
      propTypes,
      indices,
      geos,
      currentPropTypesFilter,
      currentIndicesFilter,
      currentGeosFilter,
    } = this.props;

    return (
      <>
        <Sidebar isFolded={isFolded}>
          <div>
            <Tabs tabPosition="left">
              <ScrollableTabPane tab={<StyledIcon type="global" />} key="1">
                <Shelf>
                  <Title>Select a Geography</Title>
                  <div>
                    {geos &&
                      geos.map(geo => (
                        <FilterShelfItem key={uid(geo)}>
                          <Checkbox
                            disabled={
                              !!(
                                currentGeosFilter &&
                                geo.box2Value !== currentGeosFilter
                              )
                            }
                            onChange={onGeosCheckboxChange}
                            value={geo.box2Value}
                          >
                            <Label>{geo.box2}</Label>
                          </Checkbox>
                        </FilterShelfItem>
                      ))}
                  </div>
                </Shelf>
              </ScrollableTabPane>
              <TabPane tab={<StyledIcon type="bank" />} key="2">
                <Shelf>
                  <Title>Select a Properety Type</Title>
                  <div>
                    {propTypes &&
                      propTypes.map(propType => (
                        <FilterShelfItem value={propType} key={uid(propType)}>
                          <Checkbox
                            disabled={
                              !!(
                                currentPropTypesFilter &&
                                propType.box3Value !== currentPropTypesFilter
                              )
                            }
                            onChange={onPropTypesCheckboxChange}
                            value={propType.box3Value}
                          >
                            <Label>{propType.box3}</Label>
                          </Checkbox>
                        </FilterShelfItem>
                      ))}
                  </div>
                </Shelf>
              </TabPane>
              <ScrollableTabPane tab={<StyledIcon type="audit" />} key="3">
                <Shelf>
                  <Title>Select a Dataset</Title>
                  <div>
                    {indices &&
                      indices.map(index => (
                        <FilterShelfItem key={uid(index)}>
                          <Checkbox
                            disabled={
                              !!(
                                currentIndicesFilter &&
                                index.box1Value !== currentIndicesFilter
                              )
                            }
                            onChange={onIndicesCheckboxChange}
                            value={index.box1Value}
                          >
                            <Label>{index.box1}</Label>
                          </Checkbox>
                        </FilterShelfItem>
                      ))}
                  </div>
                </Shelf>
              </ScrollableTabPane>
              <TabPane tab={<StyledIcon type="line-chart" />} key="4">
                <Shelf>
                  <Title>Trends Chart</Title>
                  <p>
                    Geography: {currentGeosFilter}
                    <br />
                    Property Type: {currentPropTypesFilter}
                    <br />
                    Dataset: {currentIndicesFilter}
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
  currentPropTypesFilter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  currentIndicesFilter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  currentGeosFilter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  geos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  indices: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  propTypes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadGeos: PropTypes.func,
  onLoadIndices: PropTypes.func,
  onLoadPropTypes: PropTypes.func,
  setPropTypesFilter: PropTypes.func,
  setIndicesFilter: PropTypes.func,
  setGeosFilter: PropTypes.func,
};

export const mapDispatchToProps = dispatch => ({
  onLoadPropTypes: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadPropTypes());
  },
  onLoadIndices: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadIndices());
  },
  onLoadGeos: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadGeos());
  },
  setPropTypesFilter: e => {
    dispatch(setPropTypesFilter(e));
  },
  setIndicesFilter: e => {
    dispatch(setIndicesFilter(e));
  },
  setGeosFilter: e => {
    dispatch(setGeosFilter(e));
  },
});

const mapStateToProps = createStructuredSelector({
  geos: makeSelectGeos(),
  indices: makeSelectIndices(),
  propTypes: makeSelectPropTypes(),
  currentPropTypesFilter: makeSelectCurrentPropTypesFilter(),
  currentIndicesFilter: makeSelectCurrentIndicesFilter(),
  currentGeosFilter: makeSelectCurrentGeosFilter(),
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
