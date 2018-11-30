import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numeral from 'numeral';

import { easeLinear } from 'd3-ease';
import { selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { extent, merge } from 'd3-array';
import { scaleLinear, scaleTime } from 'd3-scale';
import { line as d3Line, curveBasis } from 'd3-shape';

import Legend from '../Legend';
import LineBar from './LineBar';

class LineBarChart extends React.PureComponent {
  static selectSVGPaths = 'path__line';

  static defaultProps = {
    margin: 20,
    width: 800,
    height: 450,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // data hasn't been loaded yet so do nothing
    if (!nextProps.data) return null;

    const { xScale, yScale, lineGenerator } = prevState;

    xScale
      .domain(extent(merge(nextProps.data.map(d => d.values)), d => d.x))
      .range([nextProps.margin, nextProps.width - 2 * nextProps.margin]);

    yScale
      .domain(extent(merge(nextProps.data.map(d => d.values)), d => d.y))
      .range([nextProps.height - 2 * nextProps.margin, nextProps.margin]);

    lineGenerator
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(curveBasis);

    // eslint-disable-next-line no-param-reassign
    prevState = { ...prevState, xScale, yScale, lineGenerator };
    return prevState;
  }

  innerWidth = this.props.width - 2 * this.props.margin;

  innerHeight = this.props.height - 2 * this.props.margin;

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
    xScale: scaleTime()
      .domain(extent(merge(this.props.data.map(d => d.values)), d => d.x))
      .range([this.props.margin, this.innerWidth]),

    yScale: scaleLinear()
      .domain(extent(merge(this.props.data.map(d => d.values)), d => d.y))
      .range([this.innerHeight, this.props.margin]),

    lineGenerator: d3Line()
      .x(d => this.state.xScale(d.x))
      .y(d => this.state.yScale(d.y))
      .curve(curveBasis),
  };

  componentDidMount() {
    this.animateSVGPaths();
  }

  render() {
    const { innerWidth, innerHeight, xFormat, yFormat } = this;
    const { data, width, height, margin } = this.props;
    const { xScale, yScale, lineGenerator } = this.state;
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
  margin: PropTypes.number,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default LineBarChart;
