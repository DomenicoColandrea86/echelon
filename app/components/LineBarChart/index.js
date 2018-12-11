/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numeral from 'numeral';

import { easeLinear } from 'd3-ease';
import { selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { extent, merge, max } from 'd3-array';
import { scaleLinear, scaleTime } from 'd3-scale';
import { line as d3Line } from 'd3-shape';

import withResponsive from './WithResponsive';
import Legend from '../Legend';
import LineBar from './LineBar';

class LineBarChart extends React.Component {
  static selectSVGPaths = 'path__line';

  static defaultProps = {
    width: 1000,
    height: 500,
    margin: { top: 25, right: 20, bottom: 70, left: 40 },
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let { width } = prevState;
    const { xScale, yScale, lineGenerator } = prevState;

    // data hasn't been loaded yet so do nothing
    if (!nextProps.data) return null;

    // eslint-disable-next-line prefer-destructuring
    width = nextProps.width;

    xScale
      .domain(extent(merge(nextProps.data.map(d => d.values)), d => d.x))
      .range([
        nextProps.margin.left,
        nextProps.width - nextProps.margin.left - nextProps.margin.right,
      ]);

    yScale
      .domain([0, max(merge(nextProps.data.map(d => d.values)), d => d.y)])
      .range([
        nextProps.height - nextProps.margin.top - nextProps.margin.bottom,
        nextProps.margin.top,
      ]);

    lineGenerator.x(d => xScale(d.x)).y(d => yScale(d.y));

    // eslint-disable-next-line no-param-reassign
    prevState = { ...prevState, width, xScale, yScale, lineGenerator };
    return prevState;
  }

  innerWidth =
    this.props.width - this.props.margin.left - this.props.margin.right;

  innerHeight =
    this.props.height - this.props.margin.top - this.props.margin.bottom;

  xFormat = date => moment.utc(date).format('YYYY');

  yFormat = val => numeral(val).format('0a');

  animateSVGPaths = () => {
    const svg = selectAll(`.${LineBarChart.selectSVGPaths}`);
    if (svg && svg.node()) {
      transition(
        svg
          .attr(
            'stroke-dasharray',
            `${svg.node().getTotalLength()} ${svg.node().getTotalLength()}`,
          )
          .attr('stroke-dashoffset', svg.node().getTotalLength())
          .transition()
          .duration(1400)
          .ease(easeLinear)
          .attr('stroke-dashoffset', 0),
      );
    }
  };

  // Component's state
  state = {
    width: this.props.width - this.props.margin.left - this.props.margin.right,
    xScale: scaleTime()
      .domain(extent(merge(this.props.data.map(d => d.values)), d => d.x))
      .range([this.props.margin.left, this.innerWidth]),

    yScale: scaleLinear()
      .domain([0, max(merge(this.props.data.map(d => d.values)), d => d.y)])
      .range([this.innerHeight, this.props.margin.top]),

    lineGenerator: d3Line()
      .x(d => this.state.xScale(d.x))
      .y(d => this.state.yScale(d.y)),
  };

  componentDidMount() {
    this.animateSVGPaths();
  }

  render() {
    const { innerWidth, innerHeight, xFormat, yFormat } = this;
    const { data, height, margin } = this.props;
    const { xScale, yScale, lineGenerator } = this.state;
    const width =
      this.state.width - this.props.margin.left - this.props.margin.right;
    const options = {
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
        <LineBar data={data} options={options} />
      </>
    );
  }
}

LineBarChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default withResponsive(LineBarChart);
