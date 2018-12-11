import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import Svg from './Svg';
import XTick from './XTick';
import YTick from './YTick';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Area from './Area';

const xTicks = ({ xScale, margin, innerWidth, innerHeight, xFormat }) =>
  xScale
    .ticks()
    .map(
      d =>
        xScale(d) > margin.left && xScale(d) < innerWidth ? (
          <XTick
            key={uid(d)}
            datum={d}
            margin={margin}
            size={innerHeight}
            scale={xScale}
            format={xFormat}
          />
        ) : null,
    );

const yTicks = ({ yScale, height, margin, innerWidth, yFormat }) =>
  yScale
    .ticks()
    .map(
      d =>
        yScale(d) > 10 && yScale(d) < height ? (
          <YTick
            key={uid(d)}
            datum={d}
            margin={margin}
            size={innerWidth}
            scale={yScale}
            format={yFormat}
          />
        ) : null,
    );

const StackedArea = memo(({ data = [], options }) => (
  <Svg width={options.width} height={options.height} margin={options.margin}>
    <XAxis
      ticks={xTicks(options)}
      margin={options.margin}
      width={options.innerWidth}
      height={options.innerHeight}
    />
    <YAxis
      ticks={yTicks(options)}
      margin={options.margin}
      width={options.innerWidth}
      height={options.innerHeight}
    />
    {data.map(datum => (
      <Area
        key={uid(datum)}
        generator={options.area}
        source={options.stackedData}
        color={datum.color}
      />
    ))}
  </Svg>
));

StackedArea.propTypes = {
  data: PropTypes.any.isRequired,
  options: PropTypes.any.isRequired,
};

export default StackedArea;
