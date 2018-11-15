/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';

import Svg from './Svg';
import XTick from './XTick';
import YTick from './YTick';
import XAxis from './XAxis';
import YAxis from './YAxis';
import Line from './Line';

const xTicks = ({ xScale, margin, innerWidth, innerHeight, xFormat }) =>
  xScale
    .ticks()
    .map(
      d =>
        xScale(d) > margin && xScale(d) < innerWidth ? (
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

const LineBar = ({ data = [], config }) => (
  <Svg width={config.width} height={config.height}>
    <XAxis
      ticks={xTicks(config)}
      margin={config.margin}
      width={config.innerWidth}
      height={config.innerHeight}
    />
    <YAxis
      ticks={yTicks(config)}
      margin={config.margin}
      width={config.innerWidth}
      height={config.innerHeight}
    />
    {data.map(datum => (
      <Line
        key={uid(datum)}
        generator={config.lineGenerator}
        source={datum.values}
        color={datum.color}
      />
    ))}
  </Svg>
);

LineBar.propTypes = {
  data: PropTypes.any.isRequired,
  config: PropTypes.any.isRequired,
};

export default LineBar;
