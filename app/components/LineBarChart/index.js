/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import moment from 'moment';
import numeral from 'numeral';

import LineBar from './LineBar';
import Legend from '../Legend';

class LineBarChart extends React.Component {
  static defaultProps = {
    margin: 20,
    width: 800,
    height: 450,
  };

  innerWidth = this.props.width - 2 * this.props.margin;

  innerHeight = this.props.height - 2 * this.props.margin;

  domain = this.props.data
    .map(datum => datum.values)
    .reduce((arr, el) => arr.concat(el), []);

  state = {
    xScale: d3
      .scaleLinear()
      .domain(d3.extent(this.domain, d => d.a))
      .range([this.props.margin, this.innerWidth]),

    yScale: d3
      .scaleLinear()
      .domain([0, d3.max(this.domain, d => d.b)])
      .range([this.innerHeight, this.props.margin]),

    lineGenerator: d3
      .line()
      .x(d => this.state.xScale(d.a))
      .y(d => this.state.yScale(d.b))
      .curve(d3.curveCatmullRom.alpha(0.5)),

    xFormat: date => moment.utc(date).format('YYYY'),

    yFormat: val => numeral(val).format('0a'),
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // data hasn't been loaded yet so do nothing
    if (!nextProps.data) return null;

    const { xScale, yScale, lineGenerator } = prevState;
    const domain = nextProps.data
      .map(datum => datum.values)
      .reduce((arr, el) => arr.concat(el), []);

    xScale
      .domain(d3.extent(domain, d => d.a))
      .range([nextProps.margin, nextProps.width - 2 * nextProps.margin]);

    yScale
      .domain([0, d3.max(domain, d => d.b)])
      .range([nextProps.height - 2 * nextProps.margin, nextProps.margin]);

    lineGenerator
      .x(d => xScale(d.a))
      .y(d => yScale(d.b))
      .curve(d3.curveCatmullRom.alpha(0.5));

    // eslint-disable-next-line no-param-reassign
    prevState = { ...prevState, xScale, yScale, lineGenerator };
    return prevState;
  }

  render() {
    const { innerWidth, innerHeight } = this;
    const { data, width, height, margin } = this.props;
    const { xScale, yScale, lineGenerator, xFormat, yFormat } = this.state;

    const config = {
      width,
      height,
      margin,
      xScale,
      yScale,
      xFormat,
      yFormat,
      lineGenerator,
      innerWidth,
      innerHeight,
    };

    return (
      <>
        <Legend data={data} />
        <LineBar data={data} config={config} />
      </>
    );
  }
}

LineBarChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.number,
};

export default LineBarChart;
