/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { uid } from 'react-uid';
import { Tabs, Checkbox } from 'antd';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import ContentLoader from './ContentLoader';
import Sidebar from '../../components/Sidebar/Sidebar';
import saga from './saga';
import reducer from './reducer';
import { makeSelectFilters } from './selectors';
import {
  loadPropTypes,
  loadIndices,
  loadGeos,
  setPropTypesFilter,
  setIndicesFilter,
  setGeosFilter,
  resetFilterBarShelf,
  hydrateFiltersFromCache,
} from './actions';
import {
  ScrollableTabPane,
  StyledIcon,
  Shelf,
  Title,
  FilterShelfItem,
  Label,
} from './styled';

export class FilterBarShelf extends React.PureComponent {
  static defaultLocalFilterState = {
    geos: false,
    propTypes: false,
    indices: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const allFiltersSelected = Object.keys(prevState.localFilters).every(
      k => !!prevState.localFilters[k],
    );
    if (allFiltersSelected) {
      nextProps.setGeosFilter(prevState.localFilters.geos);
      nextProps.setPropTypesFilter(prevState.localFilters.propTypes);
      nextProps.setIndicesFilter(prevState.localFilters.indices);
      prevState.localFilters = FilterBarShelf.defaultLocalFilterState;
      nextProps.resetFilterBarShelf(nextProps.filters);
    }
    return prevState;
  }

  state = {
    localFilters: FilterBarShelf.defaultLocalFilterState,
  };

  componentDidMount() {
    this.props.onLoadGeos();
  }

  render() {
    const { isFolded, filters } = this.props;
    return (
      <>
        <Sidebar isFolded={isFolded}>
          <div>
            <Tabs tabPosition="left">
              <ScrollableTabPane tab={<StyledIcon type="global" />} key="1">
                <Shelf>
                  {filters && !filters.geos.length ? (
                    <ContentLoader />
                  ) : (
                    <>
                      <Title>Select a Geography</Title>
                      <div>
                        {filters.geos &&
                          filters.geos.map(geo => (
                            <FilterShelfItem key={uid(geo)}>
                              <Checkbox
                                onChange={this.onGeosCheckboxChange}
                                value={geo.box2Value}
                              >
                                <Label>{geo.box2}</Label>
                              </Checkbox>
                            </FilterShelfItem>
                          ))}
                      </div>
                    </>
                  )}
                </Shelf>
              </ScrollableTabPane>
              <ScrollableTabPane tab={<StyledIcon type="bank" />} key="2">
                <Shelf>
                  {filters && !filters.propTypes.length ? (
                    <ContentLoader />
                  ) : (
                    <>
                      <Title>Select a Properety Type</Title>
                      <div>
                        {filters.propTypes &&
                          filters.propTypes.map(propType => (
                            <FilterShelfItem
                              value={propType}
                              key={uid(propType)}
                            >
                              <Checkbox
                                onChange={this.onPropTypesCheckboxChange}
                                value={propType.box3Value}
                              >
                                <Label>{propType.box3}</Label>
                              </Checkbox>
                            </FilterShelfItem>
                          ))}
                      </div>
                    </>
                  )}
                </Shelf>
              </ScrollableTabPane>
              <ScrollableTabPane tab={<StyledIcon type="audit" />} key="3">
                <Shelf>
                  {filters && !filters.indices.length ? (
                    <ContentLoader />
                  ) : (
                    <>
                      <Title>Select a Dataset</Title>
                      <div>
                        {filters.indices &&
                          filters.indices.map(index => (
                            <FilterShelfItem key={uid(index)}>
                              <Checkbox
                                onChange={this.onIndicesCheckboxChange}
                                value={index.box1Value}
                              >
                                <Label>{index.box1}</Label>
                              </Checkbox>
                            </FilterShelfItem>
                          ))}
                      </div>
                    </>
                  )}
                </Shelf>
              </ScrollableTabPane>
            </Tabs>
          </div>
        </Sidebar>
      </>
    );
  }

  onGeosCheckboxChange = e => {
    if (!(this.state.localFilters && this.state.localFilters.geos)) {
      this.props.onLoadPropTypes(e.target.value);
      this.setState(prevState => ({
        localFilters: {
          ...prevState.localFilters,
          geos: e.target.checked ? e.target.value : e.target.checked,
        },
      }));
    }
  };

  onPropTypesCheckboxChange = e => {
    if (!(this.state.localFilters && this.state.localFilters.propTypes)) {
      this.props.onLoadIndices(e.target.value);
      this.setState(prevState => ({
        localFilters: {
          ...prevState.localFilters,
          propTypes: e.target.checked ? e.target.value : e.target.checked,
        },
      }));
    }
  };

  onIndicesCheckboxChange = e => {
    if (!(this.state.localFilters && this.state.localFilters.indices)) {
      this.setState(prevState => ({
        localFilters: {
          ...prevState.localFilters,
          indices: e.target.checked ? e.target.value : e.target.checked,
        },
      }));
    }
  };
}

FilterBarShelf.propTypes = {
  isFolded: PropTypes.bool,
  filters: PropTypes.shape({
    geos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    indices: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
    propTypes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  }),
  onLoadGeos: PropTypes.func,
  onLoadIndices: PropTypes.func,
  onLoadPropTypes: PropTypes.func,
  setPropTypesFilter: PropTypes.func,
  setIndicesFilter: PropTypes.func,
  setGeosFilter: PropTypes.func,
  resetFilterBarShelf: PropTypes.func,
  hydrateFiltersFromCache: PropTypes.func,
};

export const mapDispatchToProps = dispatch => ({
  onLoadGeos: () => {
    dispatch(loadGeos());
  },
  onLoadPropTypes: geos => {
    dispatch(loadPropTypes(geos));
  },
  onLoadIndices: propTypes => {
    dispatch(loadIndices(propTypes));
  },
  setPropTypesFilter: propTypes => {
    dispatch(setPropTypesFilter(propTypes));
  },
  setIndicesFilter: indices => {
    dispatch(setIndicesFilter(indices));
  },
  setGeosFilter: geos => {
    dispatch(setGeosFilter(geos));
  },
  resetFilterBarShelf: async filters => {
    await new Promise(resolve => resolve(dispatch(resetFilterBarShelf())));
    await new Promise(resolve =>
      resolve(dispatch(hydrateFiltersFromCache(filters))),
    );
  },
});

const mapStateToProps = createStructuredSelector({
  filters: makeSelectFilters(),
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
