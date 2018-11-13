import React from 'react';
import PropTypes from 'prop-types';

const YTick = ({ datum, margin, size, scale, format }) => (
  <g transform={`translate(${margin},${scale(datum)})`}>
    <text x="-12" y="5">
      {format(datum)}
    </text>
    <line x1="0" x2="5" y1="0" y2="0" transform="translate(-5,0)" />
    <line
      className="gridline"
      x1="0"
      x2={size - margin}
      y1="0"
      y2="0"
      transform="translate(-5,0)"
    />
  </g>
);

YTick.propTypes = {
  datum: PropTypes.number.isRequired,
  scale: PropTypes.func.isRequired,
  format: PropTypes.func.isRequired,
  margin: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default YTick;
