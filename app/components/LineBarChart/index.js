/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import * as d3 from 'd3';
import Svg from './Svg';
import XTick from './XTick';
import YTick from './YTick';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Line from './Line';

class LineBarChart extends React.Component {
  static defaultProps = {
    margin: 20,
    width: 500,
    height: 250,
  };

  _innerWidth = this.props.width - 2 * this.props.margin;

  _innerHeight = this.props.height - 2 * this.props.margin;

  state = {
    xScale: d3
      .scaleLinear()
      .domain(d3.extent(this.props.data.values, d => d.a))
      .range([this.props.margin, this._innerWidth]),

    yScale: d3
      .scaleLinear()
      .domain([0, d3.max(this.props.data.values, d => d.b)])
      .range([this._innerHeight, this.props.margin]),

    line: d3
      .line()
      .x(d => this.state.xScale(d.a))
      .y(d => this.state.yScale(d.b))
      .curve(d3.curveCatmullRom.alpha(0.5)),

    xFormat: d3.format('.2'),
    yFormat: d3.format('.2'),
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { xScale, yScale, line } = prevState;

    xScale
      .domain(d3.extent(nextProps.data.values, d => d.a)) // domain: [min,max] of a
      .range([nextProps.margin, nextProps.width - 2 * nextProps.margin]);

    yScale
      .domain([0, d3.max(nextProps.data.values, d => d.b)]) // domain [0,max] of b (start from 0)
      .range([nextProps.height - 2 * nextProps.margin, nextProps.margin]);

    line
      .x(d => xScale(d.a))
      .y(d => yScale(d.b))
      .curve(d3.curveCatmullRom.alpha(0.5));

    // eslint-disable-next-line no-param-reassign
    prevState = { ...prevState, xScale, yScale, line };
    return prevState;
  }

  render() {
    const { _innerWidth, _innerHeight } = this;
    const { data, width, height, margin } = this.props;
    const { xScale, yScale, line, xFormat, yFormat } = this.state;

    const xTicks = xScale
      .ticks(data.values.length)
      .map(
        d =>
          xScale(d) > margin && xScale(d) < _innerWidth ? (
            <XTick
              key={uid(d)}
              datum={d}
              margin={margin}
              size={_innerHeight}
              scale={xScale}
              format={xFormat}
            />
          ) : null,
      );

    const yTicks = yScale
      .ticks(data.values.length)
      .map(
        d =>
          yScale(d) > 10 && yScale(d) < height ? (
            <YTick
              key={uid(d)}
              datum={d}
              margin={margin}
              size={_innerWidth}
              scale={yScale}
              format={yFormat}
            />
          ) : null,
      );

    return (
      <Svg width={width} height={height}>
        <XAxis
          ticks={xTicks}
          margin={margin}
          width={_innerWidth}
          height={_innerHeight}
        />
        <YAxis
          ticks={yTicks}
          margin={margin}
          width={_innerWidth}
          height={_innerHeight}
        />
        {data.type === 'line' && <Line generator={line} source={data.values} />}
      </Svg>
    );
  }
}

LineBarChart.propTypes = {
  data: PropTypes.any.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.number,
};

export default LineBarChart;
